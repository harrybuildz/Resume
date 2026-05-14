import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  return (
    <header className="border-b border-rule">
      <div className="mx-auto max-w-3xl px-6 py-5 flex items-center justify-between">
        <Link
          href="/"
          className="font-mono text-sm tracking-wider text-ink hover:text-accent transition-colors"
        >
          HC
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link
            href="/"
            className="text-muted hover:text-ink transition-colors"
          >
            Home
          </Link>
          <Link
            href="/work"
            className="text-muted hover:text-ink transition-colors"
          >
            Work
          </Link>
          <Link
            href="/about"
            className="text-muted hover:text-ink transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-muted hover:text-ink transition-colors"
          >
            Contact
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
