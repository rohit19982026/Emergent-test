"use client";

import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { easing, duration } from "@/lib/motionTokens";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md";
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: ButtonProps) {
  const btnRef = useRef<HTMLAnchorElement>(null);

  // Pull-toward-cursor and release both run on the shared signature ease —
  // previously the release used an elastic/springy curve while the pull
  // used a plain power curve, two different physical metaphors in one
  // interaction. Same ease both directions now.
  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    gsap.to(btnRef.current, {
      x: relX * 0.25,
      y: relY * 0.4,
      duration: duration.base,
      ease: easing.gsap,
    });
  };

  const handleMouseLeave = () => {
    if (!btnRef.current) return;
    gsap.to(btnRef.current, { x: 0, y: 0, duration: duration.base, ease: easing.gsap });
  };

  const handleMouseDown = () => {
    gsap.to(btnRef.current, { scale: 0.97, duration: duration.micro, ease: easing.gsap });
  };

  const handleMouseUp = () => {
    gsap.to(btnRef.current, { scale: 1, duration: duration.micro, ease: easing.gsap });
  };

  const base =
    "group relative inline-flex items-center gap-2 overflow-hidden rounded-full font-semibold transition-colors duration-[var(--duration-base)] ease-[var(--ease-signature)]";

  const sizeClasses = size === "sm" ? "px-4 py-2.5 text-sm" : "px-6 py-3 text-sm";

  const variantClasses =
    variant === "primary"
      ? "bg-foreground text-background"
      : "border border-border text-foreground bg-transparent";

  return (
    <a
      ref={btnRef}
      href={href}
      className={`${base} ${sizeClasses} ${variantClasses} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {/* Fill-wipe layer: sweeps in from the left using the live accent color */}
      <span
        aria-hidden
        className="absolute inset-0 -z-0 origin-left scale-x-0 bg-accent transition-transform duration-[var(--duration-base)] ease-[var(--ease-signature)] group-hover:scale-x-100"
      />
      <span className="relative z-10 transition-colors duration-[var(--duration-base)] group-hover:text-background">
        {children}
      </span>
      <ArrowRight className="relative z-10 h-4 w-4 transition-colors duration-[var(--duration-base)] group-hover:text-background" strokeWidth={2} />
    </a>
  );
}
