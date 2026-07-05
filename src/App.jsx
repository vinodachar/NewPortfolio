/*
 * ============================================================
 *  Vinod B — personal portfolio (single page)
 *  NOTE: Replace placeholder stat numbers with live data
 *  before launch.
 *  - Stat numbers: src/components/Stats.jsx + ContentWork.jsx
 * ============================================================
 */
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import ContentWork from "./components/ContentWork.jsx";
import Stats from "./components/Stats.jsx";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ContentWork />
        <Stats />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
