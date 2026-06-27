import Link from "next/link";
import { Section, SectionHeader } from "./Section";
import { aboutLead, expertise } from "@/lib/about";

export default function AboutTeaser() {
  return (
    <Section>
      <SectionHeader eyebrow="About" title="Product-focused Android engineer." />

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
          Full background <span aria-hidden="true">→</span>
        </Link>
      </div>
    </Section>
  );
}
