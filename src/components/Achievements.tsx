import React from 'react';
import { Trophy, Star, Lightbulb } from 'lucide-react';
import { useGSAPScroll, useGSAPStagger } from '../hooks/useGSAPScroll';

export default function Achievements() {
    const content = {
        title: "Achievements",
        subtitle: "Milestones and recognitions along the journey.",
        hackathonTitle: "1st Place Winner – Hackathon conducted by CodeTerriers",
        hackathonDesc: "Developed a web-based blood donation system concept focused on quick response, donor-recipient matching, and emergency problem solving.",
        startupTitle: "Top 10 Finalists – Technospark Startup Competition",
        startupDesc: "Proposed Solomate, a startup application concept connecting solo travelers for safer and more social travel experiences."
    };

    const t = content;

    const achievementsData = [
        {
            title: t.hackathonTitle,
            desc: t.hackathonDesc,
            icon: <Trophy size={16} className="text-yellow-500" />,
            tagInfo: "HONORS & AWARDS",
            img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1000&auto=format&fit=crop",
        },
        {
            title: t.startupTitle,
            desc: t.startupDesc,
            icon: <Lightbulb size={16} className="text-blue-500" />,
            tagInfo: "STARTUP COMPETITION",
            img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop",
        }
    ];

    function AchievementCard({ a }: { a: any }) {
        return (
            <div className="group relative rounded-3xl overflow-hidden border border-gray-800 w-full h-[300px] md:h-full">
                <img src={a.img} alt={a.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent flex flex-col justify-end p-5 md:p-8 pointer-events-none">
                    <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 mb-3 -translate-y-2 group-hover:translate-y-0">
                        <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                            {a.icon}
                            <span className="text-[10px] sm:text-xs font-mono font-semibold tracking-wider text-white select-none">{a.tagInfo}</span>
                        </div>
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-white select-none">{a.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200 line-clamp-3 select-none">{a.desc}</p>
                </div>
            </div>
        );
    }

    const titleRef = useGSAPScroll();
    const listRef = useGSAPStagger();

    return (
        <section id="achievements" className="py-20 relative">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-64 bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

            <div ref={titleRef} className="text-center mb-16">
                <div className="inline-flex items-center justify-center space-x-2 bg-yellow-500/10 border border-yellow-500/20 px-4 py-2 rounded-full mb-4">
                    <Trophy size={16} className="text-yellow-500" />
                    <span className="text-xs font-mono text-yellow-500 tracking-wider">HONORS & AWARDS</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-3">{t.title}</h2>
                <p className="text-gray-400">{t.subtitle}</p>
            </div>

            <div ref={listRef} className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 px-4 md:px-0 auto-rows-auto lg:auto-rows-[300px]">
                {achievementsData.map((a, i) => (
                    <AchievementCard key={i} a={a} />
                ))}
            </div>
        </section>
    );
}
