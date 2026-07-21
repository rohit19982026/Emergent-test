"use client";

import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { easing, duration } from "@/lib/motionTokens";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  /** "dark" = sits on ink/blue blocks, "light" = sits on paper blocks. */
  tone?: "dark" | "light";
  size?: "sm" | "md";
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  tone = "dark",
  size = "md",
  className = "",
}: ButtonProps) {
  const btnRef = useRef<HTMLAnchorElement>(null);

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
    "group relative inline-flex items-center gap-2 overflow-hidden rounded-full font-grotesk font-bold uppercase tracking-[0.1em] transition-colors duration-[var(--duration-base)] ease-[var(--ease-signature)]";

  const sizeClasses = size === "sm" ? "px-5 py-2.5 text-xs" : "px-7 py-3.5 text-sm";

  // Primary: lime pill, wipe to white on hover (text stays ink).
  // Secondary: 2px outline, wipe fills lime and text flips to ink.
  const variantClasses =
    variant === "primary"
      ? "bg-lime text-ink"
      : tone === "dark"
        ? "border-2 border-white text-white"
        : "border-2 border-ink text-ink";

  const wipeClass = variant === "primary" ? "bg-white" : "bg-lime";
  const hoverText = variant === "primary" ? "" : "group-hover:text-ink";

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
      <span
        aria-hidden
        className={`absolute inset-0 -z-0 origin-left scale-x-0 transition-transform duration-[var(--duration-base)] ease-[var(--ease-signature)] group-hover:scale-x-100 ${wipeClass}`}
      />
      <span className={`relative z-10 transition-colors duration-[var(--duration-base)] ${hoverText}`}>
        {children}
      </span>
      <ArrowRight
        className={`relative z-10 h-4 w-4 transition-all duration-[var(--duration-base)] group-hover:translate-x-0.5 ${hoverText}`}
        strokeWidth={2.5}
      />
    </a>
  );
}
