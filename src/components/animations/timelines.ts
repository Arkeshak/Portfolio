import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const createSignatureTimeline = (
    container: HTMLElement,
    pen: SVGGElement,
    cap: SVGGElement,
    body: SVGGElement,
    path: SVGPathElement,
    signature: SVGPathElement
) => {
    const length = path.getTotalLength();
    const sigLength = signature ? signature.getTotalLength() : 0;

    // Initial State: Pen is closed and centered in Hero
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
    if (signature) gsap.set(signature, { strokeDasharray: sigLength, strokeDashoffset: sigLength });

    // Start at a natural "Hero" position (near name, perfectly vertical)
    gsap.set(pen, { x: 200, y: 300, rotation: 0, scale: 1, opacity: 1 });
    gsap.set(cap, { y: 0, x: 0, rotation: 0, opacity: 1 });
    gsap.set(body, { y: 0, opacity: 1 });

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "+=1500",
            scrub: 1.2,
        }
    });

    // Phase 1: Hero (0 - 20%) - Cap stays ON. Subtle drift.
    tl.to(pen, { y: 350, duration: 1 }, 0);

    // Phase 2: Uncap (20 - 30%) - Realistic separation
    tl.to(cap, {
        y: -150,
        x: 60,
        rotation: -25,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut"
    }, 1); // Starts after Phase 1

    // Phase 3: Journey (30 - 85%)
    tl.to(path, {
        strokeDashoffset: 0,
        duration: 5,
        ease: "none",
        onUpdate: function () {
            const p = this.progress();
            const currentPoint = path.getPointAtLength(length * p);
            const nextPoint = path.getPointAtLength(Math.min(length, length * p + 5));
            const angle = Math.atan2(nextPoint.y - currentPoint.y, nextPoint.x - currentPoint.x) * 180 / Math.PI;

            // Crucial: Calculate viewport-relative Y by subtracting scroll
            // Since viewBox for pen is 1000x1000, we map document scroll to that
            const scrollY = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const viewBoxY = (currentPoint.y - scrollY) * (1000 / window.innerHeight);

            if (p > 0.05) {
                // Keep the pen semi-vertical for more realism, only tilting slightly with the path
                const subtleAngle = (angle + 90) * 0.4;

                gsap.to(pen, {
                    x: currentPoint.x,
                    y: viewBoxY,
                    rotation: subtleAngle,
                    scale: 0.9,
                    duration: 0.1,
                    overwrite: 'auto'
                });
            }
        }
    }, 2);

    // Phase 4: Signature (85 - 100%)
    if (signature) {
        tl.to(signature, {
            strokeDashoffset: 0,
            duration: 1.5,
            ease: "power1.inOut",
            onUpdate: function () {
                const p = this.progress();
                const currentPoint = signature.getPointAtLength(sigLength * p);
                const nextPoint = signature.getPointAtLength(Math.min(sigLength, sigLength * p + 1));
                const angle = Math.atan2(nextPoint.y - currentPoint.y, nextPoint.x - currentPoint.x) * 180 / Math.PI;

                const scrollY = window.scrollY;
                // The signature is translated by (450, 6400) in the scrolling SVG
                const absoluteX = currentPoint.x + 700;
                const absoluteY = currentPoint.y + 1200;
                const viewBoxY = (absoluteY - scrollY) * (1000 / window.innerHeight);

                const pressure = 1.0 + Math.sin(p * Math.PI * 5) * 0.15;

                gsap.to(pen, {
                    x: absoluteX,
                    y: viewBoxY,
                    rotation: (angle + 90) * 0.6, // Slightly more tilt for writing
                    scale: pressure,
                    duration: 0.05,
                    overwrite: 'auto'
                });
            }
        }, 5.5);

        // Final Pen Lift
        tl.to(pen, {
            y: "+=30",
            x: "+=15",
            rotation: "-=15",
            opacity: 0,
            duration: 0.5
        }, 7);
    }

    return tl;
};
