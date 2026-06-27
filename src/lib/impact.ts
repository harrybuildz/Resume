export type Stat = { value: string; label: string; caption?: string };

// Headline outcomes for the home "Impact" bento. These mirror the metrics in
// the case studies in `cases.ts` — keep the two in sync when figures change.
export const bigStats: Stat[] = [
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

export const smallStats: Stat[] = [
  { value: "−0.13%", label: "Trip cancellations, via persistent in-trip identifier" },
  { value: "80%+", label: "Trial-lesson conversion rate" },
  { value: "$120K", label: "Seasonal revenue, 8 sold-out camps" },
  { value: "Millions", label: "Users served daily on Uber" },
];
