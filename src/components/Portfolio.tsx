"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { work } from "@/lib/portfolio";
import { easing, duration } from "@/lib/motionTokens";

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
    <section id="work" className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-lg">
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Selected work
            </h2>
            <p className="mt-4 text-muted">
              A sample of what we&apos;ve shipped — more added as projects wrap.
            </p>
          </div>
          {work.length > 1 && (
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Previous work"
                onClick={() => scrollByCard(-1)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Next work"
                onClick={() => scrollByCard(1)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>

      <div
        ref={trackRef}
        className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4 sm:px-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))]"
      >
        {work.map((item, i) => (
          <motion.div
            key={item.id}
            data-work-card
            className="relative shrink-0 snap-start"
            style={{ width: "min(85vw, 480px)" }}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: duration.slow, ease: easing.framer, delay: i * 0.08 }}
          >
            {/* Stacked-card effect: a second card peeking out behind the
                real one, so a single piece still reads as part of a deck
                rather than a lone tile. */}
            <div
              aria-hidden
              className="absolute inset-0 translate-x-2 translate-y-2 rounded-[var(--radius-card)] border border-border bg-surface"
            />
            <div className="relative overflow-hidden rounded-[var(--radius-card)] border border-border bg-surface">
              <div className={`relative w-full overflow-hidden bg-foreground/5 ${aspectClass[item.aspect]}`}>
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    className="h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={item.src} alt={item.title} className="h-full w-full object-cover" />
                )}
              </div>
              <div className="p-6">
                <span className="font-mono text-xs font-medium uppercase tracking-wider text-accent">
                  {item.category}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-muted">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
