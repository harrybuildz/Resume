import Link from "next/link";
import type { Metadata } from "next";
import { cases } from "@/lib/cases";

export const metadata: Metadata = {
  title: "Work — Harry Clemente",
  description: "Case studies and selected projects.",
};

export default function WorkIndex() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted mb-4">
          Work
        </p>
        <h1 className="font-display text-3xl md:text-4xl text-ink tracking-tight mb-12">
          Case studies and projects
        </h1>
        <ul className="space-y-12">
          {cases.map((c) => (
            <li key={c.slug}>
              <Link href={`/work/${c.slug}`} className="group block">
                <div className="flex items-baseline justify-between gap-4 mb-3">
                  <p className="text-xs font-mono uppercase tracking-[0.18em] text-muted">
                    {c.org}
                  </p>
                  <p className="font-mono text-sm text-accent shrink-0">
                    {c.metric}
                  </p>
                </div>
                <h3 className="font-display text-xl md:text-2xl text-ink leading-snug group-hover:text-accent transition-colors">
                  {c.title}
                </h3>
                <p className="mt-3 text-base text-muted leading-relaxed">
                  {c.summary}
                </p>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-16 text-sm text-muted italic">
          Individual case-study pages coming soon.
        </p>
      </div>
    </section>
  );
}
