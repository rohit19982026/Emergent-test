import type { PhotoSlot } from "@/lib/photos";
import Star from "./Star";

type DuotoneMediaProps = {
  children: React.ReactNode;
  /** Overlay tint color. */
  tone?: "blue" | "lime";
  className?: string;
};

// Wraps any media (img/video) in the site's duotone treatment: grayscale
// base + color overlay, so real photos, stills, and placeholders all read
// as one visual family.
export function DuotoneMedia({ children, tone = "blue", className = "" }: DuotoneMediaProps) {
  const toneClass = tone === "blue" ? "bg-blue" : "bg-lime";
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="h-full w-full grayscale contrast-110">{children}</div>
      <div aria-hidden className={`absolute inset-0 ${toneClass} opacity-70 mix-blend-color`} />
      <div aria-hidden className={`absolute inset-0 ${toneClass} opacity-20 mix-blend-multiply`} />
    </div>
  );
}

type PhotoProps = {
  slot: PhotoSlot;
  tone?: "blue" | "lime";
  /** Tailwind aspect class, e.g. "aspect-[4/5]". */
  aspect?: string;
  className?: string;
};

// A media slot: renders the real asset when one exists, otherwise a
// designed placeholder that still looks intentional. Swapping in a real
// asset is a one-line change in src/lib/photos.ts. Photographs go through
// the duotone brand filter; "raw" assets (brand-palette 3D renders) and
// videos show untouched.
export function Photo({ slot, tone = "blue", aspect = "aspect-[4/5]", className = "" }: PhotoProps) {
  if (slot.src) {
    const media =
      slot.type === "video" ? (
        <video
          src={slot.src}
          aria-label={slot.alt}
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={slot.src} alt={slot.alt} className="h-full w-full object-cover" />
      );

    if (slot.treatment === "raw") {
      // bg-ink so the panel reads as intentional while the asset loads
      return <div className={`relative overflow-hidden bg-ink ${aspect} ${className}`}>{media}</div>;
    }
    return (
      <DuotoneMedia tone={tone} className={`${aspect} ${className}`}>
        {media}
      </DuotoneMedia>
    );
  }

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-ink ${aspect} ${className}`}
      role="img"
      aria-label={slot.alt}
    >
      <Star className="absolute h-[70%] w-[70%] text-white/10" spin />
      <Star className="h-16 w-16 text-lime" />
      <span className="absolute bottom-4 left-4 bg-lime px-3 py-1 font-grotesk text-xs font-bold uppercase tracking-[0.15em] text-ink">
        {slot.placeholderLabel}
      </span>
    </div>
  );
}
