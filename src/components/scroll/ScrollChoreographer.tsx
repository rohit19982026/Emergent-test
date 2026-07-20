"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSceneStore } from "@/lib/sceneStore";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Owns the single Hero -> end-of-Services ScrollTrigger and writes scroll
// progress (0 = cloud, 1 = mark, 2 = network) into sceneStore. No visual
// output of its own — ParticleField and the site-wide --accent-current
// variable both read from the same store value.
export default function ScrollChoreographer() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    useSceneStore.getState().setReducedMotion(reduced);
    if (reduced) return;

    // Below the md breakpoint the pin cost is felt much more acutely — a
    // phone screen is a much bigger fraction of total scrollable content
    // than a desktop viewport, so the same 150% pin reads as the page
    // getting stuck. Give mobile a much shorter scrub distance; the morph
    // still plays end-to-end, just over less dead scroll.
    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    // Pin the hero in place for the scrubbed duration so the cloud -> mark
    // -> network morph is actually visible while it plays, rather than
    // scrolling off-screen underneath the Services section.
    const trigger = ScrollTrigger.create({
      trigger: "#top",
      start: "top top",
      end: isMobile ? "+=60%" : "+=150%",
      pin: true,
      pinSpacing: true,
      scrub: 0.4,
      onUpdate: (self) => {
        useSceneStore.getState().setProgress(self.progress * 2);
        const accent = self.progress < 0.5 ? "var(--coral)" : "var(--cobalt)";
        document.documentElement.style.setProperty("--accent-current", accent);
      },
    });

    return () => trigger.kill();
  }, []);

  return null;
}
