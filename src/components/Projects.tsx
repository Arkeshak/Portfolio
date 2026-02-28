import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useGSAPScroll, useGSAPStagger } from '../hooks/useGSAPScroll';

export default function Projects() {
  const content = {
    title: "Selected Projects",
    subtitle: "Some works that highlight my expertise.",
    viewAll: "View All Projects"
  };

  const projects = [
    {
      title: "EduZone – Education Management & Donation Platform",
      desc: "A web-based system developed for the Hatton Zonal Education Office to manage school data and coordinate donations between schools and the education office.",
      tags: ["Real-client project", "Frontend dev", "Functional testing"],
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop",
      colSpan: "col-span-1 md:col-span-2",
      rowSpan: "row-span-2"
    },
    {
      title: "HomeFix – Mobile Application for Home Services",
      desc: "A mobile application that allows households to book service providers such as plumbers and electricians.",
      tags: ["User flow validation", "Feature testing", "UI improvements"],
      img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1000&auto=format&fit=crop",
      colSpan: "col-span-1",
      rowSpan: "row-span-1"
    },
    {
      title: "Harvest AI Mind – AI-Based Assistant for Farmers",
      desc: "An AI-powered system for Sri Lankan farmers to identify plant diseases and receive crop recommendations using image-based analysis.",
      tags: ["Image-based detection", "Crop recommendation", "Chatbot"],
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
      colSpan: "col-span-1",
      rowSpan: "row-span-1"
    }
  ];

  function ProjectCard({ p }: { p: any }) {
    return (
      <div className={`group relative rounded-3xl overflow-hidden border border-gray-800 ${p.colSpan} ${p.rowSpan}`}>
        <img src={p.img} alt={p.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent flex flex-col justify-end p-5 md:p-8 pointer-events-none">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{p.title}</h3>
          <p className="text-xs sm:text-sm text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 line-clamp-2 md:line-clamp-none">{p.desc}</p>
          <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
            {p.tags.map((tag: string, j: number) => (
              <span key={j} className="text-[10px] sm:text-xs px-2 sm:px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/10">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const titleRef = useGSAPScroll();
  const listRef = useGSAPStagger();
  const buttonRef = useGSAPScroll();

  return (
    <section id="projects" className="py-20">
      <div ref={titleRef} className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">{content.title}</h2>
        <p className="text-gray-400">{content.subtitle}</p>
      </div>

      <div ref={listRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]">
        {projects.map((p, i) => (
          <ProjectCard key={i} p={p} />
        ))}
      </div>

      <div ref={buttonRef} className="mt-12 flex justify-center">
        <a href="https://github.com/Arkeshak" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-gray-700 text-white font-medium rounded-full hover:bg-gray-800 transition-colors flex items-center space-x-2">
          <span>{content.viewAll}</span>
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}
