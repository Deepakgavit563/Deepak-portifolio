import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import SmoothScroll from "./components/SmoothScroll";
export default function Home() {
  return (
    <>
    <SmoothScroll>
    <Navbar />
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
    </SmoothScroll>
    </>
  );
}