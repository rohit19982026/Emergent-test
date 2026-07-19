"use client";

import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";

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
  const iconRef = useRef<SVGSVGElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    gsap.to(btnRef.current, {
      x: relX * 0.25,
      y: relY * 0.4,
      duration: 0.4,
      ease: "power3.out",
    });
    if (iconRef.current) {
      gsap.to(iconRef.current, { x: 4, duration: 0.3, ease: "power2.out" });
    }
  };

  const handleMouseLeave = () => {
    if (!btnRef.current) return;
    gsap.to(btnRef.current, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.5)" });
    if (iconRef.current) {
      gsap.to(iconRef.current, { x: 0, duration: 0.3, ease: "power2.out" });
    }
  };

  const handleMouseDown = () => {
    gsap.to(btnRef.current, { scale: 0.97, duration: 0.15, ease: "power2.out" });
  };

  const handleMouseUp = () => {
    gsap.to(btnRef.current, { scale: 1, duration: 0.2, ease: "power2.out" });
  };

  const base =
    "group relative inline-flex items-center gap-2 overflow-hidden rounded-full font-semibold transition-colors duration-[var(--duration-base)] ease-[var(--ease-signature)]";

  const sizeClasses = size === "sm" ? "px-4 py-2 text-sm" : "px-6 py-3 text-sm";

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
      <ArrowRight ref={iconRef} className="relative z-10 h-4 w-4 group-hover:text-background" strokeWidth={2} />
    </a>
  );
}
