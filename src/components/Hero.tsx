import HeroScene from "./HeroScene";
import { hero } from "@/lib/content";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-surface via-background to-background" />
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-32">
        <div>
          <p className="mb-5 inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted">
            {hero.eyebrow}
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted">{hero.subhead}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={hero.primaryCta.href}
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
            >
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>
        <div className="relative h-[320px] w-full sm:h-[420px] md:h-[480px]">
          <HeroScene />
        </div>
      </div>
    </section>
  );
}
