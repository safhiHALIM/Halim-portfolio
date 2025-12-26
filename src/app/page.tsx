import Hero from "@/sections/Hero";
import About from "@/sections/About";
import TrustedBy from "@/sections/TrustedBy";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <TrustedBy />
      <Contact />
    </main>
  );
}
