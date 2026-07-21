import { brand, nav, marqueeItems } from "@/lib/content";
import Marquee from "./ui/Marquee";
import Star from "./ui/Star";

export default function Footer() {
  return (
    <footer className="bg-ink">
      <Marquee items={marqueeItems} variant="ink" reverse />

      <div className="mx-auto max-w-7xl px-6 pb-10 pt-16">
        {/* Giant outline wordmark */}
        <p
          aria-hidden
          className="text-outline select-none text-center font-display uppercase leading-none tracking-tight text-[clamp(4rem,17vw,15rem)]"
        >
          {brand.name}
        </p>

        <div className="mt-12 flex flex-col items-start justify-between gap-10 border-t-2 border-white/10 pt-10 sm:flex-row">
          <div className="flex flex-col gap-3">
            <span className="flex items-center gap-2 font-display text-xl uppercase text-white">
              <Star className="h-4 w-4 text-lime" />
              {brand.fullName}
            </span>
            <p className="max-w-xs text-sm text-white/60">{brand.tagline} — {brand.regions}.</p>
          </div>

          <nav className="grid grid-cols-2 gap-x-16 gap-y-3">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-grotesk text-sm font-bold uppercase tracking-[0.15em] text-white/70 transition-colors hover:text-lime"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={`mailto:${brand.email}`}
            className="font-grotesk text-sm font-bold uppercase tracking-[0.15em] text-lime underline decoration-2 underline-offset-4 hover:text-white"
          >
            {brand.email}
          </a>
        </div>

        <p className="mt-10 text-center text-xs uppercase tracking-[0.2em] text-white/40">
          © {new Date().getFullYear()} {brand.fullName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
