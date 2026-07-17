"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const Scene3D = dynamic(() => import("./Scene3D"), {
  ssr: false,
  loading: () => <SceneFallback />,
});

function SceneFallback() {
  return (
    <div
      aria-hidden
      className="h-full w-full animate-pulse rounded-full bg-gradient-to-br from-accent/30 to-accent-2/20 blur-2xl"
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
