import type { Metadata } from "next";
import { contactLinks } from "@/lib/contact";
import StatusPill from "@/components/StatusPill";

export const metadata: Metadata = {
  title: "Contact — Harry Clemente",
  description:
    "Get in touch with Harry Clemente — email, LinkedIn, GitHub, résumé. Open to Software Engineering roles.",
};

export default function ContactPage() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        {/* Left — the pitch */}
        <div>
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted mb-4">
            Contact
          </p>
          <h1 className="font-display text-3xl md:text-5xl text-ink tracking-tight leading-tight">
            Let&apos;s talk.
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed max-w-lg">
            Best reached by email — I read everything. Based in the San
            Francisco Bay Area and open to on-site, hybrid, or remote.
          </p>

          <div className="mt-7">
            <StatusPill />
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="mailto:harry.s.clemente@gmail.com"
              className="rounded-xl bg-accent px-5 py-3.5 text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
            >
              Email me
            </a>
            <a
              href="/resume.pdf"
              className="card rounded-xl px-5 py-3.5 text-[15px] font-semibold text-ink hover:border-accent"
            >
              Download résumé
            </a>
          </div>
        </div>

        {/* Right — the links */}
        <div className="card h-fit p-7 md:p-8">
          <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-muted mb-5">
            Find me
          </p>
          <ul className="divide-y divide-rule">
            {contactLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target={l.external ? "_blank" : undefined}
                  rel={l.external ? "noopener noreferrer" : undefined}
                  className="group flex items-center justify-between gap-4 py-4"
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                    {l.label}
                  </span>
                  <span className="text-[15px] text-ink transition-colors group-hover:text-accent">
                    {l.value} <span aria-hidden="true">↗</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
