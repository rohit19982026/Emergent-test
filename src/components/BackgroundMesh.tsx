"use client";

import { useReducedMotion } from "framer-motion";

// Slow-drifting, heavily-blurred gradient blobs behind the Services/Process
// sections — restrained (low opacity, ~24-32s loops), never competes with
// foreground content. Pure CSS animation so it costs nothing on the R3F
// render loop. Static (no animation) under reduced motion.
export default function BackgroundMesh() {
  const reduced = useReducedMotion();

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div
        className={`absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-coral/10 blur-[110px] ${
          reduced ? "" : "animate-mesh-drift-a"
        }`}
      />
      <div
        className={`absolute -right-32 top-1/3 h-[380px] w-[380px] rounded-full bg-cobalt/10 blur-[110px] ${
          reduced ? "" : "animate-mesh-drift-b"
        }`}
      />
    </div>
  );
}
