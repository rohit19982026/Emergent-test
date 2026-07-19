"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

// Small custom cursor dot that follows the pointer and grows over
// interactive elements. Hidden entirely on touch devices and under
// reduced motion (native cursor takes over in both cases).
export default function MagneticCursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || reduced || !dotRef.current) return;

    const dot = dotRef.current;
    const quickX = gsap.quickTo(dot, "x", { duration: 0.4, ease: "power3.out" });
    const quickY = gsap.quickTo(dot, "y", { duration: 0.4, ease: "power3.out" });

    const onMove = (e: MouseEvent) => {
      quickX(e.clientX);
      quickY(e.clientY);
    };

    const interactiveSelector = "a, button, [data-cursor-hover]";
    const onOver = (e: MouseEvent) => {
      if ((e.target as Element)?.closest?.(interactiveSelector)) {
        gsap.to(dot, { scale: 2.5, duration: 0.3, ease: "power2.out" });
      }
    };
    const onOut = (e: MouseEvent) => {
      if ((e.target as Element)?.closest?.(interactiveSelector)) {
        gsap.to(dot, { scale: 1, duration: 0.3, ease: "power2.out" });
      }
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    gsap.set(dot, { xPercent: -50, yPercent: -50 });

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[70] h-2.5 w-2.5 rounded-full mix-blend-difference hidden md:block"
      style={{ backgroundColor: "#ffffff" }}
    />
  );
}
