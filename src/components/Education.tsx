import React from 'react';
import { GraduationCap, Award, BookOpen, Medal } from 'lucide-react';
import { useGSAPScroll, useGSAPStagger } from '../hooks/useGSAPScroll';

export default function Education() {
    const content = {
        title: "Education",
        subtitle: "My academic journey and qualifications.",
        uni: "University of Kelaniya, Sri Lanka",
        degree: "BSc (Hons) in Information Technology",
        uniDate: "March 2024 – Present",
        uniDesc: "Currently pursuing my undergraduate degree, focusing on core IT concepts, software development, and systems engineering.",
        british: "British Council",
        britishDegree: "English Language Course",
        britishDate: "Aug 2023 – Dec 2023",
        britishDesc: "Completed an English language program to enhance communication and language proficiency.",
        esoft: "ESOFT Metro Campus",
        esoftDegree: "Diploma in Information Technology (Batch Topper)",
        esoftDate: "Aug 2019 – Feb 2020",
        esoftDesc: "Completed with outstanding academic performance, building a strong foundation in core IT principles.",
        school: "Highlands College, Hatton",
        al: "G.C.E Advanced Level (2022/2023) - Biological Science Stream",
        ol: "G.C.E Ordinary Level (2019)",
        schoolDate: "2010 – 2023",
        schoolDesc: "Completed primary and secondary education with a strong foundation in biological sciences."
    };
    const titleRef = useGSAPScroll();
    const listRef = useGSAPStagger();

    return (
        <section id="education" className="py-20">
            <div ref={titleRef} className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-3">{content.title}</h2>
                <p className="text-gray-400">{content.subtitle}</p>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-0">
                <div ref={listRef} className="relative border-l border-gray-800 ml-4 sm:ml-8 md:ml-0 md:pl-8 space-y-12">

                    {/* University */}
                    <div className="relative pl-6 sm:pl-8 md:pl-0">
                        <div className="absolute -left-[37px] sm:-left-[41px] md:-left-[41px] top-1 w-8 h-8 sm:w-10 sm:h-10 bg-[#0a0a0a] border border-gray-800 rounded-full flex items-center justify-center text-pink-500 z-10">
                            <GraduationCap size={18} className="sm:w-[20px] sm:h-[20px]" />
                        </div>
                        <div className="bg-[#0a0a0a] border border-gray-800 p-5 sm:p-6 md:p-8 rounded-2xl hover:border-gray-600 transition-colors group">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold group-hover:text-pink-400 transition-colors">{content.degree}</h3>
                                    <h4 className="text-lg text-gray-300 mt-1">{content.uni}</h4>
                                </div>
                                <span className="text-sm font-mono text-gray-500 bg-white/5 px-3 py-1 rounded-full w-fit">
                                    {content.uniDate}
                                </span>
                            </div>
                            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                {content.uniDesc}
                            </p>
                        </div>
                    </div>

                    {/* British Council */}
                    <div className="relative pl-6 sm:pl-8 md:pl-0">
                        <div className="absolute -left-[37px] sm:-left-[41px] md:-left-[41px] top-1 w-8 h-8 sm:w-10 sm:h-10 bg-[#0a0a0a] border border-gray-800 rounded-full flex items-center justify-center text-purple-500 z-10">
                            <BookOpen size={18} className="sm:w-[20px] sm:h-[20px]" />
                        </div>
                        <div className="bg-[#0a0a0a] border border-gray-800 p-5 sm:p-6 md:p-8 rounded-2xl hover:border-gray-600 transition-colors group">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold group-hover:text-purple-400 transition-colors">{content.britishDegree}</h3>
                                    <h4 className="text-lg text-gray-300 mt-1">{content.british}</h4>
                                </div>
                                <span className="text-sm font-mono text-gray-500 bg-white/5 px-3 py-1 rounded-full w-fit">
                                    {content.britishDate}
                                </span>
                            </div>
                            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                {content.britishDesc}
                            </p>
                        </div>
                    </div>

                    {/* ESOFT */}
                    <div className="relative pl-6 sm:pl-8 md:pl-0">
                        <div className="absolute -left-[37px] sm:-left-[41px] md:-left-[41px] top-1 w-8 h-8 sm:w-10 sm:h-10 bg-[#0a0a0a] border border-gray-800 rounded-full flex items-center justify-center text-yellow-500 z-10">
                            <Medal size={18} className="sm:w-[20px] sm:h-[20px]" />
                        </div>
                        <div className="bg-[#0a0a0a] border border-gray-800 p-5 sm:p-6 md:p-8 rounded-2xl hover:border-gray-600 transition-colors group">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold group-hover:text-yellow-400 transition-colors">{content.esoftDegree}</h3>
                                    <h4 className="text-lg text-gray-300 mt-1">{content.esoft}</h4>
                                </div>
                                <span className="text-sm font-mono text-gray-500 bg-white/5 px-3 py-1 rounded-full w-fit">
                                    {content.esoftDate}
                                </span>
                            </div>
                            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                {content.esoftDesc}
                            </p>
                        </div>
                    </div>

                    {/* School */}
                    <div className="relative pl-6 sm:pl-8 md:pl-0">
                        <div className="absolute -left-[37px] sm:-left-[41px] md:-left-[41px] top-1 w-8 h-8 sm:w-10 sm:h-10 bg-[#0a0a0a] border border-gray-800 rounded-full flex items-center justify-center text-blue-500 z-10">
                            <Award size={18} className="sm:w-[20px] sm:h-[20px]" />
                        </div>
                        <div className="bg-[#0a0a0a] border border-gray-800 p-5 sm:p-6 md:p-8 rounded-2xl hover:border-gray-600 transition-colors group">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold group-hover:text-blue-400 transition-colors">{content.school}</h3>
                                    <ul className="text-gray-300 mt-2 space-y-1 list-disc list-inside">
                                        <li>{content.al}</li>
                                        <li>{content.ol}</li>
                                    </ul>
                                </div>
                                <span className="text-sm font-mono text-gray-500 bg-white/5 px-3 py-1 rounded-full w-fit">
                                    {content.schoolDate}
                                </span>
                            </div>
                            <p className="text-gray-400 leading-relaxed text-sm md:text-base mt-4">
                                {content.schoolDesc}
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
