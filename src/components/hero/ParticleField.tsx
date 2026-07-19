"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame, useThree, extend } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import * as THREE from "three";
import { generateFormations } from "@/lib/particles/generateFormations";
import { PARTICLE_COLOR_CLOUD, PARTICLE_COLOR_NETWORK, PARTICLE_COUNT } from "@/lib/particles/constants";
import { particleVertexShader, particleFragmentShader } from "./particleShaders";
import { useSceneStore } from "@/lib/sceneStore";

const ParticleMaterial = shaderMaterial(
  {
    uProgress: 0,
    uTime: 0,
    uMouse: new THREE.Vector2(0, 0),
    uDisplaceStrength: 0.35,
    uPixelRatio: 1,
    uAberration: 0.02,
    uColorCloud: new THREE.Color(PARTICLE_COLOR_CLOUD),
    uColorNetwork: new THREE.Color(PARTICLE_COLOR_NETWORK),
  },
  particleVertexShader,
  particleFragmentShader
);

extend({ ParticleMaterial });

declare module "@react-three/fiber" {
  interface ThreeElements {
    particleMaterial: Record<string, unknown>;
  }
}

// Precomputed k-NN-style edges for the network formation only. Rendered as
// a separate line set (not part of the point shader) and faded in only as
// the field arrives at the network stage, so it never clutters the
// cloud/mark states.
function NetworkEdges({ positions, edges }: { positions: Float32Array; edges: Uint16Array }) {
  const materialRef = useRef<THREE.LineBasicMaterial>(null);

  useFrame(() => {
    if (!materialRef.current) return;
    const progress = useSceneStore.getState().progress;
    materialRef.current.opacity = THREE.MathUtils.smoothstep(progress, 1.5, 2.0) * 0.22;
  });

  return (
    <lineSegments>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="index" args={[edges, 1]} />
      </bufferGeometry>
      <lineBasicMaterial ref={materialRef} color={PARTICLE_COLOR_NETWORK} transparent opacity={0} />
    </lineSegments>
  );
}

export default function ParticleField({ reducedMotion = false }: { reducedMotion?: boolean }) {
  const materialRef = useRef<THREE.ShaderMaterial & { uProgress: number }>(null);
  const mouseTarget = useRef(new THREE.Vector2(0, 0));
  const mouseCurrent = useRef(new THREE.Vector2(999, 999)); // parked far away until real interaction
  const hasPointer = useRef(false);
  const { viewport } = useThree();

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const count = isMobile ? PARTICLE_COUNT.mobile : PARTICLE_COUNT.desktop;
  // Low-end signal: mobile viewport or few logical cores. Gates the fake
  // chromatic-aberration fragment branch, decided once at mount.
  const isLowEnd =
    isMobile || (typeof navigator !== "undefined" && (navigator.hardwareConcurrency ?? 8) <= 4);

  const formations = useMemo(() => generateFormations(count), [count]);

  useEffect(() => {
    if (reducedMotion) return;
    const onPointerMove = () => {
      hasPointer.current = true;
    };
    window.addEventListener("pointermove", onPointerMove, { once: true });
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, [reducedMotion]);

  useFrame((state, delta) => {
    if (!materialRef.current) return;
    materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime();

    // Imperative read (not the reactive hook) — GSAP writes this at
    // scroll-rate, we read it at frame-rate, React never re-renders for it.
    materialRef.current.uniforms.uProgress.value = useSceneStore.getState().progress;

    if (hasPointer.current && !reducedMotion) {
      // Smoothly ease the raw pointer position rather than snapping.
      mouseTarget.current.set(
        (state.pointer.x * viewport.width) / 2,
        (state.pointer.y * viewport.height) / 2
      );
      mouseCurrent.current.lerp(mouseTarget.current, Math.min(1, delta * 5));
      materialRef.current.uniforms.uMouse.value.copy(mouseCurrent.current);
    }
  });

  return (
    <>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[formations.cloud, 3]} />
          <bufferAttribute attach="attributes-aPositionCloud" args={[formations.cloud, 3]} />
          <bufferAttribute attach="attributes-aPositionMark" args={[formations.mark, 3]} />
          <bufferAttribute attach="attributes-aPositionNetwork" args={[formations.network, 3]} />
        </bufferGeometry>
        <particleMaterial
          ref={materialRef}
          transparent
          depthWrite={false}
          blending={THREE.NormalBlending}
          uPixelRatio={typeof window !== "undefined" ? Math.min(window.devicePixelRatio, 1.5) : 1}
          uMouse={[999, 999]}
          uProgress={0}
          uDisplaceStrength={reducedMotion ? 0 : 0.35}
          uAberration={isLowEnd ? 0 : 0.02}
        />
      </points>
      <NetworkEdges positions={formations.network} edges={formations.edges} />
    </>
  );
}
