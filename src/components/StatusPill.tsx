type Props = {
  /** Render for placement on a permanently-dark surface (e.g. the contact card). */
  onDark?: boolean;
};

/**
 * "Open to work" availability pill. Single source of truth for the status
 * label; `onDark` swaps the palette for dark surfaces.
 */
export default function StatusPill({ onDark = false }: Props) {
  return (
    <span
      className={
        onDark
          ? "inline-flex items-center gap-2 rounded-full bg-white/[0.08] px-3 py-1.5 text-[13px] font-medium text-zinc-100"
          : "inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1.5 text-[13px] font-medium text-emerald-700 ring-1 ring-emerald-600/15 dark:text-emerald-400"
      }
    >
      <span
        className={`h-2 w-2 rounded-full ${onDark ? "bg-emerald-400" : "bg-emerald-500"}`}
        aria-hidden="true"
      />
      Open to Software Engineering roles
    </span>
  );
}
