import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { cases, getCase } from "@/lib/cases";

type Props = { params: Promise<{ slug: string }> };

/** Pre-render a static route for every case study slug. */
export async function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

/** Per-case page metadata (title/description) from the matched case study. */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) return {};
  return {
    title: `${c.title} — Harry Clemente`,
    description: c.summary,
  };
}

const steps = [
  { key: "problem", label: "The problem" },
  { key: "approach", label: "What I did" },
  { key: "result", label: "The outcome" },
] as const;

/** Individual case-study page; 404s on an unknown slug. */
export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) notFound();

  return (
    <article className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/work"
          className="text-sm text-muted hover:text-accent transition-colors"
        >
          <span aria-hidden="true">←</span> All work
        </Link>

        <p className="mt-8 text-xs font-mono uppercase tracking-[0.18em] text-muted">
          {c.org}
        </p>
        <h1 className="mt-3 font-display text-3xl md:text-5xl text-ink tracking-tight leading-tight">
          {c.title}
        </h1>

        {/* Metric-forward hero band */}
        <div className="mt-10 flex items-center gap-6 rounded-2xl border border-rule bg-accent-soft/60 p-7">
          <p className="font-display font-bold text-4xl md:text-5xl text-accent-ink tracking-tight">
            {c.metric}
          </p>
          <p className="text-[15px] text-ink leading-snug max-w-xs">
            {c.metricLabel}
          </p>
        </div>

        {/* Problem / Approach / Outcome */}
        <div className="mt-12 space-y-10">
          {steps.map((s) => (
            <div key={s.key}>
              <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted mb-3">
                {s.label}
              </p>
              <p className="text-lg text-ink leading-relaxed">{c[s.key]}</p>
            </div>
          ))}
        </div>

        {/* Footer nav / CTA */}
        <div className="mt-16 pt-8 border-t border-rule flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/work"
            className="text-sm text-muted hover:text-accent transition-colors"
          >
            <span aria-hidden="true">←</span> All work
          </Link>
          <div className="flex items-center gap-5 text-sm">
            <a
              href="/resume.pdf"
              className="text-muted hover:text-accent transition-colors"
            >
              Résumé
            </a>
            <Link
              href="/contact"
              className="font-semibold text-ink hover:text-accent transition-colors"
            >
              Get in touch <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
