import Link from "next/link";
import { LogoMark } from "./Logo";
import { contactLinks } from "@/lib/contact";

const pages = [
  { href: "/work", label: "Work" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

/** Site footer: brand mark + identity, quick nav, social links, and colophon. */
export default function Footer() {
  return (
    <footer className="mt-8 border-t border-rule px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5">
              <LogoMark size={26} />
              <span className="font-display text-[15px] font-semibold tracking-tight text-ink">
                Harry Clemente
              </span>
            </div>
            <p className="mt-3 text-sm text-muted leading-relaxed">
              Product engineer who ships end-to-end — architecture through
              experimentation to production.
            </p>
          </div>

          <div className="flex gap-14">
            <nav className="flex flex-col gap-2.5">
              <p className="mb-1 text-[11px] font-mono uppercase tracking-[0.16em] text-muted">
                Pages
              </p>
              {pages.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="text-sm text-muted transition-colors hover:text-accent"
                >
                  {p.label}
                </Link>
              ))}
            </nav>

            <div className="flex flex-col gap-2.5">
              <p className="mb-1 text-[11px] font-mono uppercase tracking-[0.16em] text-muted">
                Elsewhere
              </p>
              {contactLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.external ? "_blank" : undefined}
                  rel={l.external ? "noopener noreferrer" : undefined}
                  className="text-sm text-muted transition-colors hover:text-accent"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-rule pt-6 text-xs font-mono text-muted">
          <p>© {new Date().getFullYear()} Harry Clemente</p>
          <p>harrybuildz.dev</p>
        </div>
      </div>
    </footer>
  );
}
