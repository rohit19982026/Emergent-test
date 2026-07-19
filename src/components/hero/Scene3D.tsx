"use client";

import { Canvas } from "@react-three/fiber";
import ParticleField from "./ParticleField";

export default function Scene3D() {
  const reduced =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      // Under reduced motion, render once and stop — a frozen cloud instead
      // of a continuously-animating WebGL loop.
      frameloop={reduced ? "demand" : "always"}
    >
      <ParticleField reducedMotion={reduced} />
    </Canvas>
  );
}
