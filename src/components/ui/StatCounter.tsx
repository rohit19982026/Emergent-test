"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

type StatCounterProps = {
  value: number;
  suffix?: string;
  label: string;
  /** "hero" = compact left-rail style, "band" = big stats-band style. */
  variant?: "hero" | "band";
};

export default function StatCounter({
  value,
  suffix = "",
  label,
  variant = "hero",
}: StatCounterProps) {
  const numRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = numRef.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      el.textContent = String(value);
      return;
    }

    const counter = { n: 0 };
    const tween = gsap.to(counter, {
      n: value,
      duration: 1.4,
      ease: "power2.out",
      paused: true,
      onUpdate: () => {
        el.textContent = String(Math.round(counter.n));
      },
    });

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          tween.play();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      tween.kill();
    };
  }, [value]);

  if (variant === "band") {
    return (
      <div className="flex flex-col items-center gap-2 text-center">
        <span className="font-display text-6xl leading-none text-lime sm:text-8xl">
          <span ref={numRef}>0</span>
          {suffix}
        </span>
        <span className="font-grotesk text-sm font-bold uppercase tracking-[0.2em] text-white/80">
          {label}
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-1">
      <span className="font-display text-4xl leading-none text-lime sm:text-5xl">
        <span ref={numRef}>0</span>
        {suffix}
      </span>
      <span className="font-grotesk text-xs font-bold uppercase tracking-[0.15em] text-white/80">
        {label}
      </span>
    </div>
  );
}
