const items = [
  "LOGO DESIGN", "BRAND IDENTITY", "WEB DESIGN", "VISUAL SYSTEMS", "ART DIRECTION",
  "LOGO DESIGN", "BRAND IDENTITY", "WEB DESIGN", "VISUAL SYSTEMS", "ART DIRECTION",
]

export function Ticker() {
  return (
    <div
      className="bg-matter border-t border-b border-surface overflow-hidden py-4 relative z-10"
      aria-hidden="true"
    >
      <div className="flex items-center gap-7 whitespace-nowrap w-max animate-ticker">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-7">
            <span className="font-mono text-[0.68rem] tracking-[0.18em] text-ash">{item}</span>
            <span className="text-surface text-sm">—</span>
          </span>
        ))}
      </div>
    </div>
  )
}
