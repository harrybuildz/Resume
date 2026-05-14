import Image from "next/image";

export default function Hero() {
  return (
    <section className="px-6 pt-20 pb-16 md:pt-28 md:pb-24 lg:pt-36 lg:pb-32">
      <div className="mx-auto max-w-3xl">
        <div className="flex items-center gap-3 mb-8">
          <Image
            src="/professional_portrait.png"
            alt="Portrait of Harry Clemente"
            width={56}
            height={56}
            priority
            className="rounded-full border border-rule object-cover"
          />
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted">
            Harry Clemente
          </p>
        </div>
        <h1 className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-ink">
          I build mobile features end-to-end
          <span className="text-muted">—</span>design through experimentation
          <span className="text-muted">—</span>for products used millions of
          times a day.
        </h1>
        <p className="mt-8 text-base md:text-lg text-muted max-w-2xl leading-relaxed">
          Most recently Android engineer at Uber. MBA. Former tech director,
          co-founder, and U.S. Army veteran.
        </p>
      </div>
    </section>
  );
}
