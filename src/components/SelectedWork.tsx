import Link from "next/link";
import { cases } from "@/lib/cases";

export default function SelectedWork() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="font-display text-2xl md:text-3xl text-ink tracking-tight">
            Selected work
          </h2>
          <Link
            href="/work"
            className="text-sm text-muted hover:text-accent transition-colors"
          >
            All projects →
          </Link>
        </div>
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
      </div>
    </section>
  );
}
