import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export function useGSAPScroll(config: gsap.TweenVars = {}, triggerConfig: ScrollTrigger.Vars = {}) {
    const ref = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!ref.current) return;

        gsap.from(ref.current, {
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ref.current,
                start: "top 85%",
                toggleActions: "play none none reverse",
                ...triggerConfig
            },
            ...config
        });
    }, { scope: ref });

    return ref;
}

export function useGSAPStagger() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!containerRef.current) return;

        const elements = containerRef.current.children;

        gsap.from(elements, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 85%",
                toggleActions: "play none none none"
            }
        });
    }, { scope: containerRef });

    return containerRef;
}
