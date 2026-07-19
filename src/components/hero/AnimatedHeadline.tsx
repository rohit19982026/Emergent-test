"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export default function AnimatedHeadline({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) return;

      const split = SplitText.create(ref.current, {
        type: "chars,words",
        mask: "words",
      });

      gsap.from(split.chars, {
        yPercent: 110,
        duration: 0.9,
        ease: "expo.out",
        stagger: 0.02,
        delay: 0.1,
      });

      return () => split.revert();
    },
    { scope: ref }
  );

  return (
    <h1 ref={ref} className={className}>
      {text}
    </h1>
  );
}
