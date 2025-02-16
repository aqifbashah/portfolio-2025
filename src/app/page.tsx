import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/exprience/Exprience";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
export default function Home() {
  return (
    <div className="flex flex-col gap-4 bg-white p-8 transition-all dark:bg-gray-900">
      <section>
        <Hero />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Experience />
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <Contact />
      </section>
    </div>
  );
}
