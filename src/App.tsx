import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const glowRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Initial fade in
    gsap.from(mainRef.current, {
      opacity: 0,
      duration: 1.5,
      ease: "power2.out"
    });
  }, { scope: mainRef });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(255,255,255,0.06), transparent 40%)`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={mainRef} className="min-h-screen bg-[#030303] text-white font-sans selection:bg-blue-500/30 relative overflow-hidden w-full m-0 p-0">
      {/* Mouse Glow Effect */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      />

      {/* Background Gradients */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px]"></div>
        <div className="absolute top-[20%] right-[-10%] w-[30%] h-[40%] rounded-full bg-purple-900/20 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] rounded-full bg-emerald-900/10 blur-[120px]"></div>
      </div>

      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24">
        <Navbar />
        <main className="w-full overflow-x-hidden">
          <Hero />
          <About />
          <Education />
          <TechStack />
          <Projects />
          <Achievements />
          <Certifications />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;
