"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { brand, nav } from "@/lib/content";
import Button from "./ui/Button";
import Star from "./ui/Star";
import { easing, duration, stagger } from "@/lib/motionTokens";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-white/10 bg-ink">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="#top"
          className="flex items-center gap-2 font-display text-xl uppercase tracking-wide text-white"
        >
          <Star className="h-5 w-5 text-lime" />
          {brand.name}
          <span className="text-xs align-super">®</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
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

        <div className="flex items-center gap-3">
          <Button href="#contact" size="sm" className="hidden sm:inline-flex">
            Start a project
          </Button>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-lime text-ink lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Full-screen overlay menu with giant staggered caps links */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: duration.base, ease: easing.framer }}
            className="fixed inset-0 top-[74px] z-40 flex flex-col bg-ink lg:hidden"
          >
            <nav className="flex flex-1 flex-col justify-center gap-2 px-8">
              {nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: duration.reveal,
                    ease: easing.framer,
                    delay: i * stagger.loose,
                  }}
                  className="flex items-center gap-3 py-2 font-display text-5xl uppercase text-white transition-colors hover:text-lime"
                >
                  <Star className="h-4 w-4 text-lime" />
                  {item.label}
                </motion.a>
              ))}
            </nav>
            <div className="px-8 pb-12">
              <Button href="#contact" className="w-full justify-center" size="md">
                Start a project
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
