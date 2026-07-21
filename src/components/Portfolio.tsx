"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { work } from "@/lib/portfolio";
import { workSection } from "@/lib/content";
import { easing, duration } from "@/lib/motionTokens";
import SectionHeading from "./ui/SectionHeading";

const aspectClass: Record<string, string> = {
  "16/9": "aspect-video",
  "9/16": "aspect-[9/16]",
  "4/5": "aspect-[4/5]",
  "1/1": "aspect-square",
};

export default function Portfolio() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("[data-work-card]");
    const cardWidth = card ? card.getBoundingClientRect().width + 24 : track.clientWidth * 0.85;
    track.scrollBy({ left: dir * cardWidth, behavior: "smooth" });
  };

  return (
    <section id="work" className="overflow-hidden bg-blue py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionHeading eyebrow={workSection.eyebrow} segments={workSection.headline} />
            <p className="mt-5 max-w-md text-white/85">{workSection.description}</p>
          </div>
          {work.length > 1 && (
            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Previous work"
                onClick={() => scrollByCard(-1)}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-white text-white transition-colors hover:bg-lime hover:border-lime hover:text-ink"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Next work"
                onClick={() => scrollByCard(1)}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-white text-white transition-colors hover:bg-lime hover:border-lime hover:text-ink"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </div>

      <div
        ref={trackRef}
        className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-6 sm:px-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]"
      >
        {work.map((item, i) => (
          <motion.div
            key={item.id}
            data-work-card
            className="relative shrink-0 snap-start"
            style={{ width: "min(85vw, 560px)" }}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: duration.slow, ease: easing.framer, delay: i * 0.08 }}
          >
            {/* Hard lime offset shadow — the reference's punchy card treatment */}
            <div aria-hidden className="absolute inset-0 translate-x-2.5 translate-y-2.5 bg-lime" />
            <div className="group relative overflow-hidden border-2 border-ink bg-ink">
              <div className={`relative w-full overflow-hidden bg-white/5 ${aspectClass[item.aspect]}`}>
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    className="h-full w-full object-cover transition-transform duration-[var(--duration-reveal)] ease-[var(--ease-signature)] group-hover:scale-105"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item.src}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-[var(--duration-reveal)] ease-[var(--ease-signature)] group-hover:scale-105"
                  />
                )}
              </div>
              <div className="flex items-start justify-between gap-4 p-6">
                <div>
                  <span className="inline-block bg-lime px-3 py-1 font-grotesk text-xs font-bold uppercase tracking-[0.15em] text-ink">
                    {item.category}
                  </span>
                  <h3 className="mt-3 font-display text-2xl uppercase text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-white/65">{item.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
