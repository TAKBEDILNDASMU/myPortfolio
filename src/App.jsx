import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Contact from "./sections/Contact"
import Portfolio from "./sections/Portfolio"
import Footer from "./sections/Footer"

export default function App() {
  return (
    <div className="bg-primary text-white relative">
      <Navbar />
      <section className="w-full">
        <Hero />
      </section>
      <section className="bg-radial text-black">
        <About />
        <Skills />
      </section>
      <section className="">
        <Portfolio />
      </section>
      <section className="bg-radial text-black">
        <Contact />
      </section>
      <section className="bg-black">
        <Footer />
      </section>
    </div>
  )
}
