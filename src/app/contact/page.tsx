import type { Metadata } from "next";
import { contactLinks } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Contact — Harry Clemente",
  description: "Get in touch with Harry Clemente — email, LinkedIn, résumé.",
};

export default function ContactPage() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-2xl">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted mb-4">
          Contact
        </p>
        <h1 className="font-display text-3xl md:text-4xl text-ink tracking-tight mb-6 leading-tight">
          Get in touch.
        </h1>
        <p className="text-base md:text-lg text-muted leading-relaxed mb-12 max-w-xl">
          Best reached by email — I read everything.
        </p>
        <ul className="space-y-4 text-base md:text-lg">
          {contactLinks.map((l) => (
            <li key={l.label} className="flex items-baseline gap-6">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted w-20 shrink-0">
                {l.label}
              </span>
              <a
                href={l.href}
                target={l.external ? "_blank" : undefined}
                rel={l.external ? "noopener noreferrer" : undefined}
                className="text-ink hover:text-accent transition-colors"
              >
                {l.value}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
