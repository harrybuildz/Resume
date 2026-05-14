import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { cases } from "@/lib/cases";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = cases.find((x) => x.slug === slug);
  if (!c) return {};
  return {
    title: `${c.title} — Harry Clemente`,
    description: c.summary,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const c = cases.find((x) => x.slug === slug);
  if (!c) notFound();

  return (
    <article className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/work"
          className="text-sm text-muted hover:text-accent transition-colors"
        >
          ← All work
        </Link>
        <div className="mt-8 flex items-baseline justify-between gap-4">
          <p className="text-xs font-mono uppercase tracking-[0.18em] text-muted">
            {c.org}
          </p>
          <p className="font-mono text-sm text-accent shrink-0">{c.metric}</p>
        </div>
        <h1 className="mt-4 font-display text-3xl md:text-4xl text-ink tracking-tight leading-tight">
          {c.title}
        </h1>
        <p className="mt-6 text-lg text-muted leading-relaxed">{c.summary}</p>
        <div className="mt-12 pt-8 border-t border-rule">
          <p className="text-sm text-muted italic">
            Full case study coming soon. In the meantime, the short version is
            above and the résumé bullets are on the{" "}
            <Link href="/about" className="text-ink hover:text-accent">
              about page
            </Link>
            .
          </p>
        </div>
      </div>
    </article>
  );
}
