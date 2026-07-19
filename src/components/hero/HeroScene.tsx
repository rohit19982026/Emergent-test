"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const Scene3D = dynamic(() => import("./Scene3D"), {
  ssr: false,
  loading: () => <SceneFallback />,
});

function SceneFallback() {
  // Matches the particle field's resting look — a soft coral haze — so the
  // loading state doesn't jar against what mounts a moment later.
  return (
    <div
      aria-hidden
      className="h-full w-full animate-pulse rounded-full bg-gradient-to-br from-coral/20 to-coral/5 blur-2xl"
    />
  );
}

export default function HeroScene() {
  return (
    <div className="relative h-full w-full">
      <Suspense fallback={<SceneFallback />}>
        <Scene3D />
      </Suspense>
    </div>
  );
}
