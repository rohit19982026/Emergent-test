"use client";

import { motion } from "framer-motion";
import { strokeA, strokeB } from "@/lib/particles/markPath";
import { easing, duration } from "@/lib/motionTokens";

// Renders the exact same convergence-mark control points used by the hero's
// `mark` particle formation, as a 2D SVG redraw — bookends the page: the
// hero's particles resolve toward this shape mid-scroll, and it reappears
// here as the closing visual.
function toPathData(points: [number, number][], scale: number, offset: number) {
  return points
    .map(([x, y], i) => {
      const px = (x * scale + offset).toFixed(2);
      const py = (-y * scale + offset).toFixed(2);
      return `${i === 0 ? "M" : "L"}${px},${py}`;
    })
    .join(" ");
}

export default function SignatureMark({ size = 96 }: { size?: number }) {
  const scale = size * 0.42;
  const offset = size / 2;
  const pathA = toPathData(strokeA, scale, offset);
  const pathB = toPathData(strokeB, scale, offset);

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden>
      <motion.path
        d={pathA}
        fill="none"
        stroke="var(--coral)"
        strokeWidth={3}
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: duration.slow, ease: easing.framer }}
      />
      <motion.path
        d={pathB}
        fill="none"
        stroke="var(--cobalt)"
        strokeWidth={3}
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: duration.slow, ease: easing.framer, delay: 0.15 }}
      />
    </svg>
  );
}
