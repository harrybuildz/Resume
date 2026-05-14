import { contactLinks } from "@/lib/contact";

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-rule px-6 py-16 md:py-24"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="font-display text-2xl md:text-3xl text-ink tracking-tight mb-8">
          Get in touch
        </h2>
        <ul className="space-y-3 text-base md:text-lg">
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
