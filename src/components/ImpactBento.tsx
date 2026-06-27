const bigStats = [
  {
    value: "−19%",
    label: "Permanent opt-outs from ride recording",
    caption: "Session-based snooze · validated by 60-day A/B test",
  },
  {
    value: "+13%",
    label: "Safety tool engagement across riders",
    caption: "Safety Toolkit migration, redesign & repositioning",
  },
  {
    value: "+157%",
    label: "Student enrollment, 70 → 180",
    caption: "Rebuilt acquisition, retention & operations as Tech Director",
  },
];

const smallStats = [
  { value: "−0.13%", label: "Trip cancellations, via persistent in-trip identifier" },
  { value: "80%+", label: "Trial-lesson conversion rate" },
  { value: "$120K", label: "Seasonal revenue, 8 sold-out camps" },
  { value: "Millions", label: "Users served daily on Uber" },
];

export default function ImpactBento() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10 md:py-14">
      <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted mb-2.5">
        Impact
      </p>
      <h2 className="font-display text-2xl md:text-3xl text-ink tracking-tight mb-6">
        Outcomes, measured.
      </h2>

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
              <p className="mt-1.5 text-[13px] text-muted leading-snug">
                {s.caption}
              </p>
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
    </section>
  );
}
