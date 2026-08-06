export type ProjectLink = { label: string; href: string; external: boolean };
export type ProjectImage = { src: string; alt: string };

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  /** Short "what it is" label, e.g. "Stock research web app". */
  category: string;
  timeframe: string;
  /** One-line role/scope, e.g. "Solo build — full-stack + infra". */
  role: string;
  /** Compact metric/label shown on the home card pill. */
  pill: string;
  /** One-sentence summary for cards. */
  summary: string;
  /** Longer framing for the detail page. */
  overview: string[];
  highlights: string[];
  stack: string[];
  links: ProjectLink[];
  /** Brand-ish accent for subtle per-project theming (hex). */
  accent: string;
  hero: ProjectImage;
  /** Heading shown above the gallery on the detail page. */
  galleryLabel?: string;
  /** True when gallery images are portrait phone screens (render narrower). */
  galleryPortrait?: boolean;
  /**
   * When true, the hero is a logo/mark (not a screenshot) — render it
   * object-contain on `heroBg` instead of cropping it edge-to-edge.
   */
  heroContain?: boolean;
  /** Optional CSS background behind a contained hero (a branded tile). */
  heroBg?: string;
  gallery: ProjectImage[];
  /**
   * True while the gallery shows design mockups / brand assets rather than real
   * in-app captures. Drop real screenshots into public/projects/<slug>/ and set
   * this to false (or remove it) when they land.
   */
  screenshotsPending?: boolean;
};

