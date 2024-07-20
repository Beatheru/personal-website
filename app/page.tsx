import About from "@/components/About";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Projects />
      <Experience />
    </main>
  );
}
