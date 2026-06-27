import { contactLinks } from "@/lib/contact";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-10 md:py-16">
      <div className="rounded-3xl bg-[#16161A] p-10 md:p-12">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.08] px-3 py-1.5 text-[13px] font-medium text-zinc-100 mb-5">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Open to Software Engineering roles
        </span>

        <h2 className="font-display text-3xl md:text-4xl text-zinc-50 tracking-tight leading-tight max-w-2xl">
          Let&apos;s build something worth shipping.
        </h2>
        <p className="mt-4 text-base md:text-lg text-zinc-400 leading-relaxed">
          San Francisco Bay Area · open to on-site, hybrid, or remote.
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <a
            href="mailto:harry.s.clemente@gmail.com"
            className="rounded-xl bg-accent px-5 py-3.5 text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
          >
            Email me
          </a>
          <a
            href="https://www.linkedin.com/in/harryclemente/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl px-5 py-3.5 text-[15px] font-semibold text-zinc-100 ring-1 ring-white/15 transition-colors hover:ring-white/30"
          >
            LinkedIn
          </a>
          <a
            href="/resume.pdf"
            className="rounded-xl px-5 py-3.5 text-[15px] font-semibold text-zinc-100 ring-1 ring-white/15 transition-colors hover:ring-white/30"
          >
            Download résumé
          </a>
        </div>

        <ul className="mt-9 flex flex-wrap gap-x-8 gap-y-2 border-t border-white/10 pt-6 text-sm">
          {contactLinks.map((l) => (
            <li key={l.label} className="flex items-baseline gap-2">
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-500">
                {l.label}
              </span>
              <a
                href={l.href}
                target={l.external ? "_blank" : undefined}
                rel={l.external ? "noopener noreferrer" : undefined}
                className="text-zinc-200 hover:text-accent transition-colors"
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
