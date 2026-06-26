import { Nav }      from "@/components/nav"
import { Hero }     from "@/components/sections/hero"
import { Ticker }   from "@/components/sections/ticker"
import { Work }     from "@/components/sections/work"
import { Services } from "@/components/sections/services"
import { About }    from "@/components/sections/about"
import { Contact }  from "@/components/sections/contact"
import { Footer }   from "@/components/sections/footer"

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <Work />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
