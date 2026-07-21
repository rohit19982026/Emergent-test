"use client";

import { motion } from "framer-motion";
import { hero, stats } from "@/lib/content";
import { easing, duration } from "@/lib/motionTokens";
import Button from "./ui/Button";
import Star from "./ui/Star";
import StatCounter from "./ui/StatCounter";

// The camera showreel is the hero's background, not a placed media panel:
// it fills the whole section behind the type, so its only edges are the
// section's own boundaries. The section bg is the exact blue of the video
// interior (--blue), so wherever object-fit crops, video meets CSS
// invisibly. scale(1.18) keeps the source's 100px letterbox bars (and the
// bottom-right watermark) outside the visible area at every aspect ratio —
// object-cover only crops harder as the viewport gets narrower.
export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden bg-blue">
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: duration.slow, ease: easing.framer }}
        className="absolute inset-0 scale-[1.18]"
      >
        <video
          src="/photos/hero-camera.mp4"
          poster="/photos/hero-camera-poster.jpg"
          className="h-full w-full object-cover object-[75%_50%] motion-reduce:hidden"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        {/* Reduced motion: hold the assembled-camera still instead of playing */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/photos/hero-camera-poster.jpg"
          alt=""
          className="hidden h-full w-full object-cover object-[75%_50%] motion-reduce:block"
        />
      </motion.div>

      {/* Same-hue scrim: exact --blue with falling alpha, so the type zone
          calms down without ever reading as an overlay shape. Vertical on
          mobile (text stacks top-to-bottom), horizontal on desktop. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,34,238,0.65)_0%,rgba(13,34,238,0.2)_55%,rgba(13,34,238,0.45)_100%)] lg:bg-[linear-gradient(90deg,rgba(13,34,238,0.85)_0%,rgba(13,34,238,0.35)_40%,rgba(13,34,238,0)_65%)]"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-6 pb-16 pt-12 lg:grid-cols-[auto_1fr] lg:gap-12 lg:pb-24 lg:pt-20">
        {/* Stats rail — vertical on desktop, horizontal row on mobile (bottom) */}
        <div className="order-3 grid grid-cols-3 gap-6 border-t-2 border-white/20 pt-8 lg:order-1 lg:grid-cols-1 lg:content-start lg:gap-10 lg:border-r-2 lg:border-t-0 lg:pr-10 lg:pt-2">
          {stats.map((s) => (
            <StatCounter key={s.label} {...s} />
          ))}
        </div>

        {/* Headline block — type sits over the drifting camera parts */}
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
      </div>
    </section>
  );
}
