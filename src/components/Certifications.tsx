import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { useGSAPScroll } from '../hooks/useGSAPScroll';

export default function Certifications() {
    const content = {
        title: "Licenses & Certifications",
        subtitle: "Professional portals and verified credentials.",
        viewCredential: "View Credential"
    };

    const t = content;
    const containerRef = useGSAPScroll();

    const certifications = [
        {
            provider: "Microsoft",
            name: "Microsoft Certified Professional",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png",
            link: "https://www.linkedin.com/in/arkeshak/details/certifications/",
            gradient: "from-blue-500/20 to-cyan-500/5"
        },
        {
            provider: "Google",
            name: "Google Career Certificates",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png",
            link: "https://www.linkedin.com/in/arkeshak/details/certifications/",
            gradient: "from-yellow-500/20 to-green-500/5"
        },
        {
            provider: "Microsoft Azure",
            name: "Azure Fundamentals",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/1024px-Microsoft_Azure_Logo.svg.png",
            link: "https://www.linkedin.com/in/arkeshak/details/certifications/",
            gradient: "from-blue-600/20 to-purple-600/5"
        }
    ];

    return (
        <section id="certifications" className="py-20 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-900/10 blur-[120px] rounded-full -z-10 pointer-events-none" />

            <div ref={containerRef} className="space-y-12 px-4 md:px-0">
                <div className="text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 tracking-tight">{t.title}</h2>
                    <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto">{t.subtitle}</p>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {certifications.map((cert, index) => (
                        <motion.a
                            key={index}
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group relative overflow-hidden rounded-3xl bg-[#0a0a0a] border border-gray-800 p-8 flex flex-col items-center justify-center min-h-[250px] transition-all duration-500 hover:-translate-y-2 hover:border-gray-600`}
                        >
                            {/* Background Gradient Portal Effect */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                            <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/5 rounded-2xl flex items-center justify-center p-3 sm:p-4 backdrop-blur-sm border border-white/10 group-hover:scale-110 transition-transform duration-500">
                                    <img src={cert.logo} alt={cert.provider} className="w-full h-full object-contain drop-shadow-lg" />
                                </div>

                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{cert.provider}</h3>
                                    <p className="text-xs sm:text-sm text-gray-400">{cert.name}</p>
                                </div>

                                <div className="pt-4 flex items-center space-x-2 text-xs sm:text-sm font-medium text-gray-500 group-hover:text-white transition-colors">
                                    <span>{t.viewCredential}</span>
                                    <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
