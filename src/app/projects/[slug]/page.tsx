import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects, getProject } from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };

/** Pre-render a static route for every project slug. */
export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return {
    title: `${p.name} — Harry Clemente`,
    description: p.summary,
    openGraph: {
      title: `${p.name} — Harry Clemente`,
      description: p.summary,
      images: [{ url: p.hero.src, alt: p.hero.alt }],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  return (
    <article className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/projects"
          className="text-sm text-muted hover:text-accent transition-colors"
        >
          <span aria-hidden="true">←</span> All projects
        </Link>

        {/* Header */}
        <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2">
          <span
            className="rounded-lg px-2.5 py-1 text-[12px] font-semibold"
            style={{
              color: p.accent,
              background: `color-mix(in srgb, ${p.accent} 12%, transparent)`,
            }}
          >
            {p.pill}
          </span>
          <p className="text-xs font-mono uppercase tracking-[0.16em] text-muted">
            {p.category} · {p.timeframe}
          </p>
        </div>
        <h1 className="mt-4 font-display text-3xl md:text-5xl text-ink tracking-tight leading-tight">
          {p.name}
        </h1>
        <p className="mt-3 text-lg md:text-xl text-muted font-medium">
          {p.tagline}
        </p>

        {/* Links + role */}
        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          <span className="text-muted">{p.role}</span>
          {p.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noopener noreferrer" : undefined}
              className="font-semibold text-ink transition-colors hover:text-accent"
            >
              {l.label} <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>

        {/* Hero image */}
        <div
          className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl border border-rule bg-chip"
          style={p.heroBg ? { background: p.heroBg } : undefined}
        >
          <Image
            src={p.hero.src}
            alt={p.hero.alt}
            fill
            priority
            sizes="(min-width: 896px) 896px, 100vw"
            className={p.heroContain ? "object-contain p-12" : "object-cover"}
          />
        </div>

        {/* Overview */}
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2 space-y-4">
            {p.overview.map((para) => (
              <p key={para} className="text-base text-muted leading-relaxed">
                {para}
              </p>
            ))}
          </div>
          <aside>
            <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-muted mb-3">
              Built with
            </p>
            <ul className="flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <li key={s} className="chip">
                  {s}
                </li>
              ))}
            </ul>
          </aside>
        </div>

        {/* Highlights */}
        <div className="mt-12 pt-8 border-t border-rule">
          <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-muted mb-5">
            What it does
          </p>
          <ul className="space-y-4">
            {p.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-base text-ink leading-relaxed">
                <span
                  aria-hidden="true"
                  className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ background: p.accent }}
                />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Gallery */}
        {p.gallery.length > 0 && (
          <div className="mt-14">
            <div className="mb-5 flex items-baseline justify-between gap-4">
              <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-muted">
                {p.galleryLabel ?? "Gallery"}
              </p>
              {p.screenshotsPending && (
                <p className="text-[12px] italic text-muted">
                  Concept &amp; brand visuals — in-app screenshots coming soon.
                </p>
              )}
            </div>
            <div
              className={
                p.galleryPortrait
                  ? "mx-auto grid max-w-md grid-cols-2 gap-4 sm:gap-6"
                  : "grid gap-4 sm:grid-cols-2"
              }
            >
              {p.gallery.map((img) => (
                <div
                  key={img.src}
                  className={`relative overflow-hidden border border-rule ${
                    p.galleryPortrait
                      ? "aspect-[337/734] rounded-2xl bg-[#EAF3FF]"
                      : "aspect-[16/10] rounded-xl bg-chip"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes={
                      p.galleryPortrait
                        ? "(min-width: 640px) 220px, 45vw"
                        : "(min-width: 640px) 50vw, 100vw"
                    }
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer nav */}
        <div className="mt-16 pt-8 border-t border-rule flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/projects"
            className="text-sm text-muted hover:text-accent transition-colors"
          >
            <span aria-hidden="true">←</span> All projects
          </Link>
          <Link
            href="/contact"
            className="text-sm font-semibold text-ink hover:text-accent transition-colors"
          >
            Get in touch <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
