import {
  Bot,
  Film,
  LifeBuoy,
  Palette,
  PenTool,
  Sparkles,
  TrendingUp,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { servicePillars, type Service } from "@/lib/content";

const icons: Record<Service["icon"], LucideIcon> = {
  PenTool,
  Film,
  Palette,
  TrendingUp,
  Bot,
  Workflow,
  Sparkles,
  LifeBuoy,
};

export default function Services() {
  return (
    <section id="services" className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Two disciplines. One team.
          </h2>
          <p className="mt-4 text-muted">
            We pair creative production with AI and automation engineering, so the story you tell
            and the systems behind it are built by people who talk to each other every day.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {servicePillars.map((pillar) => (
            <div
              key={pillar.id}
              className="rounded-2xl border border-border bg-surface p-8"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-accent-2">
                {pillar.label}
              </span>
              <h3 className="mt-3 font-display text-2xl font-semibold">{pillar.title}</h3>
              <p className="mt-2 text-sm text-muted">{pillar.description}</p>

              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {pillar.services.map((service) => {
                  const Icon = icons[service.icon];
                  return (
                    <div key={service.title}>
                      <Icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
                      <h4 className="mt-3 text-sm font-semibold">{service.title}</h4>
                      <p className="mt-1.5 text-sm text-muted">{service.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
