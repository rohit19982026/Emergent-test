"use client";

import { motion } from "framer-motion";
import { easing } from "@/lib/motionTokens";

// Self-drawing line connecting the 4 process steps. Below `sm` the steps
// stack into a single column instead of a row, so the horizontal line is
// swapped for a vertical one drawing top to bottom along the same left
// edge the step numbers sit on — same technique, orientation matched to
// how the steps are actually laid out at that width.
export default function ProcessPath() {
  return (
    <>
      {/* SVG is a replaced element with an intrinsic aspect ratio from its
          viewBox — giving it an explicit width plus top-0/bottom-0 makes
          browsers size its height from that ratio instead of stretching to
          fill, capping it at a fraction of the real column height. Wrapping
          in a plain (non-replaced) div for the stretch, then sizing the svg
          at 100%/100% of that already-resolved box, sidesteps it. */}
      <div className="absolute left-6 top-0 bottom-0 block w-[2px] sm:hidden">
        <svg
          aria-hidden
          className="h-full w-full"
          preserveAspectRatio="none"
          viewBox="0 0 1 100"
        >
          <motion.line
            x1="0.5"
            y1="2"
            x2="0.5"
            y2="98"
            stroke="var(--accent-current)"
            strokeWidth="1.2"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, amount: "some" }}
            transition={{ duration: 1.4, ease: easing.framer }}
          />
        </svg>
      </div>
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
    </>
  );
}
