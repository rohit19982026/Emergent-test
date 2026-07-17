import { whyUs } from "@/lib/content";

export default function WhyUs() {
  return (
    <section id="why-us" className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Why teams choose us
            </h2>
            <p className="mt-4 max-w-md text-muted">
              We&apos;re built to remove the gap between &quot;this looks great&quot; and &quot;this actually runs
              itself.&quot;
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {whyUs.map((item) => (
              <div key={item.title} className="border-t border-border pt-5">
                <h3 className="text-sm font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
