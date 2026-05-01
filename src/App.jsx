import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoIntro from './components/VideoIntro';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      {/* Background glowing orbs */}
      <div className="bg-glow" style={{ top: '-10%', left: '-10%', width: '40vw', height: '40vw', background: 'rgba(212, 175, 55, 0.15)' }}></div>
      <div className="bg-glow" style={{ top: '40%', right: '-20%', width: '50vw', height: '50vw', background: 'rgba(59, 130, 246, 0.1)' }}></div>
      <div className="bg-glow" style={{ bottom: '-10%', left: '10%', width: '30vw', height: '30vw', background: 'rgba(212, 175, 55, 0.1)' }}></div>

      <Navbar />
      <main>
        <Hero />
        <VideoIntro />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
