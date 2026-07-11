import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import HowWork from "./components/HowWork";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -55%" },
    );

    document
      .querySelectorAll("main section[id]")
      .forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Vai al contenuto
      </a>
      <Navbar activeSection={activeSection} />
      <main id="main-content">
        <Hero />
        <About />
        <HowWork />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
