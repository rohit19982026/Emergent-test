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
    // Fades in ~500ms after mount, after the headline's SplitText reveal
    // has already started — motion draws the eye before static text does,
    // so the particle field enters second, letting the headline win the
    // first read instead of competing with it from frame one.
    <div className="relative h-full w-full hero-scene-in">
      <Suspense fallback={<SceneFallback />}>
        <Scene3D />
      </Suspense>
    </div>
  );
}
