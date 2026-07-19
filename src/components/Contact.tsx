"use client";

import { motion } from "framer-motion";
import { contact } from "@/lib/content";
import Button from "./ui/Button";
import SignatureMark from "./motion/SignatureMark";
import { easing } from "@/lib/motionTokens";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="relative overflow-hidden rounded-[calc(var(--radius-card)*2)] border border-border bg-surface px-8 py-16 text-center sm:px-16"
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: easing.framer }}
        >
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
          <div className="mb-6 flex justify-center">
            <SignatureMark size={72} />
          </div>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {contact.title}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted">{contact.description}</p>
          <div className="mt-8 flex justify-center">
            <Button href={`mailto:${contact.email}`} variant="primary">
              {contact.email}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
