import Link from "next/link";

/**
 * Brand monogram: a rounded indigo tile with an upward chevron (ship / growth)
 * and a warm "spark" dot. Uses fixed brand hexes (not theme tokens) so the mark
 * is identical in light and dark. Sized in px so it stays crisp at favicon scale.
 */
export function LogoMark({ size = 30 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      role="img"
      aria-label="Harry Clemente monogram"
      className="shrink-0"
    >
      <defs>
        <linearGradient id="hc-tile" x1="0" y1="0" x2="32" y2="32">
          <stop offset="0" stopColor="#5B54F0" />
          <stop offset="1" stopColor="#4038C9" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="9" fill="url(#hc-tile)" />
      {/* upward chevron — "shipping / up and to the right" */}
      <path
        d="M8.5 20.5 L16 12.5 L23.5 20.5"
        stroke="#FFFFFF"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* warm spark accent */}
      <circle cx="16" cy="12.5" r="1.9" fill="#FB7A34" />
    </svg>
  );
}

/** Full brand lockup: monogram + wordmark. Links home. */
export default function Logo() {
  return (
    <Link
      href="/"
      aria-label="Harry Clemente — home"
      className="group inline-flex items-center gap-2.5"
    >
      <LogoMark />
      <span className="font-display text-[15px] font-semibold tracking-tight text-ink transition-colors group-hover:text-accent">
        Harry Clemente
      </span>
    </Link>
  );
}
