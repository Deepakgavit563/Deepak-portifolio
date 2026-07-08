import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

import Navbar from "./components/Navbar";
import SmoothScroll from "./components/SmoothScroll";
import CursorGlow from "./components/effects/CursorGlow";
import ScrollProgress from "./components/ui/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CursorGlow />

      {/* Uncomment when you enable Lenis */}
      {/* <SmoothScroll> */}

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      {/* </SmoothScroll> */}
    </>
  );
}