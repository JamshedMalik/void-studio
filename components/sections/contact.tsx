export function Contact() {
  return (
    <section id="contact" className="bg-void relative z-10 section-y text-center">
      <div className="container-main flex flex-col items-center gap-7">
        <h2
          className="font-display font-extrabold text-signal leading-[0.95] tracking-[-0.03em]"
          style={{ fontSize: "clamp(3rem,9vw,8rem)" }}
        >
          Ready<br className="sm:hidden" /> to exist?
        </h2>

        <p className="font-body font-light text-ash leading-[1.75] max-w-[44ch]"
          style={{ fontSize: "clamp(0.9rem,2vw,1.05rem)" }}
        >
          We take on a small number of clients each quarter.{" "}
          <br className="hidden md:inline" />
          If you&apos;re building something worth believing in, let&apos;s talk.
        </p>

        <a
          href="mailto:hello@voidstudio.co"
          className="font-mono text-signal border-b border-surface pb-[0.15rem] tracking-[0.07em] hover:border-signal transition-colors"
          style={{ fontSize: "clamp(0.8rem,1.8vw,1rem)" }}
        >
          hello@voidstudio.co
        </a>
      </div>
    </section>
  )
}
