const projects = [
  { name: "Meri",          meta: "Fintech Rebrand · 2025",          monogram: "M", hue: "violet" },
  { name: "Kairos",        meta: "Product Launch Identity · 2025",  monogram: "K", hue: "rose"   },
  { name: "Sable",         meta: "Luxury Food Brand · 2024",        monogram: "S", hue: "amber"  },
  { name: "North Quarter", meta: "Real Estate Identity · 2024",     monogram: "N", hue: "rose"   },
  { name: "Ardent",        meta: "SaaS Rebrand · 2024",            monogram: "A", hue: "amber"  },
  { name: "Fenix",         meta: "App Icon & Brand System · 2023",  monogram: "F", hue: "violet" },
]

const hueGradient: Record<string, string> = {
  violet: "radial-gradient(ellipse 55% 55% at 35% 50%, rgba(138,92,247,0.18) 0%, #0B0B12 65%)",
  rose:   "radial-gradient(ellipse 55% 55% at 65% 45%, rgba(212,88,122,0.15) 0%, #0B0B12 65%)",
  amber:  "radial-gradient(ellipse 55% 55% at 50% 60%, rgba(240,149,106,0.14) 0%, #0B0B12 65%)",
}

export function Work() {
  return (
    <section id="work" className="bg-void relative z-10">
      <div className="container-main section-y">
        <header className="mb-[clamp(2.5rem,5vw,4rem)]">
          <span className="eyebrow">Selected Work</span>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-surface border-t border-surface">
          {projects.map((p) => (
            <article
              key={p.name}
              className="bg-matter overflow-hidden cursor-pointer group"
            >
              {/* Visual */}
              <div
                className="relative overflow-hidden transition-[filter] duration-400 group-hover:brightness-110"
                style={{
                  aspectRatio: "4/3",
                  background: hueGradient[p.hue],
                }}
              >
                {/* Ghost monogram */}
                <span
                  className="font-display font-extrabold absolute right-2 bottom-[-0.75rem] leading-none select-none pointer-events-none"
                  style={{
                    fontSize: "clamp(5rem,11vw,10rem)",
                    color: "rgba(255,255,255,0.035)",
                    letterSpacing: "-0.05em",
                  }}
                  aria-hidden="true"
                >
                  {p.monogram}
                </span>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[rgba(138,92,247,0.07)] via-[rgba(212,88,122,0.06)] to-[rgba(240,149,106,0.05)] opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />
              </div>

              {/* Info row */}
              <div className="flex justify-between items-baseline gap-4 px-6 py-[1.2rem] bg-matter border-t border-surface">
                <h3 className="font-display font-bold text-[1rem] text-signal">{p.name}</h3>
                <span className="font-mono text-[0.62rem] tracking-[0.07em] text-ash whitespace-nowrap">{p.meta}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
