"use client";

import { motion } from "framer-motion";
import { process } from "@/lib/content";
import ProcessPath from "./motion/ProcessPath";
import { easing, stagger } from "@/lib/motionTokens";

export default function Process() {
  return (
    <section id="process" className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            How we work
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted">
            A simple, repeatable process that keeps creative and automation moving together.
          </p>
        </div>

        <div className="relative mt-20">
          <ProcessPath />
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[var(--radius-card)] border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item, i) => (
              <motion.div
                key={item.step}
                className="bg-background p-8"
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, ease: easing.framer, delay: i * stagger.loose }}
              >
                <span className="font-mono text-sm font-medium text-accent">{item.step}</span>
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
