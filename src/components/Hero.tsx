import React, { useRef } from 'react';
import { Github, Linkedin, Instagram, Mail, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useMagneticHover } from '../hooks/useMagneticHover';

export default function Hero() {
  const content = {
    greeting: "HELLO, I AM",
    role: "IT Undergraduate | Aspiring Web Developer",
    desc: "Motivated IT undergraduate with experience in web applications, cloud-based systems, and real-client projects. Passionate about learning, problem-solving, and building practical digital solutions.",
    viewProjects: "View Projects",
    contactMe: "Contact Me"
  };

  const imageSrc = "/profile1.png";

  const heroRef = useRef<HTMLElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const { ref: btn1Ref } = useMagneticHover(0.3);
  const { ref: btn2Ref } = useMagneticHover(0.3);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(".hero-text-item", {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      delay: 0.2
    })
      .from(imageRef.current, {
        opacity: 0,
        scale: 0.95,
        y: 30,
        duration: 1.2,
        ease: "power2.out"
      }, "-=0.8");
  }, { scope: heroRef });

  return (
    <section id="home" ref={heroRef} className="py-12 md:py-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-12">
      <div className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left" ref={textContainerRef}>
        <div className="space-y-4 hero-text-item">
          <p className="text-xs md:text-sm font-semibold tracking-widest text-gray-400 uppercase">{content.greeting}</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tighter">
            Arkeshkar<br className="hidden sm:block" /> Prashanthkumar
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-medium">{content.role}</p>
        </div>

        <div className="flex items-center justify-center lg:justify-start space-x-6 text-gray-400 hero-text-item">
          <a href="https://linkedin.com/in/arkeshak" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:scale-110 transition-all"><Linkedin size={24} /></a>
          <a href="https://github.com/Arkeshak" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:scale-110 transition-all"><Github size={24} /></a>
          <a href="mailto:arkeshak2003@gmail.com" className="hover:text-white hover:scale-110 transition-all"><Mail size={24} /></a>
        </div>

        <p className="max-w-md mx-auto lg:mx-0 text-gray-400 leading-relaxed hero-text-item text-sm md:text-base">
          {content.desc}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 hero-text-item w-full sm:w-auto">
          <a ref={btn1Ref as any} href="#projects" className="w-full sm:w-auto px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2">
            <span>{content.viewProjects}</span>
            <ArrowRight size={18} />
          </a>
          <a ref={btn2Ref as any} href="#contact" className="w-full sm:w-auto px-8 py-4 border border-gray-700 text-white font-semibold rounded-full hover:bg-gray-800 transition-colors flex items-center justify-center">
            {content.contactMe}
          </a>
        </div>
      </div>

      <div ref={imageRef} className="flex-1 flex justify-center lg:justify-end w-full mx-auto mb-10 lg:mb-0">
        <div className="relative w-full max-w-[320px] md:max-w-[380px] lg:max-w-[420px] aspect-[3/4] md:aspect-auto md:h-[30rem] lg:h-[32rem] rounded-2xl overflow-hidden border border-gray-800 bg-[#111] p-4 flex flex-col shadow-2xl">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-lg">Arkeshkar Prashanthkumar</h3>
            <span className="text-xs text-gray-500">IT Undergraduate</span>
          </div>
          <div className="flex-1 rounded-xl overflow-hidden relative bg-[#1a1a1a]">
            <AnimatePresence mode="wait">
              <motion.img
                key="profile"
                src={imageSrc}
                alt="Hafidz"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full h-full object-cover absolute inset-0"
              />
            </AnimatePresence>
          </div>
          <div className="mt-4 flex items-center justify-between bg-black/50 p-3 rounded-xl border border-gray-800 relative z-10">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <img src="/profile1.png" alt="Avatar" />
              </div>
              <div>
                <p className="text-xs font-medium">@arkeshak</p>
                <div className="flex items-center space-x-1">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                  <p className="text-[10px] text-gray-400">Online</p>
                </div>
              </div>
            </div>
            <a href="#contact" className="text-xs bg-white text-black px-3 py-1.5 rounded-lg font-medium hover:bg-gray-200 transition-colors">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
