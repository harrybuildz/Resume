export type CaseStudy = {
  slug: string;
  title: string;
  org: string;
  summary: string;
  metric: string;
  /** Short label for the metric, shown under the number on the detail page. */
  metricLabel: string;
  /** One line of context — what was wrong / the goal. */
  problem: string;
  /** What I actually did. */
  approach: string;
  /** The measurable outcome. */
  result: string;
};

export const cases: CaseStudy[] = [
  {
    slug: "recording-snooze",
    title: "A snooze that earned back trust",
    org: "Uber · Android · 2024–2025",
    summary:
      "Cut permanent opt-outs from Uber's ride recording safety feature by 19% with a session-based snooze, validated through a 60-day A/B test.",
    metric: "−19% opt-outs",
    metricLabel: "Permanent opt-outs from ride recording",
    problem:
      "Riders who hit friction with Uber's in-trip ride-recording safety feature were permanently opting out — and losing its protection for good.",
    approach:
      "Designed and shipped a session-based snooze so a rider could pause recording for a single trip instead of disabling it entirely, then validated the change with a 60-day A/B test.",
    result:
      "Cut permanent opt-outs by 19%, keeping far more riders covered by the safety feature.",
  },
  {
    slug: "safety-toolkit",
    title: "Repositioning the Safety Toolkit",
    org: "Uber · Android · 2023–2024",
    summary:
      "Led migration and redesign of in-trip safety surfaces, lifting safety tool engagement 13% across millions of riders.",
    metric: "+13% engagement",
    metricLabel: "Safety-tool engagement across riders",
    problem:
      "Uber's in-trip safety tools were underused — hard to find and easy to overlook mid-ride.",
    approach:
      "Led the migration and redesign of the in-trip safety surfaces, repositioning the Safety Toolkit so the right tools surface at the right moment.",
    result:
      "Lifted safety-tool engagement 13% across millions of riders.",
  },
  {
    slug: "coderschool-growth",
    title: "Growing a coding school 157%",
    org: "theCoderSchool · 2022–2023",
    summary:
      "Rebuilt acquisition, retention, and operations as Technical Director — 70 to 180 students, 80%+ trial conversion, eight sold-out summer camps.",
    metric: "+157% enrollment",
    metricLabel: "Student enrollment, 70 → 180",
    problem:
      "A local coding school needed to grow enrollment and tighten operations to scale.",
    approach:
      "As Technical Director, rebuilt acquisition, retention, and operations end-to-end — from the trial-lesson funnel to summer-camp programming and staffing.",
    result:
      "Grew enrollment from 70 to 180 students (+157%), reached 80%+ trial-lesson conversion, and ran eight sold-out summer camps.",
  },
  {
    slug: "safety-reliability",
    title: "Safety features & production reliability",
    org: "Uber · Android · 2022–2026",
    summary:
      "Shipped Safety Shield enhancements, in-trip video playback, and rider PIN verification; engineered state-driven workflows and expanded crash monitoring, alerting, and on-call dashboards.",
    metric: "Millions daily",
    metricLabel: "Riders on the surfaces I shipped",
    problem:
      "Uber's rider safety surface needed new capabilities and steadier production reliability at scale.",
    approach:
      "Shipped Safety Shield enhancements, in-trip video playback, and rider PIN verification; engineered state-driven workflows; and expanded crash monitoring, alerting, and on-call dashboards.",
    result:
      "Delivered new safety features and hardened production reliability for a surface used by millions of riders every day.",
  },
];

export function getCase(slug: string): CaseStudy | undefined {
  return cases.find((c) => c.slug === slug);
}
