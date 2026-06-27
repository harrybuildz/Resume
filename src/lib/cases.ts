export type CaseStudy = {
  slug: string;
  title: string;
  org: string;
  summary: string;
  metric: string;
};

export const cases: CaseStudy[] = [
  {
    slug: "recording-snooze",
    title: "A snooze that earned back trust",
    org: "Uber · Android · 2024–2025",
    summary:
      "Cut permanent opt-outs from Uber's ride recording safety feature by 19% with a session-based snooze, validated through a 60-day A/B test.",
    metric: "−19% opt-outs",
  },
  {
    slug: "safety-toolkit",
    title: "Repositioning the Safety Toolkit",
    org: "Uber · Android · 2023–2024",
    summary:
      "Led migration and redesign of in-trip safety surfaces, lifting safety tool engagement 13% across millions of riders.",
    metric: "+13% engagement",
  },
  {
    slug: "coderschool-growth",
    title: "Growing a coding school 157%",
    org: "theCoderSchool · 2022–2023",
    summary:
      "Rebuilt acquisition, retention, and operations as Technical Director — 70 to 180 students, 80%+ trial conversion, eight sold-out summer camps.",
    metric: "+157% enrollment",
  },
  {
    slug: "safety-reliability",
    title: "Safety features & production reliability",
    org: "Uber · Android · 2022–2026",
    summary:
      "Shipped Safety Shield enhancements, in-trip video playback, and rider PIN verification; engineered state-driven workflows and expanded crash monitoring, alerting, and on-call dashboards.",
    metric: "Reliability",
  },
];
