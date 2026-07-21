import Link from "next/link";
import { Section, SectionHeader } from "./Section";
import { cases } from "@/lib/cases";

/** Home "Selected work" section: case studies as linked bento cards. */
export default function SelectedWork() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Selected work"
        title="Things I've shipped."
        action={{ href: "/work", label: "All work" }}
      />

      <div className="grid gap-4 md:grid-cols-2">
        {cases.map((c) => (
          <Link
            key={c.slug}
            href={`/work/${c.slug}`}
            className="card card-interactive group flex flex-col p-7"
          >
            <div className="flex items-baseline justify-between gap-3">
              <p className="text-[11px] font-mono uppercase tracking-[0.14em] text-muted">
                {c.org}
              </p>
            </div>
            <p className="mt-4 font-display font-bold text-3xl md:text-[2.1rem] text-accent-ink tracking-tight leading-none">
              {c.metric}
            </p>
            <p className="mt-1.5 text-[13px] text-muted leading-snug">
              {c.metricLabel}
            </p>
            <h3 className="mt-5 font-display text-xl md:text-[1.35rem] text-ink leading-snug tracking-tight group-hover:text-accent transition-colors">
              {c.title}
            </h3>
            <p className="mt-2 text-[15px] text-muted leading-relaxed">
              {c.summary}
            </p>
          </Link>
        ))}
      </div>
    </Section>
  );
}
