import { ArrowUpRight } from "lucide-react";

type ArrowCircleProps = {
  href: string;
  ariaLabel: string;
  size?: "md" | "lg";
  className?: string;
};

// The lime circle-arrow — the reference's signature "go" affordance.
// Arrow rotates to point right on hover (↗ → →).
export default function ArrowCircle({
  href,
  ariaLabel,
  size = "md",
  className = "",
}: ArrowCircleProps) {
  const sizeClasses =
    size === "lg" ? "h-20 w-20 sm:h-28 sm:w-28" : "h-12 w-12";
  const iconSize = size === "lg" ? "h-8 w-8 sm:h-12 sm:w-12" : "h-5 w-5";

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={`group inline-flex shrink-0 items-center justify-center rounded-full bg-lime text-ink transition-transform duration-[var(--duration-base)] ease-[var(--ease-signature)] hover:scale-105 ${sizeClasses} ${className}`}
    >
      <ArrowUpRight
        strokeWidth={2.5}
        className={`${iconSize} transition-transform duration-[var(--duration-base)] ease-[var(--ease-signature)] group-hover:rotate-45`}
      />
    </a>
  );
}
