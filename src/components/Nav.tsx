import Link from "next/link";
import { brand, nav } from "@/lib/content";
import Button from "./ui/Button";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#top" className="font-display text-lg font-semibold tracking-tight">
          {brand.name}
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <Button href="#contact" variant="secondary" size="sm">
          Book a call
        </Button>
      </div>
    </header>
  );
}
