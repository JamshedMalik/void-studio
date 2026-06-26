"use client"

import { useEffect, useState } from "react"

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-400 ${
        scrolled
          ? "py-4 bg-[rgba(11,11,18,0.88)] backdrop-blur-[14px] border-b border-white/[0.06]"
          : "py-6"
      }`}
    >
      {/* Inner container aligns with page content width */}
      <div className="container-main flex items-center justify-between">
        <a
          href="#"
          className="font-display font-bold text-[0.85rem] tracking-[0.14em] text-signal uppercase relative z-[101]"
          aria-label="Void Studio — home"
        >
          VOID STUDIO
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          <a href="#work"     className="font-body text-[0.875rem] text-ash hover:text-signal transition-colors">Work</a>
          <a href="#services" className="font-body text-[0.875rem] text-ash hover:text-signal transition-colors">Services</a>
          <a href="#about"    className="font-body text-[0.875rem] text-ash hover:text-signal transition-colors">About</a>
          <a
            href="#contact"
            className="font-body text-[0.8rem] font-medium text-void bg-signal px-5 py-2 rounded-full hover:opacity-80 transition-opacity"
          >
            Start a Project
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1 relative z-[101]"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(o => !o)}
        >
          <span
            className={`block w-[22px] h-[1.5px] bg-signal transition-transform duration-300 ${
              menuOpen ? "translate-y-[6.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block w-[22px] h-[1.5px] bg-signal transition-transform duration-300 ${
              menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 z-[100] bg-void flex flex-col items-center justify-center gap-9">
          {(["#work", "#services", "#about"] as const).map((href, i) => (
            <a
              key={i}
              href={href}
              onClick={closeMenu}
              className="font-display font-bold text-[1.75rem] text-signal tracking-[-0.01em]"
            >
              {href.slice(1).charAt(0).toUpperCase() + href.slice(2)}
            </a>
          ))}
          <a
            href="#contact"
            onClick={closeMenu}
            className="font-body font-medium text-void bg-signal px-7 py-3 rounded-full"
          >
            Start a Project
          </a>
        </div>
      )}
    </nav>
  )
}
