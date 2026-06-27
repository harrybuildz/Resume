/** Site footer with copyright and domain. */
export default function Footer() {
  return (
    <footer className="border-t border-rule px-6 py-8">
      <div className="mx-auto max-w-6xl flex items-center justify-between text-xs font-mono text-muted">
        <p>© {new Date().getFullYear()} Harry Clemente</p>
        <p>harrybuildz.dev</p>
      </div>
    </footer>
  );
}
