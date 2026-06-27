import Image from "next/image";
import Link from "next/link";
import StatusPill from "./StatusPill";

/** Landing hero: identity, availability, headline, tech signature, and CTAs. */
export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-20 pb-12 md:pt-28 md:pb-16">
      <div className="flex items-center gap-3 mb-6">
        <Image
          src="/professional_portrait.png"
          alt="Portrait of Harry Clemente"
          width={44}
          height={44}
          priority
          className="rounded-full border border-rule object-cover"
        />
        <p className="text-xs font-mono uppercase tracking-[0.18em] text-muted">
          Harry Clemente
        </p>
      </div>

      <div className="mb-6">
        <StatusPill />
      </div>

      <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.08] tracking-tight text-ink max-w-4xl">
        I build mobile products end-to-end, designed through experimentation
        and measured by impact.
      </h1>

      <p className="mt-6 font-mono text-sm md:text-[15px] text-accent">
        Kotlin · Java · Android · Experimentation · Production reliability
      </p>

      <p className="mt-6 text-base md:text-lg text-muted max-w-xl leading-relaxed">
        Former Android engineer at Uber. MBA. Previously technical director,
        co-founder, and U.S. Army veteran.
      </p>
      <p className="mt-3 text-base md:text-lg text-ink font-medium max-w-xl leading-relaxed">
        Currently building independent mobile products.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <Link
          href="/work"
          className="rounded-xl bg-accent px-5 py-3.5 text-[15px] font-semibold text-white transition-colors hover:opacity-90"
        >
          View work
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
    </section>
  );
}
