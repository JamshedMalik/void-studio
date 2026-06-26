"use client"

import { WebGLShader } from "@/components/ui/web-gl-shader"
import { LiquidButton } from "@/components/ui/liquid-glass-button"

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-dvh w-full flex-col items-center justify-center overflow-hidden"
    >
      {/* WebGL shader fills the viewport as fixed background */}
      <WebGLShader />

      {/* Content card — narrow double-border frame, void fills the sides */}
      <div className="relative z-10 p-[6px] w-full mx-auto max-w-[520px] border border-white/[0.08]">
        <div className="relative border border-white/[0.05] py-12 px-8 overflow-hidden">
          <h1 className="mb-5 text-white text-center font-display font-extrabold tracking-[-0.03em] leading-[1.05] text-[clamp(2rem,5vw,3.25rem)]">
            Before your brand,<br />there is a void.
          </h1>

          <p className="text-white/50 text-center text-sm max-w-[34ch] mx-auto leading-relaxed">
            We design the logos, websites, and brand systems<br className="hidden sm:inline" /> that give companies their face.
          </p>

          {/* Availability indicator */}
          <div className="mt-7 mb-6 flex items-center justify-center gap-2">
            <span className="relative flex h-2.5 w-2.5 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500" />
            </span>
            <p className="text-[0.7rem] text-green-500 font-mono tracking-[0.1em]">Taking select clients</p>
          </div>

          <div className="flex justify-center">
            <LiquidButton
              className="text-white/90 border border-white/15 rounded-full text-sm"
              size="lg"
              onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
            >
              See Our Work
            </LiquidButton>
          </div>
        </div>
      </div>
    </section>
  )
}
