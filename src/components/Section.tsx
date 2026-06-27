import Link from "next/link";

/** Shared page-section wrapper: consistent max width, gutters, and rhythm. */
export function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`mx-auto max-w-6xl px-6 py-10 md:py-14 ${className}`}>
      {children}
    </section>
  );
}

type Action = { href: string; label: string };

/** Shared "eyebrow + heading" section header, with an optional trailing link. */
export function SectionHeader({
  eyebrow,
  title,
  action,
}: {
  eyebrow: string;
  title: string;
  action?: Action;
}) {
  const heading = (
    <div>
      <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted mb-2.5">
        {eyebrow}
      </p>
      <h2 className="font-display text-2xl md:text-3xl text-ink tracking-tight">
        {title}
      </h2>
    </div>
  );

  if (!action) return <div className="mb-6">{heading}</div>;

  return (
    <div className="flex items-end justify-between gap-4 mb-6">
      {heading}
      <Link
        href={action.href}
        className="shrink-0 text-sm text-muted hover:text-accent transition-colors"
      >
        {action.label}{" "}
        <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}
