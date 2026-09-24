import "./App.css"
import Navbar from "./components/navbar"
import Hero from "./components/hero"
import Services from "./components/services"
import About from "./components/About"
import Testimonials from "./components/testimonials"
import CTA from "./components/cta"
import Contact from "./components/contact"
import Footer from "./components/footer"
function App () {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </div>
  )
}
export default App