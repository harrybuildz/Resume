import Link from "next/link";
import { cases } from "@/lib/cases";

export default function SelectedWork() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10 md:py-14">
      <div className="flex items-end justify-between gap-4 mb-6">
        <div>
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted mb-2.5">
            Selected work
          </p>
          <h2 className="font-display text-2xl md:text-3xl text-ink tracking-tight">
            Things I&apos;ve shipped.
          </h2>
        </div>
        <Link
          href="/work"
          className="shrink-0 text-sm text-muted hover:text-accent transition-colors"
        >
          All projects →
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {cases.map((c) => (
          <Link
            key={c.slug}
            href={`/work/${c.slug}`}
            className="card card-interactive group flex flex-col p-7"
          >
            <div className="flex items-center justify-between gap-3 mb-4">
              <p className="text-[11px] font-mono uppercase tracking-[0.14em] text-muted">
                {c.org}
              </p>
              <span className="shrink-0 rounded-lg bg-accent-soft px-2.5 py-1 text-[12.5px] font-semibold text-accent-ink">
                {c.metric}
              </span>
            </div>
            <h3 className="font-display text-xl md:text-[1.45rem] text-ink leading-snug tracking-tight group-hover:text-accent transition-colors">
              {c.title}
            </h3>
            <p className="mt-3 text-[15px] text-muted leading-relaxed">
              {c.summary}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
