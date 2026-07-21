// The four-point star — the site's recurring motif: eyebrow bullet,
// marquee separator, list marker, and decorative accent.
type StarProps = {
  className?: string;
  spin?: boolean;
};

export default function Star({ className = "h-4 w-4", spin = false }: StarProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={`${className} ${spin ? "star-spin" : ""}`}
    >
      <path d="M12 0c1.1 7.4 4.6 10.9 12 12-7.4 1.1-10.9 4.6-12 12-1.1-7.4-4.6-10.9-12-12C7.4 10.9 10.9 7.4 12 0Z" />
    </svg>
  );
}
