export function Footer() {
  return (
    <footer className="bg-matter border-t border-surface relative z-10 py-8">
      <div className="container-main flex flex-wrap items-center justify-between gap-4">
        <span className="font-display font-bold text-[0.8rem] tracking-[0.14em] text-signal">
          VOID STUDIO
        </span>
        <span className="font-mono text-[0.68rem] text-ash">© 2026</span>
        <nav className="flex gap-6" aria-label="Footer links">
          {[
            { label: "Email",     href: "mailto:hello@voidstudio.co" },
            { label: "Instagram", href: "#" },
            { label: "LinkedIn",  href: "#" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-[0.68rem] tracking-[0.06em] text-ash hover:text-signal transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
