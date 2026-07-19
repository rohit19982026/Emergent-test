"use client";

import { motion, useReducedMotion } from "framer-motion";

type Variant = "creative" | "ai";

// Small looping animated SVG motif used as the Services pillar-card header,
// replacing a static icon — signals "we make motion graphics" directly on
// the page rather than just describing it in copy. Short (~2.4s), seamless
// loop, subtle. Disabled (falls back to a static frame) under reduced motion.
export default function ServiceLoopIcon({ variant }: { variant: Variant }) {
  const reduced = useReducedMotion();
  const color = variant === "creative" ? "var(--coral)" : "var(--cobalt)";

  if (variant === "creative") {
    const bars = [6, 14, 9, 16, 7];
    return (
      <svg width="28" height="20" viewBox="0 0 28 20" aria-hidden>
        {bars.map((h, i) => (
          <motion.rect
            key={i}
            x={i * 6}
            width="3"
            rx="1.5"
            fill={color}
            initial={{ height: h, y: (20 - h) / 2 }}
            animate={
              reduced
                ? {}
                : {
                    height: [h, h * 0.35, h],
                    y: [(20 - h) / 2, (20 - h * 0.35) / 2, (20 - h) / 2],
                  }
            }
            transition={{
              duration: 1.2,
              repeat: reduced ? 0 : Infinity,
              ease: "easeInOut",
              delay: i * 0.12,
            }}
          />
        ))}
      </svg>
    );
  }

  const nodes: [number, number][] = [
    [4, 4],
    [24, 4],
    [14, 16],
  ];

  return (
    <svg width="28" height="20" viewBox="0 0 28 20" aria-hidden>
      <line x1={nodes[0][0]} y1={nodes[0][1]} x2={nodes[1][0]} y2={nodes[1][1]} stroke={color} strokeWidth="1" opacity="0.35" />
      <line x1={nodes[1][0]} y1={nodes[1][1]} x2={nodes[2][0]} y2={nodes[2][1]} stroke={color} strokeWidth="1" opacity="0.35" />
      <line x1={nodes[2][0]} y1={nodes[2][1]} x2={nodes[0][0]} y2={nodes[0][1]} stroke={color} strokeWidth="1" opacity="0.35" />
      {nodes.map(([cx, cy], i) => (
        <motion.circle
          key={i}
          cx={cx}
          cy={cy}
          r="2.5"
          fill={color}
          initial={{ opacity: 0.4, scale: 1 }}
          animate={reduced ? {} : { opacity: [0.4, 1, 0.4], scale: [1, 1.3, 1] }}
          transition={{
            duration: 1.6,
            repeat: reduced ? 0 : Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        />
      ))}
    </svg>
  );
}
