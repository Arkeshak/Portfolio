import React from 'react';
import { useGSAPScroll, useGSAPStagger } from '../hooks/useGSAPScroll';

const codingData = [
  { name: 'React', desc: 'FRONTEND LIB', icon: '⚛️', color: 'text-blue-400' },
  { name: 'Next.js', desc: 'WEB FRAMEWORK', icon: '▲', color: 'text-white' },
  { name: 'Tailwind', desc: 'CSS FRAMEWORK', icon: '🌊', color: 'text-cyan-400' },
  { name: 'Node.js', desc: 'BACKEND RUNTIME', icon: '🟩', color: 'text-green-500' },
  { name: 'Python', desc: 'DATA & SCRIPTING', icon: '🐍', color: 'text-yellow-400' },
  { name: 'Firebase', desc: 'BACKEND SERVICE', icon: '🔥', color: 'text-yellow-500' },
  { name: 'MongoDB', desc: 'NOSQL DATABASE', icon: '🍃', color: 'text-green-400' },
  { name: 'MySQL', desc: 'RELATIONAL DB', icon: '🐬', color: 'text-blue-500' },
  { name: 'Android Studio', desc: 'MOBILE DEV', icon: '🤖', color: 'text-green-500' },
  { name: 'VS Code', desc: 'CODE EDITOR', icon: '💻', color: 'text-blue-500' },
  { name: 'Git / GitHub', desc: 'VERSION CONTROL', icon: '🐙', color: 'text-gray-300' },
];

const editingData = [
  { name: 'Figma', desc: 'UI/UX DESIGN', icon: '🎨', color: 'text-pink-500' },
  { name: 'Photoshop', desc: 'IMAGE EDITING', icon: '🖼️', color: 'text-blue-600' },
  { name: 'Lightroom', desc: 'COLOR GRADING', icon: '📸', color: 'text-blue-400' },
  { name: 'Illustrator', desc: 'VECTOR ART', icon: '✒️', color: 'text-orange-500' },
  { name: 'Canva', desc: 'LAYOUT DESIGN', icon: '🖌️', color: 'text-cyan-500' },
  { name: 'Sketch', desc: 'PROTOTYPING', icon: '💎', color: 'text-yellow-400' },
  { name: 'After Effects', desc: 'MOTION VFX', icon: '✨', color: 'text-purple-400' },
  { name: 'CapCut', desc: 'MOBILE EDITING', icon: '✂️', color: 'text-white' },
  { name: 'Audition', desc: 'AUDIO MIXING', icon: '🎧', color: 'text-green-500' },
  { name: 'OBS Studio', desc: 'STREAMING', icon: '🎥', color: 'text-gray-300' },
];

export default function TechStack() {
  const titleRef = useGSAPScroll();
  const codingContainerRef = useGSAPStagger();
  const editingContainerRef = useGSAPStagger();

  return (
    <section className="py-20 space-y-16">
      <div ref={titleRef} className="text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Tech & Creative Stack</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          The tools, languages, and software I use to build and design.
        </p>
      </div>

      {/* Coding Section */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold border-l-4 border-blue-500 pl-4">Development & Engineering</h3>
        <div ref={codingContainerRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
          {codingData.map((tech, i) => (
            <div key={i} className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:bg-[#111] transition-colors group">
              <div className={`text-3xl mb-3 ${tech.color} group-hover:scale-110 transition-transform`}>
                {tech.icon}
              </div>
              <h4 className="font-semibold text-sm mb-1">{tech.name}</h4>
              <p className="text-[10px] text-gray-500 tracking-wider font-mono uppercase">{tech.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Editing & Creativity Section */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold border-l-4 border-pink-500 pl-4">Design & Creativity</h3>
        <div ref={editingContainerRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
          {editingData.map((tech, i) => (
            <div key={i} className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:bg-[#111] transition-colors group">
              <div className={`text-3xl mb-3 ${tech.color} group-hover:scale-110 transition-transform`}>
                {tech.icon}
              </div>
              <h4 className="font-semibold text-sm mb-1">{tech.name}</h4>
              <p className="text-[10px] text-gray-500 tracking-wider font-mono uppercase">{tech.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
