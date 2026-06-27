const groups = [
  {
    title: "Languages",
    items: ["Kotlin", "Java", "JavaScript", "Python"],
  },
  {
    title: "Mobile",
    items: [
      "Android",
      "React",
      "Expo",
      "Mobile Architecture",
      "UI Development",
      "Push Notifications",
      "Accessibility (TalkBack)",
      "Feature Flags",
    ],
  },
  {
    title: "Practices",
    items: [
      "A/B Experimentation",
      "Staged Rollouts",
      "Unit Testing",
      "Production Debugging",
      "Monitoring & Alerting",
    ],
  },
  {
    title: "Tools",
    items: ["Git", "CI/CD", "Supabase", "Metrics Dashboards"],
  },
];

export default function StackStrip() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10 md:py-14">
      <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted mb-2.5">
        Stack
      </p>
      <h2 className="font-display text-2xl md:text-3xl text-ink tracking-tight mb-6">
        What I work with.
      </h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {groups.map((g) => (
          <div key={g.title} className="card p-5">
            <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-muted mb-3.5">
              {g.title}
            </p>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((item) => (
                <li key={item} className="chip">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
