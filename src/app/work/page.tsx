import Link from "next/link";
import type { Metadata } from "next";
import { cases } from "@/lib/cases";

export const metadata: Metadata = {
  title: "Work — Harry Clemente",
  description:
    "Case studies from Uber and beyond — safety features at scale, experimentation, and measurable outcomes.",
};

export default function WorkIndex() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted mb-4">
          Work
        </p>
        <h1 className="font-display text-3xl md:text-4xl text-ink tracking-tight mb-4">
          Outcomes I&apos;ve shipped
        </h1>
        <p className="text-base text-muted leading-relaxed max-w-2xl mb-12">
          Features I owned end-to-end — from architecture and experimentation to
          production — most at Uber, for millions of riders a day. Each links to
          the short version: the problem, what I did, and the result.
        </p>

        <div className="grid gap-5 sm:grid-cols-2">
          {cases.map((c) => (
            <Link
              key={c.slug}
              href={`/work/${c.slug}`}
              className="card card-interactive group flex flex-col p-7"
            >
              <p className="text-[11px] font-mono uppercase tracking-[0.14em] text-muted">
                {c.org}
              </p>
              <p className="mt-4 font-display font-bold text-3xl md:text-4xl text-accent-ink tracking-tight">
                {c.metric}
              </p>
              <p className="mt-1.5 text-[13px] text-muted leading-snug">
                {c.metricLabel}
              </p>
              <h2 className="mt-5 font-display text-xl text-ink leading-snug tracking-tight group-hover:text-accent transition-colors">
                {c.title}
              </h2>
              <p className="mt-2 text-[14.5px] text-muted leading-relaxed">
                {c.summary}
              </p>
              <span className="mt-5 text-sm font-semibold text-ink transition-colors group-hover:text-accent">
                Read the case <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>

        <p className="mt-14">
          <Link
            href="/projects"
            className="text-sm text-muted hover:text-accent transition-colors"
          >
            Also — three products I built on my own{" "}
            <span aria-hidden="true">→</span>
          </Link>
        </p>
      </div>
    </section>
  );
}
