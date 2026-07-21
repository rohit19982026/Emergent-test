"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { about } from "@/lib/content";
import { photos } from "@/lib/photos";
import { easing, duration, stagger } from "@/lib/motionTokens";
import SectionHeading from "./ui/SectionHeading";
import Star from "./ui/Star";
import { Photo } from "./ui/DuotoneMedia";

export default function About() {
  return (
    <section id="about" className="bg-paper py-20 text-ink sm:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading eyebrow={about.eyebrow} segments={about.headline} tone="light" />
          <p className="mt-6 max-w-lg text-base leading-relaxed text-ink/75 sm:text-lg">
            {about.body}
          </p>

          <ul className="mt-8 flex flex-col gap-4">
            {about.checklist.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{
                  duration: duration.reveal,
                  ease: easing.framer,
                  delay: i * stagger.loose,
                }}
                className="flex items-center gap-4"
              >
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-lime text-ink">
                  <Check className="h-5 w-5" strokeWidth={3} />
                </span>
                <span className="font-grotesk text-sm font-bold uppercase tracking-wide sm:text-base">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>

          {/* Tool tags — real capability, not fake skill percentages */}
          <div className="mt-10 flex flex-wrap gap-3">
            {about.tools.map((tool) => (
              <span
                key={tool}
                className="border-2 border-ink px-4 py-2 font-grotesk text-xs font-bold uppercase tracking-[0.15em] transition-colors duration-[var(--duration-base)] hover:bg-ink hover:text-lime"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <Photo slot={photos.about} tone="blue" aspect="aspect-[4/5]" className="border-2 border-ink" />
          <Star className="absolute -left-5 -top-5 h-14 w-14 text-blue" spin />
          <div className="absolute -bottom-4 -right-2 bg-lime px-5 py-3 font-display text-lg uppercase tracking-wide text-ink sm:text-xl">
            Est. one team, zero handoffs
          </div>
        </div>
      </div>
    </section>
  );
}
