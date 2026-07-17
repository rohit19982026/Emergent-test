"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Icosahedron } from "@react-three/drei";
import type { Mesh } from "three";

function AnimatedVertex() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += delta * 0.08;
    meshRef.current.rotation.y += delta * 0.12;
    const t = state.clock.getElapsedTime();
    meshRef.current.position.y = Math.sin(t * 0.5) * 0.15;
  });

  return (
    <Icosahedron ref={meshRef} args={[1.6, 4]}>
      <MeshDistortMaterial
        color="#7c8cff"
        attach="material"
        distort={0.35}
        speed={1.4}
        roughness={0.15}
        metalness={0.6}
        emissive="#5eead4"
        emissiveIntensity={0.08}
        wireframe={false}
      />
    </Icosahedron>
  );
}

export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 3, 4]} intensity={1.2} color="#f2f3f5" />
      <pointLight position={[-3, -2, -2]} intensity={0.8} color="#5eead4" />
      <AnimatedVertex />
    </Canvas>
  );
}
