"use client";

import { motion } from "framer-motion";
import { hero, stats } from "@/lib/content";
import { photos } from "@/lib/photos";
import { easing, duration } from "@/lib/motionTokens";
import Button from "./ui/Button";
import Star from "./ui/Star";
import StatCounter from "./ui/StatCounter";
import { Photo } from "./ui/DuotoneMedia";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-blue">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 pb-16 pt-12 lg:grid-cols-[auto_1fr_auto] lg:gap-12 lg:pb-24 lg:pt-20">
        {/* Stats rail — vertical on desktop, horizontal row on mobile (bottom) */}
        <div className="order-3 grid grid-cols-3 gap-6 border-t-2 border-white/20 pt-8 lg:order-1 lg:grid-cols-1 lg:content-start lg:gap-10 lg:border-r-2 lg:border-t-0 lg:pr-10 lg:pt-2">
          {stats.map((s) => (
            <StatCounter key={s.label} {...s} />
          ))}
        </div>

        {/* Headline block */}
        <div className="order-1 lg:order-2">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: duration.reveal, ease: easing.framer }}
            className="mb-6 flex items-center gap-2 font-grotesk text-xs font-bold uppercase tracking-[0.2em] text-lime sm:text-sm"
          >
            <Star className="h-3.5 w-3.5 shrink-0" />
            {hero.eyebrow}
          </motion.p>

          <h1 className="font-display uppercase leading-[0.9] tracking-tight text-[clamp(4rem,13vw,10.5rem)]">
            {/* Lines enter from opposite sides — the reference's collage energy */}
            <motion.span
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: duration.slow, ease: easing.framer, delay: 0.1 }}
              className="block text-white"
            >
              {hero.headline[0].text}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: duration.slow, ease: easing.framer, delay: 0.25 }}
              className="flex items-center gap-4"
            >
              <Star className="h-[0.35em] w-[0.35em] shrink-0 text-lime" spin />
              <span className="text-outline">{hero.headline[1].text}</span>
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: duration.reveal, ease: easing.framer, delay: 0.4 }}
            className="mt-6 max-w-md text-base text-white/90 sm:text-lg"
          >
            {hero.subhead}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: duration.reveal, ease: easing.framer, delay: 0.5 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
            <Button href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </Button>
          </motion.div>
        </div>

        {/* Photo slot */}
        <motion.div
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          transition={{ duration: duration.slow, ease: easing.framer, delay: 0.35 }}
          className="relative order-2 lg:order-3 lg:w-[340px] xl:w-[380px]"
        >
          <Photo slot={photos.hero} tone="blue" aspect="aspect-[4/5]" className="border-2 border-white/20" />
          <Star className="absolute -right-4 -top-4 h-12 w-12 text-lime" spin />
        </motion.div>
      </div>
    </section>
  );
}
