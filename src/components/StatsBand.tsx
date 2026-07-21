import { stats } from "@/lib/content";
import StatCounter from "./ui/StatCounter";

// Thin black band restating the studio numbers big — same source array as
// the hero rail (src/lib/content.ts), so correcting a number fixes both.
export default function StatsBand() {
  return (
    <section className="border-y-2 border-white/10 bg-ink py-14 sm:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 sm:grid-cols-3 sm:gap-6">
        {stats.map((s) => (
          <StatCounter key={s.label} {...s} variant="band" />
        ))}
      </div>
    </section>
  );
}
