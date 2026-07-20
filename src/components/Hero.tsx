import HeroScene from "./hero/HeroScene";
import AnimatedHeadline from "./hero/AnimatedHeadline";
import Button from "./ui/Button";
import { hero } from "@/lib/content";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-surface via-background to-background" />
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-6 py-12 sm:gap-12 sm:py-20 md:grid-cols-2 md:py-32">
        <div>
          {/* Badge padding (px-3 py-1) intentionally stays off the macro 8px
              grid — compact chips/badges read better on a finer 4px
              increment than the block-level rhythm rule is meant for. */}
          <p className="mb-6 inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted">
            {hero.eyebrow}
          </p>
          <AnimatedHeadline
            text={hero.headline}
            className="font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
          />
          <p className="mt-6 max-w-lg text-lg text-muted">{hero.subhead}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href={hero.primaryCta.href} variant="primary">
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>
        <div className="relative h-[320px] w-full sm:h-[420px] md:h-[480px]">
          <HeroScene />
        </div>
      </div>
    </section>
  );
}
