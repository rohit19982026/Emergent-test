"use client";

import { motion } from "framer-motion";
import { contact } from "@/lib/content";
import { easing, duration } from "@/lib/motionTokens";
import SectionHeading from "./ui/SectionHeading";
import ArrowCircle from "./ui/ArrowCircle";
import Star from "./ui/Star";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-blue py-24 sm:py-36">
      <Star className="absolute -left-10 top-10 h-32 w-32 text-white/10" spin />
      <Star className="absolute -right-8 bottom-8 h-24 w-24 text-lime/30" spin />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 text-center">
        <SectionHeading
          eyebrow={contact.eyebrow}
          segments={contact.headline}
          align="center"
          size="xl"
        />
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: duration.reveal, ease: easing.framer }}
          className="max-w-xl text-base text-white/90 sm:text-lg"
        >
          {contact.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: duration.reveal, ease: easing.framer, delay: 0.15 }}
          className="flex flex-col items-center gap-5"
        >
          <ArrowCircle
            href={`mailto:${contact.email}`}
            ariaLabel={`Email ${contact.email}`}
            size="lg"
          />
          <a
            href={`mailto:${contact.email}`}
            className="font-grotesk text-lg font-bold uppercase tracking-[0.15em] text-white underline decoration-lime decoration-2 underline-offset-8 transition-colors hover:text-lime"
          >
            {contact.email}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
