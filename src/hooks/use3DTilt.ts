import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function use3DTilt(perspective: number = 1000, maxRotation: number = 5) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        gsap.set(element, { transformPerspective: perspective, transformStyle: "preserve-3d" });

        const xTo = gsap.quickTo(element, "rotationY", { duration: 0.5, ease: "power2.out" });
        const yTo = gsap.quickTo(element, "rotationX", { duration: 0.5, ease: "power2.out" });

        const handleMouseMove = (e: MouseEvent) => {
            const { left, top, width, height } = element.getBoundingClientRect();
            const x = (e.clientX - left) / width - 0.5; // -0.5 to 0.5
            const y = (e.clientY - top) / height - 0.5; // -0.5 to 0.5

            xTo(x * maxRotation * 2);
            yTo(-y * maxRotation * 2);
        };

        const handleMouseLeave = () => {
            xTo(0);
            yTo(0);
        };

        element.addEventListener("mousemove", handleMouseMove);
        element.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            element.removeEventListener("mousemove", handleMouseMove);
            element.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [perspective, maxRotation]);

    return { ref };
}
