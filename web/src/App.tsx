import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Experience } from "./sections/Experience";
import { Education } from "./sections/Education";
import { Projects } from "./sections/Projects";
import { Achievements } from "./sections/Achievements";
import { Contact } from "./sections/Contact";

function App() {
  return (
    <div className="relative bg-cream text-ink">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}

export default App;
