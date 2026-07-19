"use client";

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
import { motion } from "framer-motion";
import { servicePillars, type Service } from "@/lib/content";
import ServiceLoopIcon from "./motion/ServiceLoopIcon";
import BackgroundMesh from "./BackgroundMesh";
import { easing, duration } from "@/lib/motionTokens";

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

const pillarAccent: Record<string, string> = {
  creative: "var(--coral)",
  tech: "var(--cobalt)",
};

export default function Services() {
  return (
    <section id="services" className="relative border-t border-border/60 py-24">
      <BackgroundMesh />
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Two disciplines. One team.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted">
            We pair creative production with AI and automation engineering, so the story you tell
            and the systems behind it are built by people who talk to each other every day.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {servicePillars.map((pillar, pillarIndex) => {
            const accent = pillarAccent[pillar.id] ?? "var(--accent-current)";
            const fromLeft = pillarIndex % 2 === 0;
            return (
              <motion.div
                key={pillar.id}
                className="group relative overflow-hidden rounded-[var(--radius-card)] border border-border bg-surface p-8 transition-transform duration-[var(--duration-base)] ease-[var(--ease-signature)] hover:-translate-y-1"
                initial={{ x: fromLeft ? -48 : 48, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: duration.slow, ease: easing.framer }}
                whileHover={{ borderColor: accent }}
              >
                {/* Corner-bracket accent, appears on hover */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute right-4 top-4 h-4 w-4 border-r-2 border-t-2 opacity-0 transition-opacity duration-[var(--duration-base)] group-hover:opacity-100"
                  style={{ borderColor: accent }}
                />

                <div className="mb-4 flex items-center gap-2">
                  <ServiceLoopIcon variant={pillar.id === "creative" ? "creative" : "ai"} />
                  <span
                    className="font-mono text-xs font-medium uppercase tracking-wider"
                    style={{ color: accent }}
                  >
                    {pillar.label}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-semibold">{pillar.title}</h3>
                <p className="mt-2 text-sm text-muted">{pillar.description}</p>

                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {pillar.services.map((service) => {
                    const Icon = icons[service.icon];
                    return (
                      <div key={service.title}>
                        <Icon className="h-5 w-5" style={{ color: accent }} strokeWidth={1.75} />
                        <h4 className="mt-4 text-sm font-semibold">{service.title}</h4>
                        <p className="mt-2 text-sm text-muted">{service.description}</p>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
