export function About() {
  return (
    <section id="about" className="bg-matter relative z-10 section-y">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(3rem,7vw,7rem)] items-center">

          {/* Pull quote */}
          <blockquote
            className="font-display font-bold text-signal italic leading-[1.2]"
            style={{ fontSize: "clamp(1.5rem,3.5vw,2.75rem)" }}
          >
            "Great brands don&apos;t<br />describe themselves.<br />They appear."
          </blockquote>

          {/* Body copy */}
          <div className="flex flex-col gap-5">
            <span className="eyebrow mb-1">About the Studio</span>
            <p className="font-body font-light text-[0.925rem] text-ash leading-[1.8]">
              Void Studio is a design practice built on the belief that clarity is the rarest luxury.
              We work with founders and creative directors who understand that a brand is not a logo
              — it is every decision made visible.
            </p>
            <p className="font-body font-light text-[0.925rem] text-ash leading-[1.8]">
              Our process is direct. We ask uncomfortable questions, present one direction at a time,
              and finish what we start. If you&apos;re looking for a studio that shows you forty options,
              we&apos;re not it. If you want one that finds the right answer, we might be.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
