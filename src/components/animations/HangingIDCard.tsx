import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(Draggable, ScrollTrigger);

interface HangingIDCardProps {
    image: string;
    name: string;
    role: string;
}

export default function HangingIDCard({ image, name, role }: HangingIDCardProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const lanyardRef = useRef<HTMLDivElement>(null);
    const rotationRef = useRef(0);
    const velocityRef = useRef(0);
    const isDraggingRef = useRef(false);

    useEffect(() => {
        if (!cardRef.current || !containerRef.current) return;

        const card = cardRef.current;

        // Initial tilt
        gsap.set(card, { rotation: -2, transformOrigin: "50% 0%" });

        const draggable = Draggable.create(card, {
            type: "rotation",
            trigger: card,
            onDragStart: () => {
                isDraggingRef.current = true;
            },
            onDrag: function () {
                rotationRef.current = this.rotation;
            },
            onDragEnd: function () {
                isDraggingRef.current = false;
                // The physics loop will take over and swing it back
            }
        });

        // Initial Scroll-Triggered Swing
        ScrollTrigger.create({
            trigger: card,
            start: "top 75%",
            once: true,
            onEnter: () => {
                // Kick the rotation to start the swing softly
                rotationRef.current = 4;
                velocityRef.current = 0.25; // gentler initial push
            }
        });

        // Simple Pendulum Physics Simulation
        const gravity = 0.5;
        const friction = 0.96; // slightly more friction to settle faster
        const spring = 0.035; // slightly lower spring tension for a slower swing

        let requestID: number;

        const updatePhysics = () => {
            if (!isDraggingRef.current) {
                // Force towards center (swing back)
                const acceleration = -spring * rotationRef.current;
                velocityRef.current += acceleration;
                velocityRef.current *= friction;
                rotationRef.current += velocityRef.current;

                gsap.set(card, { rotation: rotationRef.current });
            } else {
                // During drag, reset velocity to avoid sudden snaps on release
                velocityRef.current = 0;
            }

            requestID = requestAnimationFrame(updatePhysics);
        };

        requestID = requestAnimationFrame(updatePhysics);

        return () => {
            draggable[0].kill();
            ScrollTrigger.getAll().filter(t => t.vars.trigger === card).forEach(t => t.kill());
            cancelAnimationFrame(requestID);
        };
    }, []);

    return (
        <div ref={containerRef} className="relative w-full flex flex-col items-center pt-24 pb-8 select-none">
            {/* Fixed Anchor Point (Hook/Clip) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-50">
                {/* Silver Hook/Anchor */}
                <div className="w-8 h-8 rounded-full border-4 border-gray-400 bg-[#111] shadow-lg relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent rounded-full" />
                </div>
                {/* Lanyard String Connector */}
                <div ref={lanyardRef} className="w-1 h-24 bg-[#0a0a0a] mx-auto -mt-1 shadow-md shadow-black/50" />
            </div>

            {/* The Interactive ID Card */}
            <div
                ref={cardRef}
                className="relative z-40 cursor-grab active:cursor-grabbing preserve-3d"
                style={{ width: '280px', height: '380px' }}
            >
                {/* Card Body */}
                <div className="w-full h-full bg-[#111] border border-gray-800 rounded-[24px] overflow-hidden shadow-2xl relative flex flex-col">
                    {/* Glossy Texture Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none z-10 opacity-30" />

                    {/* Card Header / Badge Slot */}
                    <div className="h-10 w-full flex justify-center items-center bg-black/40 border-b border-gray-800">
                        <div className="w-12 h-2 bg-black rounded-full shadow-inner" />
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 p-6 flex flex-col items-center text-center">
                        {/* Photo Frame */}
                        <div className="group w-48 h-48 rounded-[20px] overflow-hidden border-2 border-gray-800 bg-black mb-6 transition-all duration-500 shadow-inner">
                            <img
                                src={image}
                                alt={name}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                            />
                        </div>

                        {/* Name & Role */}
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold text-white tracking-tight">{name}</h3>
                            <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">{role}</p>
                        </div>

                        {/* Decorative Chip/Barcode */}
                        <div className="mt-auto w-full flex justify-between items-end opacity-40">
                            <div className="w-10 h-8 bg-gradient-to-tr from-yellow-700/50 to-yellow-500/50 rounded-md border border-yellow-500/20" />
                            <div className="flex space-x-0.5">
                                {[...Array(12)].map((_, i) => (
                                    <div key={i} className="w-0.5 bg-gray-500" style={{ height: `${Math.random() * 20 + 10}px` }} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Subtle Plastic Depth */}
                    <div className="absolute inset-x-0 bottom-0 h-[2px] bg-white/5 blur-[1px]" />
                </div>

                {/* Shadow that moves with rotation */}
                <div className="absolute -z-10 inset-0 translate-y-6 blur-3xl bg-black/60 rounded-full" />
            </div>
        </div>
    );
}
