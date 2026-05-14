const stats = [
  { value: "+13%", label: "safety toolkit engagement at Uber" },
  { value: "−19%", label: "permanent opt-outs from ride recording" },
  { value: "+157%", label: "student enrollment at theCoderSchool" },
  { value: "$120K", label: "summer camp revenue, eight sold-out cohorts" },
];

export default function ImpactStrip() {
  return (
    <section className="border-y border-rule px-6 py-12 md:py-16">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted mb-8">
          Selected impact
        </p>
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8">
          {stats.map((s) => (
            <div key={s.value}>
              <dt className="font-mono text-2xl md:text-3xl text-ink tracking-tight">
                {s.value}
              </dt>
              <dd className="mt-2 text-sm text-muted leading-snug">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
