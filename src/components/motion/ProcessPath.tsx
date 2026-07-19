"use client";

import { motion } from "framer-motion";
import { easing } from "@/lib/motionTokens";

// Self-drawing line connecting the 4 process steps — the line draws itself
// left to right as the section scrolls into view; Process.tsx staggers each
// step's reveal to roughly match where the line has reached.
export default function ProcessPath() {
  return (
    <svg
      aria-hidden
      className="absolute left-0 top-6 hidden h-[2px] w-full lg:block"
      preserveAspectRatio="none"
      viewBox="0 0 100 1"
    >
      <motion.line
        x1="2"
        y1="0.5"
        x2="98"
        y2="0.5"
        stroke="var(--accent-current)"
        strokeWidth="0.6"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1.1, ease: easing.framer }}
      />
    </svg>
  );
}
