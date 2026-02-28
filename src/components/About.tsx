import React, { useRef } from 'react';
import { Download } from 'lucide-react';
import { useGSAPScroll } from '../hooks/useGSAPScroll';
import HangingIDCard from './animations/HangingIDCard';

export default function About() {
  const content = {
    title: "About Me",
    subtitle: "Blending code logic with design aesthetics.",
    desc1: "IT Undergraduate currently pursuing BSc (Hons) in Information Technology at University of Kelaniya, Sri Lanka. Interested in web development, cloud-based systems, and software testing.",
    desc2: "Experienced in academic projects and real client projects. Strong interest in learning, analytical thinking, and problem solving. Comfortable working independently and collaborating in professional environments.",
    exp: "IN LEARNING",
    proj: "PROJECTS DONE",
    clients: "HAPPY CLIENTS",
    cv: "Download CV"
  };
  const containerRef = useGSAPScroll();

  return (
    <section id="about" className="py-12 md:py-20">
      <div ref={containerRef} className="bg-[#0a0a0a] border border-gray-800 rounded-3xl p-6 sm:p-8 md:p-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          <div className="w-full lg:w-1/3 relative flex justify-center order-1 lg:order-none">
            <HangingIDCard
              image="/profile.png"
              name="Arkeshkar Prashanthkumar"
              role="IT Undergraduate"
            />
          </div>

          <div className="w-full lg:w-2/3 space-y-6 md:space-y-8 order-2 lg:order-none text-center lg:text-left">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">{content.title}</h2>
              <p className="text-gray-400 italic">{content.subtitle}</p>
            </div>

            <div className="space-y-4 text-gray-300 leading-relaxed text-sm md:text-base mx-auto lg:mx-0 max-w-2xl">
              <p>{content.desc1}</p>
              <p>{content.desc2}</p>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-6 border-t border-gray-800 justify-items-center lg:justify-items-start">
              <div className="text-center lg:text-left">
                <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">2019</h4>
                <p className="text-xs text-gray-500 uppercase tracking-wider">{content.exp}</p>
              </div>
              <div className="text-center lg:text-left">
                <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">5+</h4>
                <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider">{content.proj}</p>
              </div>
              <div className="text-center lg:text-left">
                <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">2+</h4>
                <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider">{content.clients}</p>
              </div>
            </div>

            <a href="/cv.pdf" download className="px-6 py-3 border border-gray-700 text-white font-medium rounded-full hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2 w-full sm:w-fit mx-auto lg:mx-0">
              <span>{content.cv}</span>
              <Download size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
