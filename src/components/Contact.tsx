import { contact } from "@/lib/content";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface px-8 py-16 text-center sm:px-16">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {contact.title}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted">{contact.description}</p>
          <a
            href={`mailto:${contact.email}`}
            className="mt-8 inline-flex rounded-full bg-accent px-7 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
          >
            {contact.email}
          </a>
        </div>
      </div>
    </section>
  );
}
