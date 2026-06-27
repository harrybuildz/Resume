import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { aboutLead, expertise } from "@/lib/about";

export const metadata: Metadata = {
  title: "About — Harry Clemente",
  description:
    "Product-focused Android engineer building, scaling, and optimizing high-impact mobile experiences for millions of users.",
};

export default function AboutPage() {
  return (
    <article className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-2xl">
        <Image
          src="/professional_portrait.png"
          alt="Portrait of Harry Clemente"
          width={288}
          height={288}
          priority
          className="rounded-lg mb-10 object-cover"
        />
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted mb-4">
          About
        </p>
        <h1 className="font-display text-3xl md:text-4xl text-ink tracking-tight mb-8 leading-tight">
          Product-focused Android engineer.
        </h1>
        <p className="text-base md:text-lg text-ink leading-relaxed">
          {aboutLead}
        </p>

        <div className="mt-14">
          <p className="text-xs font-mono uppercase tracking-[0.18em] text-muted mb-6">
            Core areas of expertise
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {expertise.map((e) => (
              <div key={e.title} className="card p-6">
                <h2 className="font-display text-lg text-ink tracking-tight leading-snug">
                  {e.title}
                </h2>
                <p className="mt-2 text-[14px] text-muted leading-relaxed">
                  {e.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 pt-12 border-t border-rule space-y-10">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.18em] text-muted mb-4">
              Most recently
            </p>
            <p className="text-base text-ink">
              Software Engineer at Uber · Android · Nov 2022 – Apr 2026
            </p>
          </div>

          <div>
            <p className="text-xs font-mono uppercase tracking-[0.18em] text-muted mb-4">
              Earlier
            </p>
            <p className="text-base text-ink leading-relaxed">
              Technical Director at theCoderSchool · autonomous-vehicle training
              at Cruise &amp; Waymo · co-founder · U.S. Army veteran (Operation
              Enduring Freedom, Afghanistan).
            </p>
          </div>

          <div>
            <p className="text-xs font-mono uppercase tracking-[0.18em] text-muted mb-4">
              Education
            </p>
            <ul className="space-y-2 text-base text-ink">
              <li>Hack Reactor — Advanced Software Engineering Immersive</li>
              <li>CSU East Bay — MBA, Global Innovation</li>
              <li>SF State University — B.S., Business Administration</li>
              <li>
                A.S., Network Programming · A.A., Computer Information Systems
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-mono uppercase tracking-[0.18em] text-muted mb-4">
              Technical
            </p>
            <p className="text-base text-ink leading-relaxed">
              Kotlin, Java, JavaScript, Python · Android, mobile architecture,
              accessibility (TalkBack), push notifications, feature flags ·
              A/B experimentation, monitoring &amp; alerting, staged rollouts,
              production debugging.
            </p>
          </div>
        </div>

        <div className="mt-14 pt-12 border-t border-rule">
          <h2 className="font-display text-2xl text-ink tracking-tight">
            Let&apos;s connect.
          </h2>
          <p className="mt-3 text-base text-muted leading-relaxed">
            Always glad to swap mobile-development stories or talk through
            emerging trends in the Android ecosystem — whether you want to
            collaborate, share insights, or simply talk code.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-5 text-sm text-accent hover:opacity-80 transition-opacity"
          >
            Get in touch <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
