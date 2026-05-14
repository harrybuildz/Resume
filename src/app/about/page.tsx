import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Harry Clemente",
  description:
    "Career narrative, education, and background — mobile engineer, operator, U.S. Army veteran.",
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
        <h1 className="font-display text-3xl md:text-4xl text-ink tracking-tight mb-12 leading-tight">
          Builder of mobile features, operator at heart.
        </h1>
        <div className="space-y-6 text-base md:text-lg text-ink leading-relaxed">
          <p>
            I&apos;m a mobile engineer. Most recently I spent three and a half
            years at Uber, building Android features for rider safety and
            experience on a global consumer platform — owning each feature
            end-to-end, from architecture through experimentation, staged
            rollout, monitoring, and iteration.
          </p>
          <p>
            Before Uber, I was Technical Director at theCoderSchool, an
            after-school coding center for K–12 students. I grew enrollment
            from 70 to 180 students, ran eight sold-out summer camps that
            generated roughly $120K, managed 20 instructors, and built
            operational systems for acquisition, retention, and curriculum
            delivery.
          </p>
          <p>
            Before that I co-founded a Brazilian jiu-jitsu gym, trained
            autonomous-vehicle software at Cruise and Waymo, and served eight
            years in the U.S. Army as a Multichannel Communications Operator —
            including a deployment to Afghanistan during Operation Enduring
            Freedom.
          </p>
          <p>
            What ties it together: high-stakes systems, measurable outcomes,
            and a habit of building both the product and the operation around
            it.
          </p>
        </div>

        <div className="mt-16 pt-12 border-t border-rule space-y-10">
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
              A/B experimentation, monitoring & alerting, staged rollouts,
              production debugging.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
