import Hero from "./components/Hero";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="min-h-screen bg-ink">
      <Hero />
      <About />
      <Timeline />
      <Experience />
      <Projects />
      <Skills />
      <Interests />
      <Footer />
    </main>
  );
}