export const projects: Project[] = [
  {
    slug: "stockkitty",
    name: "StockKitty",
    tagline: "Your purr-sonal stock analyst.",
    category: "Stock research web app",
    timeframe: "2026",
    role: "Solo build — full-stack + infra",
    pill: "Russell 3000 · 3 valuation models",
    summary:
      "A stock-valuation platform that runs every Russell 3000 ticker through three DCF-style models and turns the results into a screener, company deep-dives, and eight ready-made portfolio strategies.",
    overview: [
      "StockKitty values the entire Russell 3000 the way a disciplined analyst would — every ticker is run through three DCF-style models (Free Cash Flow, Excess Profit, Residual Earnings) plus an optional Dividend Discount Model, and the results are persisted so the screener answers instantly.",
      "It's a full-stack build I own end-to-end: a Python/FastAPI backend that batches valuations on a weekly cron, a React SPA that recomputes the same models live in the browser as you tweak assumptions, and a single-container deploy that serves both.",
    ],
    highlights: [
      "Values every Russell 3000 ticker through three DCF-style models (FCF, Excess Profit, Residual Earnings) plus an optional Dividend Discount Model.",
      "The valuation engine is implemented twice in lockstep — Python for the batch runner, JavaScript in the browser — so users recompute intrinsic value live as they change assumptions.",
      "Eight named portfolio strategies (Quality-at-a-Discount, Compounders, and more), each with its own screening gates and weighting scheme, built purely from cached data.",
      "Per-company AI-suggested valuation assumptions via the Anthropic API.",
      "Production-minded infra: weekly batch cron, WAL-mode SQLite with a hot-path screener cache, two-tier JWT auth with silent refresh, and Sentry monitoring — shipped as one container on Railway.",
    ],
    stack: [
      "Python",
      "FastAPI",
      "React",
      "Vite",
      "Zustand",
      "Tailwind",
      "SQLite",
      "Docker",
      "Railway",
      "Anthropic API",
    ],
    links: [
      {
        label: "Visit site",
        href: "https://stockkitty.net",
        external: true,
      },
      {
        label: "GitHub",
        href: "https://github.com/harrybuildz/stockkitty",
        external: true,
      },
    ],
    accent: "#6366F1",
    hero: {
      src: "/projects/stockkitty/hero.png",
      alt: "StockKitty brand hero — logo over a stylized valuation chart",
    },
    galleryLabel: "Screens",
    gallery: [
      {
        src: "/projects/stockkitty/shot-screener.png",
        alt: "StockKitty screener — 2,440 companies ranked by margin of safety across FCF, EP, RE and DDM values",
      },
      {
        src: "/projects/stockkitty/shot-valuation.png",
        alt: "Company page — average intrinsic value vs market price, FCF/EP/RE model outputs, quick metrics, and an AI investment thesis",
      },
      {
        src: "/projects/stockkitty/shot-portfolios.png",
        alt: "Portfolios — the Buffett 'Quality Moat' strategy with sector allocation and a live performance chart vs the S&P 500",
      },
      {
        src: "/projects/stockkitty/shot-sensitivity.png",
        alt: "Company page — a sensitivity-analysis heatmap (rate vs long-term growth) and historical financials",
      },
    ],
    screenshotsPending: false,
  },
  {
    slug: "wanderfree",
    name: "WanderFreely",
    tagline: "Every card perk, tracked.",
    category: "Credit-card benefits · mobile app",
    timeframe: "2026",
    role: "Solo build — mobile + backend",
    pill: "Expo · Supabase · Row-Level Security",
    summary:
      "A mobile app that organizes credit-card benefits: add the cards you hold and it surfaces every perk attached to them — statement credits, multipliers, lounge access, insurance — and tracks redemptions against each benefit's cycle.",
    overview: [
      "Premium cards bury real money in perks people forget to use. WanderFreely fixes that: you add the cards you hold, and it surfaces every benefit attached to them — statement credits, spend multipliers, lounge access, insurance — then tracks what you've redeemed against each benefit's renewal cycle.",
      "The architecture is deliberately backend-less. The Expo/React Native app talks to Supabase Postgres directly, and Row-Level Security does all per-user filtering — a shareable \"portfolio\" is the unit of ownership, so a couple can pool their wallet without exposing it to anyone else.",
    ],
    highlights: [
      "Surfaces every benefit for the cards a user holds and tracks redemptions against each benefit's renewal cycle (unused → partially used → fully used → expired).",
      "No backend API — the mobile app reads and writes Postgres directly via supabase-js, with Row-Level Security and SQL helper functions doing per-user authorization.",
      "Portfolio-based data model: the \"user\" is a shareable portfolio, so wallets can be pooled across people via a membership join table rather than tied to a single login.",
      "Offline-first UX: TanStack Query + an AsyncStorage persister render instantly from cache on cold launch, then refetch in the background.",
      "Hand-curated benefits catalog (issuers, card products, reward categories, benefit definitions) modeled as first-class Postgres tables.",
    ],
    stack: [
      "Expo",
      "React Native",
      "TypeScript",
      "Supabase",
      "Postgres",
      "Row-Level Security",
      "TanStack Query",
      "NativeWind",
      "Expo Router",
    ],
    links: [
      {
        label: "Visit site",
        href: "https://wanderfreely.app",
        external: true,
      },
      {
        label: "GitHub",
        href: "https://github.com/markharrybuildz/WanderFree",
        external: true,
      },
    ],
    accent: "#F59E0B",
    hero: {
      src: "/projects/wanderfree/mark.png",
      alt: "WanderFreely logo mark — a paper plane forming a W",
    },
    galleryLabel: "Screens",
    galleryPortrait: true,
    heroContain: true,
    heroBg:
      "linear-gradient(135deg, #E8F4FF 0%, #F4F8FF 45%, #FFF3DF 100%)",
    gallery: [
      {
        src: "/projects/wanderfree/shot-home.png",
        alt: "WanderFreely home — signup-bonus trackers (Chase Sapphire Reserve, $0 of $6,000 spent by Sep 4; Amex Platinum, $0 of $12,000 by Dec 4) and credits expiring soon",
      },
      {
        src: "/projects/wanderfree/shot-benefits.png",
        alt: "WanderFreely benefits — '$3,570 left to redeem', filterable by category, with each credit's monthly value and reset date",
      },
      {
        src: "/projects/wanderfree/shot-cards.png",
        alt: "WanderFreely cards — searching a catalog of 128 cards to add (Chase Sapphire Reserve, Delta SkyMiles Reserve, U.S. Bank Altitude Reserve), with a running annual-fees total",
      },
      {
        src: "/projects/wanderfree/shot-points.png",
        alt: "WanderFreely points — rewards balances across programs (Chase Ultimate Rewards 150,000 pts, Bilt 50,000, Amex Membership Rewards 25,000) with pending points flagged",
      },
    ],
    screenshotsPending: false,
  },
  {
    slug: "sitewright",
    name: "Sitewright Studio",
    tagline: "Websites built right.",
    category: "Web design & marketing studio",
    timeframe: "2026",
    role: "Founder — brand, design, build & ship",
    pill: "15+ live demo builds",
    summary:
      "A solo web-design and digital-marketing studio for small businesses — brand, build, and ship real sites with working features, backed by a full brand system and transparent public pricing.",
    overview: [
      "Sitewright Studio is my web-design business: I take small businesses from nothing to a fast, modern site — brand and copy through design, build, and launch. The positioning is the craftsman angle (a \"wright\" builds things well): plain-spoken and approachable for non-technical owners, credible enough for $1.5K–$5.5K projects, with a public rate card so pricing is never a mystery.",
      "The portfolio is built on proof, not promises: 15+ clickable demo sites across restaurants, home services, retail, healthcare, fitness, and real estate — each a real, working build with features like order-ahead carts, booking wizards, quote estimators, and an owner-editable CMS.",
    ],
    highlights: [
      "End-to-end studio: brand system, copy, design, build, and launch — all delivered solo.",
      "15+ live, clickable demo builds across verticals, each with genuinely working features (carts & checkout, booking wizards, class timetables, instant-quote estimators).",
      "One demo (Osteria Lume) ships a working CMS the owner edits themselves — real menu and blog editing, not a static mockup.",
      "Complete brand identity: logo system, palette, typography, and a transparent public rate card as a positioning choice.",
      "Built and deployed on Next.js + Cloudflare Pages, with analytics and an inquiry pipeline wired in.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Cloudflare Pages",
      "CMS",
      "Brand & Design",
    ],
    links: [
      {
        label: "Visit site",
        href: "https://sitewrightstudio.com",
        external: true,
      },
      {
        label: "GitHub",
        href: "https://github.com/harrybuildz/sitewright-studio",
        external: true,
      },
    ],
    accent: "#D97706",
    hero: {
      src: "/projects/sitewright/lockup-mark.png",
      alt: "Sitewright Studio logo — an amber carpenter's square cradling a browser window",
    },
    heroContain: true,
    heroBg:
      "linear-gradient(135deg, #FAF5F2 0%, #FDF3E7 55%, #FCE9D2 100%)",
    galleryLabel: "Selected demo builds",
    gallery: [
      {
        src: "/projects/sitewright/sunrise-bakery.jpg",
        alt: "Sitewright demo — Sunrise Bakery, with an order-ahead cart",
      },
      {
        src: "/projects/sitewright/summit-plumbing.jpg",
        alt: "Sitewright demo — Summit Plumbing, with a booking wizard",
      },
      {
        src: "/projects/sitewright/thread-and-pine.jpg",
        alt: "Sitewright demo — Thread & Pine retail boutique",
      },
      {
        src: "/projects/sitewright/terra-and-form.jpg",
        alt: "Sitewright demo — Terra & Form ceramics storefront",
      },
      {
        src: "/projects/sitewright/coralline-fitness.jpg",
        alt: "Sitewright demo — Coralline Fitness class timetable",
      },
      {
        src: "/projects/sitewright/hearthstone-realty.jpg",
        alt: "Sitewright demo — Hearthstone Realty listings",
      },
    ],
    screenshotsPending: false,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
