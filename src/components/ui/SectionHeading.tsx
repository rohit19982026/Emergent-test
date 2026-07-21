"use client";

import { motion } from "framer-motion";
import type { HeadlineSegment } from "@/lib/content";
import { easing, duration, stagger } from "@/lib/motionTokens";
import Star from "./Star";

type SectionHeadingProps = {
  eyebrow?: string;
  segments: HeadlineSegment[];
  /** "dark" = on ink/blue blocks, "light" = on paper blocks. */
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
  /** Display size — hero/statement moments go "xl". */
  size?: "lg" | "xl";
};

// The word masks clip their children completely while hidden, so the
// in-view observer must sit on the (never-clipped) h2 and propagate to the
// words via variants — observing the clipped spans themselves never fires.
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: stagger.base } },
};

const wordVariants = {
  hidden: { y: "110%" },
  visible: {
    y: 0,
    transition: { duration: duration.reveal, ease: easing.framer },
  },
};

export default function SectionHeading({
  eyebrow,
  segments,
  tone = "dark",
  align = "left",
  className = "",
  size = "lg",
}: SectionHeadingProps) {
  // Lime fails contrast on paper, so light sections swap the lime accent
  // for blue; outline strokes flip to ink for the same reason.
  const styleClass = (style: HeadlineSegment["style"]) => {
    if (style === "outline") return tone === "dark" ? "text-outline" : "text-outline-ink";
    if (style === "lime") return tone === "dark" ? "text-lime" : "text-blue";
    return tone === "dark" ? "text-white" : "text-ink";
  };

  const sizeClass =
    size === "xl"
      ? "text-[clamp(3rem,10vw,8.5rem)]"
      : "text-[clamp(2.25rem,6vw,4.5rem)]";

  return (
    <div className={`${align === "center" ? "text-center" : ""} ${className}`}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: duration.base, ease: easing.framer }}
          className={`mb-4 flex items-center gap-2 font-grotesk text-sm font-bold uppercase tracking-[0.2em] sm:mb-6 ${
            align === "center" ? "justify-center" : ""
          } ${tone === "dark" ? "text-lime" : "text-blue"}`}
        >
          <Star className="h-3.5 w-3.5" />
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className={`font-display uppercase leading-[0.95] tracking-tight ${sizeClass}`}
      >
        {segments.map((seg, i) => (
          <span key={i}>
            <span className="inline-block overflow-hidden pb-[0.08em] align-bottom">
              <motion.span
                variants={wordVariants}
                className={`inline-block ${styleClass(seg.style)}`}
              >
                {seg.text}
              </motion.span>
            </span>{" "}
          </span>
        ))}
      </motion.h2>
    </div>
  );
}
