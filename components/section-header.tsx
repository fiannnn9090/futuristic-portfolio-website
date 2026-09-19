import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  label: string
  note?: string
  direction?: "left" | "center"
  className?: string
}

/**
 * Editorial section header — monospaced index label, hairline rule,
 * and a trailing metadata note. Mirrors the Stitch "Obsidian Cyber-Editorial"
 * section headers exactly.
 */
export function SectionHeader({
  label,
  note,
  direction = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-4 mb-12",
        direction === "center" && "justify-center",
        className
      )}
    >
      <span className="shrink-0 font-mono text-label-md uppercase tracking-[0.16em] text-text-secondary">
        {label}
      </span>
      <div className="h-px bg-border flex-1" />
      {note && (
        <span className="shrink-0 hidden sm:inline font-mono text-label-sm uppercase tracking-[0.08em] text-text-tertiary">
          {note}
        </span>
      )}
    </div>
  )
}