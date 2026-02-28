import React, { useEffect, useRef } from 'react';
import PenLayer from './PenLayer';
import { createSignatureTimeline } from './timelines';

export default function SignatureOrchestrator() {
    const containerRef = useRef<HTMLDivElement>(null);
    const pathRef = useRef<SVGPathElement>(null);
    const signatureRef = useRef<SVGPathElement>(null);
    const penRef = useRef<SVGGElement>(null);

    useEffect(() => {
        if (!containerRef.current || !pathRef.current || !penRef.current) return;

        const pen = penRef.current;
        const cap = pen.querySelector('.pen-cap-group') as SVGGElement;
        const body = pen.querySelector('.pen-body-group') as SVGGElement;

        const tl = createSignatureTimeline(
            containerRef.current,
            pen,
            cap,
            body,
            pathRef.current,
            signatureRef.current!
        );

        return () => {
            tl.kill();
        };
    }, []);

    return (
        <div ref={containerRef} className="fixed inset-0 z-[100] pointer-events-none overflow-visible">
            {/* Fixed SVG for the Pen */}
            <svg
                viewBox="0 0 1000 1000"
                className="w-full h-full overflow-visible"
                preserveAspectRatio="xMidYMin slice"
                fill="none"
            >
                <defs>
                    <filter id="penShadow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                        <feOffset dx="2" dy="2" result="offsetblur" />
                        <feComponentTransfer>
                            <feFuncA type="linear" slope="0.3" />
                        </feComponentTransfer>
                        <feMerge>
                            <feMergeNode />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* The Realistic Pen */}
                <g filter="url(#penShadow)">
                    <PenLayer ref={penRef} />
                </g>
            </svg>

            {/* Scrolling SVG for Paths and Ink */}
            <svg
                viewBox="0 0 1000 2000"
                className="absolute inset-0 w-full h-full overflow-visible"
                preserveAspectRatio="xMidYMin slice"
                fill="none"
            >
                {/* Main Journey Path */}
                <path
                    ref={pathRef}
                    d="M 200,300 L 200,500 C 200,800 400,1000 800,1200"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                />

                {/* Final Signature Path: Vectorized "Arkesh" */}
                <g transform="translate(700, 1200) scale(1.5)">
                    <path
                        ref={signatureRef}
                        d="
              M 0,50 
              C 10,20 20,20 30,50 
              S 50,80 60,50 
              S 80,20 90,50 
              S 110,80 120,50 
              S 140,20 150,50
              L 160,45
            "
                        stroke="#1c2a39"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        opacity="0.9"
                    />
                </g>
            </svg>
        </div>
    );
}
