// Static, GPU-cheap film-grain texture via SVG feTurbulence — tiles natively,
// no per-frame JS work, and is reduced-motion safe by default (no animation
// unless explicitly enabled, see globals.css for the opt-in subtle flicker).
export default function GrainOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[60] h-full w-full opacity-[0.05] mix-blend-multiply grain-flicker"
    >
      <svg className="h-full w-full">
        <filter id="grain-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.9 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-noise)" />
      </svg>
    </div>
  );
}
