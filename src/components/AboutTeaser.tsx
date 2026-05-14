import Link from "next/link";

export default function AboutTeaser() {
  return (
    <section className="border-t border-rule px-6 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-display text-2xl md:text-3xl text-ink tracking-tight mb-8">
          About
        </h2>
        <div className="space-y-5 text-base md:text-lg text-ink leading-relaxed max-w-2xl">
          <p>
            I&apos;m a software engineer focused on mobile. Most recently I
            spent three and a half years building Android features on
            Uber&apos;s global consumer platform — primarily around rider
            safety, where my work measurably shifted user trust at scale.
          </p>
          <p>
            Before Uber I ran a coding education center as Technical Director,
            growing it from 70 to 180 students. Before that I co-founded a
            martial arts gym, trained autonomous-vehicle software at Cruise and
            Waymo, and served in the U.S. Army during Operation Enduring
            Freedom.
          </p>
          <p>
            The thread across all of it is the same: build systems people can
            trust, and measure whether they actually work.
          </p>
        </div>
        <Link
          href="/about"
          className="inline-block mt-8 text-sm text-muted hover:text-accent transition-colors"
        >
          Full background →
        </Link>
      </div>
    </section>
  );
}
