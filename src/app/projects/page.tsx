import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects — Harry Clemente",
  description:
    "Independent products built end-to-end: StockKitty (stock research), WanderFreely (credit-card benefits), and Sitewright Studio (web design business).",
};

export default function ProjectsIndex() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted mb-4">
          Independent builds
        </p>
        <h1 className="font-display text-3xl md:text-4xl text-ink tracking-tight mb-4">
          Products I&apos;ve shipped on my own
        </h1>
        <p className="text-base text-muted leading-relaxed max-w-2xl mb-12">
          Three things I designed, built, and shipped end-to-end outside of work
          — a full-stack web app, a mobile app, and a web-design business.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="card card-interactive group flex flex-col overflow-hidden"
            >
              <div
                className="relative aspect-[16/10] bg-chip"
                style={p.heroBg ? { background: p.heroBg } : undefined}
              >
                <Image
                  src={p.hero.src}
                  alt={p.hero.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className={`transition-transform duration-300 group-hover:scale-[1.03] ${
                    p.heroContain ? "object-contain p-8" : "object-cover"
                  }`}
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-[11px] font-mono uppercase tracking-[0.14em] text-muted">
                  {p.category}
                </p>
                <h2 className="mt-2 font-display text-xl text-ink tracking-tight group-hover:text-accent transition-colors">
                  {p.name}
                </h2>
                <p className="mt-1 text-sm font-medium text-muted">
                  {p.tagline}
                </p>
                <p className="mt-3 text-[14px] text-muted leading-relaxed">
                  {p.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <p className="mt-14">
          <Link
            href="/work"
            className="text-sm text-muted hover:text-accent transition-colors"
          >
            Looking for professional case studies? See my work{" "}
            <span aria-hidden="true">→</span>
          </Link>
        </p>
      </div>
    </section>
  );
}
