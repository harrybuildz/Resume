import { Section, SectionHeader } from "./Section";
import { bigStats, smallStats } from "@/lib/impact";

/** Home "Impact" section: headline outcome metrics as a bento grid. */
export default function ImpactBento() {
  return (
    <Section>
      <SectionHeader eyebrow="Impact" title="Outcomes, measured." />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {bigStats.map((s) => (
          <div
            key={s.value}
            className="card card-interactive flex flex-col justify-between p-7 min-h-[12rem]"
          >
            <p className="font-display font-bold text-4xl md:text-5xl text-accent tracking-tight">
              {s.value}
            </p>
            <div className="mt-6">
              <p className="text-base font-semibold text-ink leading-snug">
                {s.label}
              </p>
              {s.caption && (
                <p className="mt-1.5 text-[13px] text-muted leading-snug">
                  {s.caption}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 grid gap-4 grid-cols-2 lg:grid-cols-4">
        {smallStats.map((s) => (
          <div key={s.value} className="card p-5">
            <p className="font-display text-2xl text-ink tracking-tight">
              {s.value}
            </p>
            <p className="mt-1.5 text-[13px] text-muted leading-snug">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
