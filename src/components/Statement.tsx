"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { statement } from "@/lib/content";
import Star from "./ui/Star";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// The page's signature scroll moment: each word of the statement fills in
// from dim to full color as the section scrubs past viewport center.
// Replaces the template's testimonial slot with a claim about the studio
// itself — no invented client quotes.
export default function Statement() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const words = root.querySelectorAll<HTMLElement>("[data-statement-word]");

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      gsap.set(words, { opacity: 1 });
      return;
    }

    const tween = gsap.fromTo(
      words,
      { opacity: 0.12 },
      {
        opacity: 1,
        stagger: 0.15,
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top 80%",
          end: "center 45%",
          scrub: 0.6,
        },
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  const styleClass = (style: string) =>
    style === "outline" ? "text-outline" : style === "lime" ? "text-lime" : "text-white";

  return (
    <section className="bg-ink py-24 sm:py-36">
      <div ref={rootRef} className="mx-auto max-w-6xl px-6 text-center">
        <Star className="mx-auto mb-8 h-10 w-10 text-lime" spin />
        <p className="font-display uppercase leading-[1.05] tracking-tight text-[clamp(2.5rem,7.5vw,6.5rem)]">
          {statement.map((seg, i) => (
            // Space lives OUTSIDE the inline-block span or words run together
            <span key={i}>
              <span
                data-statement-word
                className={`inline-block ${styleClass(seg.style)}`}
              >
                {seg.text}
              </span>{" "}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
