import Link from "next/link";
import { aboutLead, expertise } from "@/lib/about";

export default function AboutTeaser() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10 md:py-14">
      <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted mb-2.5">
        About
      </p>
      <h2 className="font-display text-2xl md:text-3xl text-ink tracking-tight mb-6">
        Product-focused Android engineer.
      </h2>

      <div className="card p-8 md:p-10">
        <p className="text-lg text-ink leading-relaxed max-w-3xl">
          {aboutLead}
        </p>

        <div className="mt-8 grid gap-x-10 gap-y-6 sm:grid-cols-2">
          {expertise.map((e) => (
            <div key={e.title}>
              <h3 className="flex items-baseline gap-2 text-[15px] font-semibold text-ink">
                <span
                  className="font-mono text-accent text-sm"
                  aria-hidden="true"
                >
                  ◆
                </span>
                {e.title}
              </h3>
              <p className="mt-1.5 text-[14px] text-muted leading-relaxed">
                {e.body}
              </p>
            </div>
          ))}
        </div>

        <Link
          href="/about"
          className="inline-block mt-8 text-sm text-muted hover:text-accent transition-colors"
        >
          Full background →
        </Link>
      </div>
    </section>
  );
}
