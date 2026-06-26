const services = [
  {
    name: "Logo",
    tagline: "A mark that holds at 16px and on a billboard.",
    desc: "The first thing people see. The thing they remember long after they've forgotten your name. We build marks that are specific, legible at any size, and hard to imitate.",
  },
  {
    name: "Web",
    tagline: "Sites that load fast, feel considered, and convert.",
    desc: "A website isn't just presence — it's your pitch. We design and build sites that communicate what you do, who you're for, and why it matters, without wasting anyone's time.",
  },
  {
    name: "Brand",
    tagline: "The system that makes everything else make sense.",
    desc: "Color, type, texture, motion. Every touchpoint speaking the same language. We build brand systems that scale from a business card to a stadium without losing coherence.",
  },
]

export function Services() {
  return (
    <section id="services" className="bg-void relative z-10 section-y">
      <div className="container-main">
        <header className="mb-[clamp(2.5rem,5vw,4rem)]">
          <span className="eyebrow">What We Do</span>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-surface border border-surface">
          {services.map((s) => (
            <div key={s.name} className="bg-void flex flex-col gap-4 p-[clamp(2rem,4vw,3rem)]">
              <h3
                className="font-display font-extrabold text-signal leading-none"
                style={{ fontSize: "clamp(2rem,4.5vw,3.25rem)" }}
              >
                {s.name}
              </h3>
              <p className="font-body text-[0.95rem] text-signal leading-[1.45]">{s.tagline}</p>
              <p className="font-body font-light text-[0.875rem] text-ash leading-[1.75]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
