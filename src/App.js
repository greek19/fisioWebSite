import React, { useState, useEffect } from 'react';
import {Navbar} from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Services from "./components/Services";

export default function App() {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(()=>{
        const sections = document.querySelectorAll('section[id]');
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach(entry => {
                if (entry.isIntersecting) setActiveSection(entry.target.id);
            });
        }, { root: null, rootMargin: '-40% 0px -40% 0px', threshold: 0 });

        sections.forEach(s => observer.observe(s));
        return () => observer.disconnect();
    },[]);

    return (
        <div>
            <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
            <main>
                <Hero />
                <About />
                <Services />
                <Testimonials />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}