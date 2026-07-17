import { process } from "@/lib/content";

export default function Process() {
  return (
    <section id="process" className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            How we work
          </h2>
          <p className="mt-4 text-muted">
            A simple, repeatable process that keeps creative and automation moving together.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {process.map((item) => (
            <div key={item.step} className="bg-background p-8">
              <span className="font-display text-sm font-semibold text-accent">
                {item.step}
              </span>
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
