"use client";
import { useEffect, useState } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/exprience/Exprience";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="flex flex-col gap-4 bg-white px-20 transition-all dark:bg-gray-900">
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
