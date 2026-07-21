import Image from "next/image";
import Link from "next/link";
import StatusPill from "./StatusPill";

/** Landing hero: builder identity, proof, and CTAs — with a portrait anchor. */
export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-16 pb-14 md:pt-24 md:pb-20">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        {/* Left — identity, headline, proof, CTAs */}
        <div>
          <StatusPill />

          <h1 className="mt-6 font-display font-bold text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05] tracking-tight text-ink">
            I build and ship products, end&#8209;to&#8209;end.
          </h1>

          <p className="mt-6 text-lg md:text-xl text-ink leading-relaxed max-w-xl">
            Product-focused engineer. I own features from architecture through
            experimentation to production — most recently Android at Uber, for
            millions of riders a day.
          </p>

          <p className="mt-4 text-[15px] text-muted leading-relaxed max-w-xl">
            MBA · former Technical Director &amp; co-founder · U.S. Army veteran
            · currently building{" "}
            <Link href="/projects" className="text-accent hover:opacity-80">
              independent products
            </Link>
            .
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/work"
              className="rounded-xl bg-accent px-5 py-3.5 text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
            >
              View my work
            </Link>
            <a
              href="/resume.pdf"
              className="card rounded-xl px-5 py-3.5 text-[15px] font-semibold text-ink hover:border-accent"
            >
              Download résumé
            </a>
            <Link
              href="/contact"
              className="px-2 py-3.5 text-[15px] font-medium text-muted transition-colors hover:text-accent"
            >
              Get in touch <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* Right — portrait anchor with a floating proof card */}
        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -inset-6 -z-10 rounded-[2rem] opacity-70 blur-2xl"
            style={{
              background:
                "radial-gradient(60% 60% at 70% 20%, color-mix(in srgb, var(--accent) 32%, transparent), transparent 70%)",
            }}
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-rule bg-chip shadow-[var(--shadow-hover)]">
            <Image
              src="/professional_portrait.png"
              alt="Portrait of Harry Clemente"
              fill
              priority
              sizes="(min-width: 1024px) 440px, (min-width: 640px) 384px, 90vw"
              className="object-cover object-center"
            />
          </div>

          <div className="absolute -bottom-5 -left-4 flex items-center gap-3 rounded-2xl border border-rule bg-surface px-4 py-3 shadow-[var(--shadow-hover)] sm:-left-6">
            <span
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
              style={{
                background:
                  "color-mix(in srgb, var(--accent) 14%, transparent)",
              }}
              aria-hidden="true"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 17 L10 11 L14 15 L20 8" />
                <path d="M15 8 H20 V13" />
              </svg>
            </span>
            <div>
              <p className="text-sm font-semibold text-ink leading-tight">
                Millions served daily
              </p>
              <p className="text-[12px] text-muted leading-tight">
                Android safety · Uber
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
