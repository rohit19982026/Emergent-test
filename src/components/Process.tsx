"use client";

import { motion } from "framer-motion";
import { process } from "@/lib/content";
import { easing, duration, stagger } from "@/lib/motionTokens";
import SectionHeading from "./ui/SectionHeading";

export default function Process() {
  return (
    <section id="process" className="bg-paper py-20 text-ink sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="How we work"
          segments={[
            { text: "FROM BRIEF", style: "fill" },
            { text: "TO", style: "lime" },
            { text: "FINAL CUT.", style: "outline" },
          ]}
          tone="light"
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => (
            <motion.article
              key={step.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: duration.reveal,
                ease: easing.framer,
                delay: i * stagger.loose,
              }}
              // Alternating vertical offset gives the staggered deck look
              className={`group flex flex-col gap-4 bg-blue p-7 text-white transition-transform duration-[var(--duration-base)] ease-[var(--ease-signature)] hover:-translate-y-1 ${
                i % 2 === 1 ? "lg:mt-10" : ""
              }`}
              style={{ borderRadius: "var(--radius-card)" }}
            >
              <span className="font-display text-6xl leading-none text-outline">{step.step}</span>
              <h3 className="font-display text-3xl uppercase">{step.title}</h3>
              <p className="text-sm leading-relaxed text-white/85">{step.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
