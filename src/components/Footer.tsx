import { brand, nav } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted sm:flex-row">
        <span>
          © {new Date().getFullYear()} {brand.fullName}. All rights reserved.
        </span>
        <div className="flex items-center gap-6">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-foreground">
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
