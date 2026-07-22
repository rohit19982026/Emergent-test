"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Bot, Clapperboard, Film, Globe, Palette, Smartphone } from "lucide-react";
import { services } from "@/lib/content";
import { easing, duration, stagger } from "@/lib/motionTokens";
import SectionHeading from "./ui/SectionHeading";

const icons = { Film, Clapperboard, Palette, Smartphone, Globe, Bot };

export default function Services() {
  return (
    <section id="services" className="bg-ink py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="What we do"
          segments={[
            { text: "ONE TEAM.", style: "fill" },
            { text: "EVERY", style: "lime" },
            { text: "CREATIVE PROBLEM.", style: "outline" },
          ]}
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 32, rotate: i % 2 === 0 ? -1 : 1 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: duration.reveal,
                  ease: easing.framer,
                  delay: (i % 3) * stagger.base,
                }}
                className={`group flex flex-col gap-5 border-2 p-7 transition-all duration-[var(--duration-base)] ease-[var(--ease-signature)] hover:-translate-y-1 ${
                  service.featured
                    ? "border-blue bg-blue hover:border-lime"
                    : "border-white/15 bg-ink hover:border-lime"
                }`}
                style={{ borderRadius: "var(--radius-card)" }}
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-lime text-ink">
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </span>
                  <ArrowUpRight className="h-6 w-6 text-white/40 transition-all duration-[var(--duration-base)] group-hover:rotate-45 group-hover:text-lime" />
                </div>
                <h3 className="font-display text-2xl uppercase leading-tight text-white sm:text-3xl">
                  {service.title}
                </h3>
                <p className={`text-sm leading-relaxed ${service.featured ? "text-white/90" : "text-white/65"}`}>
                  {service.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
