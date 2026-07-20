import Image from "next/image";
import Link from "next/link";
import { Section, SectionHeader } from "./Section";
import { projects } from "@/lib/projects";

/**
 * Home "Independent builds" section: each project as a large alternating
 * feature row (image + narrative), giving side projects real prominence
 * alongside the professional case studies.
 */
export default function ProjectsShowcase() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Independent builds"
        title="Products I've shipped on my own."
        action={{ href: "/projects", label: "All projects" }}
      />

      <div className="space-y-6">
        {projects.map((p, i) => (
          <article
            key={p.slug}
            className="card group grid overflow-hidden md:grid-cols-2"
          >
            {/* Image — alternates side on desktop for editorial rhythm. */}
            <Link
              href={`/projects/${p.slug}`}
              className={`relative aspect-[16/10] bg-chip md:aspect-auto md:min-h-[20rem] ${
                i % 2 === 1 ? "md:order-2" : ""
              }`}
              style={p.heroBg ? { background: p.heroBg } : undefined}
              aria-label={`View ${p.name}`}
            >
              <Image
                src={p.hero.src}
                alt={p.hero.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className={`transition-transform duration-300 group-hover:scale-[1.02] ${
                  p.heroContain ? "object-contain p-10" : "object-cover"
                }`}
              />
            </Link>

            {/* Narrative. */}
            <div className="flex flex-col justify-center gap-4 p-7 md:p-9">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[11px] font-mono uppercase tracking-[0.14em] text-muted">
                  {p.category}
                </p>
                <span
                  className="shrink-0 rounded-lg px-2.5 py-1 text-[12px] font-semibold"
                  style={{
                    color: p.accent,
                    background: `color-mix(in srgb, ${p.accent} 12%, transparent)`,
                  }}
                >
                  {p.pill}
                </span>
              </div>

              <div>
                <h3 className="font-display text-2xl md:text-[1.7rem] text-ink tracking-tight leading-tight">
                  {p.name}
                </h3>
                <p className="mt-1 text-[15px] font-medium text-muted">
                  {p.tagline}
                </p>
              </div>

              <p className="text-[15px] text-muted leading-relaxed">
                {p.summary}
              </p>

              <ul className="flex flex-wrap gap-2">
                {p.stack.slice(0, 5).map((s) => (
                  <li key={s} className="chip text-[0.72rem]">
                    {s}
                  </li>
                ))}
              </ul>

              <div className="mt-1 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                <Link
                  href={`/projects/${p.slug}`}
                  className="font-semibold text-ink transition-colors hover:text-accent"
                >
                  View project <span aria-hidden="true">→</span>
                </Link>
                {p.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target={l.external ? "_blank" : undefined}
                    rel={l.external ? "noopener noreferrer" : undefined}
                    className="text-muted transition-colors hover:text-accent"
                  >
                    {l.label} <span aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
