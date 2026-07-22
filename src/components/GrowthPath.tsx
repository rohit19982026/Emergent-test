"use client";

import { motion } from "framer-motion";
import { growthPath } from "@/lib/content";
import { easing, duration, stagger } from "@/lib/motionTokens";
import SectionHeading from "./ui/SectionHeading";
import Star from "./ui/Star";

// The business narrative: how an engagement expands from content into
// owned brand/web assets and finally AI systems. Blue block so it reads
// as its own beat between the black Services grid and the paper About.
export default function GrowthPath() {
  return (
    <section id="growth" className="bg-blue py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow={growthPath.eyebrow} segments={growthPath.headline} />

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {growthPath.steps.map((step, i) => (
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
              className="group relative flex flex-col gap-4 border-2 border-white/15 bg-ink p-7 transition-transform duration-[var(--duration-base)] ease-[var(--ease-signature)] hover:-translate-y-1"
              style={{ borderRadius: "var(--radius-card)" }}
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-6xl leading-none text-lime">{step.step}</span>
                <Star className="h-6 w-6 text-white/25 transition-colors group-hover:text-lime" />
              </div>
              <h3 className="font-display text-3xl uppercase">{step.title}</h3>
              <p className="text-sm leading-relaxed text-white/80">{step.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
