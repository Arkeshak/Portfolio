import React from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { useGSAPScroll } from '../hooks/useGSAPScroll';

export default function Contact() {
  const content = {
    title: "Let's Connect",
    subtitle: "I am always open to new projects or just a chat. Send your signal.",
    status: "SYSTEM STATUS: ONLINE",
    email: "EMAIL ME",
    chat: "PHONE NUMBER",
    formTitle: "SEND A MESSAGE",
    name: "Your Name",
    emailField: "Your Email",
    msg: "Your Message",
    send: "Send Message"
  };

  const t = content;
  const titleRef = useGSAPScroll();
  const formRef = useGSAPScroll();

  return (
    <section id="contact" className="py-20">
      <div ref={titleRef} className="text-center mb-10 md:mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">{t.title}</h2>
        <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto">{t.subtitle}</p>
      </div>

      <div ref={formRef} className="flex flex-col lg:flex-row gap-6 md:gap-8 max-w-6xl mx-auto">
        <div className="w-full lg:w-1/3 space-y-4">
          <div className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-5 md:p-6 flex items-center space-x-4">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <p className="text-xs font-mono tracking-widest text-gray-400">{t.status}</p>
          </div>

          <div className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-5 md:p-6 flex items-center space-x-4 hover:border-gray-600 transition-colors cursor-pointer">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 rounded-full flex items-center justify-center text-gray-400 shrink-0">
              <Mail size={18} className="md:w-[20px] md:h-[20px]" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] md:text-xs font-mono tracking-widest text-gray-500 mb-1 truncate">{t.email}</p>
              <p className="font-medium text-xs md:text-sm truncate">arkeshak2003@gmail.com</p>
            </div>
          </div>

          <div className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-5 md:p-6 flex items-center space-x-4 hover:border-gray-600 transition-colors cursor-pointer">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 rounded-full flex items-center justify-center text-gray-400 shrink-0">
              <MessageSquare size={18} className="md:w-[20px] md:h-[20px]" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] md:text-xs font-mono tracking-widest text-gray-500 mb-1 truncate">{t.chat}</p>
              <p className="font-medium text-xs md:text-sm truncate">+94 71 582 3833</p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-2/3 bg-[#0a0a0a] border border-gray-800 rounded-3xl p-6 md:p-8">
          <div className="flex items-center space-x-3 mb-6 md:mb-8">
            <Send size={18} className="text-pink-500 md:w-[20px] md:h-[20px]" />
            <h3 className="font-mono tracking-widest text-xs md:text-sm">{t.formTitle}</h3>
          </div>

          <div className="flex flex-col items-center justify-center space-y-4 md:space-y-6 h-full min-h-[250px] md:min-h-[300px] bg-[#111] rounded-2xl border border-gray-800 p-6 md:p-8 text-center">
            <h4 className="text-lg md:text-xl font-medium text-white">Have a question or want to work together?</h4>
            <p className="text-sm md:text-base text-gray-400 max-w-sm">
              Click the button below to open your default email app and send me a message directly.
            </p>
            <a
              href={`mailto:arkeshak2003@gmail.com?subject=Portfolio Contact`}
              className="px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition-colors flex items-center space-x-2"
            >
              <Mail size={18} />
              <span>{t.send}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
