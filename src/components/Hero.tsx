"use client";

import { motion } from "framer-motion";
import { hero } from "@/lib/content";
import { easing, duration } from "@/lib/motionTokens";
import Button from "./ui/Button";
import Star from "./ui/Star";

// The camera showreel is the hero's background, not a placed media panel.
// Desktop centers a short text block in a full-viewport section with the
// camera absolutely positioned behind it. Mobile/tablet can't reuse that:
// centering a short block in min-h-100svh leaves a large empty gap above
// it, so below lg the section is a plain top-to-bottom flow instead —
// text, then the camera band directly beneath it, section height just
// follows the content.
export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-blue lg:flex lg:min-h-[100svh] lg:items-center"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-12 lg:pb-24 lg:pt-20">
        {/* Headline block — left-anchored, capped width so the camera keeps
            open room to its right; type sits over the drifting camera parts */}
        <div className="lg:max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: duration.reveal, ease: easing.framer }}
            className="mb-6 flex items-center gap-2 font-grotesk text-xs font-bold uppercase tracking-[0.2em] text-lime sm:text-sm"
          >
            <Star className="h-3.5 w-3.5 shrink-0" />
            {hero.eyebrow}
          </motion.p>

          {/* Deep-blue glow separates the outline word from any texture
              behind it while staying invisible as an effect (same hue). */}
          <h1 className="font-display uppercase leading-[0.9] tracking-tight text-[clamp(4rem,13vw,10.5rem)] [filter:drop-shadow(0_6px_24px_rgba(3,10,90,0.5))]">
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

      {/* The source's usable region (bars cropped) is exactly 3:2, so an
          aspect-[3/2] box + object-cover shows ~the whole camera and
          exploded spread at natural size. Mobile/tablet: plain flow block
          directly below the text, full width, with a top-edge feather so
          the flat CSS background dissolves into the video instead of
          meeting it at a hard line (browsers render <video> through a
          slightly different color pipeline than CSS, so even a near-exact
          color match shows a seam at a hard edge). Desktop: absolutely
          positioned center-right at 68% width; same feather technique on
          the left edge instead of the top. */}
      <div
        aria-hidden
        className="relative aspect-[3/2] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_12%)] lg:absolute lg:right-0 lg:top-1/2 lg:w-[68%] lg:max-w-[1100px] lg:-translate-y-1/2 lg:[mask-image:linear-gradient(to_right,transparent,black_10%)]"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: duration.slow, ease: easing.framer }}
          className="h-full w-full"
        >
          <video
            src="/photos/hero-camera.mp4"
            poster="/photos/hero-camera-poster.jpg"
            className="h-full w-full scale-[1.03] object-cover motion-reduce:hidden"
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
            className="hidden h-full w-full scale-[1.03] object-cover motion-reduce:block"
          />
        </motion.div>
      </div>

      {/* Same-hue scrim over the desktop text column, where the headline
          overlaps the camera's left edge. Mobile/tablet don't need this —
          text and camera no longer overlap there (v4), so no scrim base
          class, only lg:. */}
      <div
        aria-hidden
        className="absolute inset-0 lg:bg-[linear-gradient(90deg,rgba(13,34,238,0.7)_0%,rgba(13,34,238,0.25)_45%,rgba(13,34,238,0)_62%)]"
      />
    </section>
  );
}
