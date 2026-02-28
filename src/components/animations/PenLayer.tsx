import React, { forwardRef } from 'react';

const PenLayer = forwardRef<SVGGElement, {}>((props, ref) => {
    return (
        <g ref={ref} className="pen-container" style={{ pointerEvents: 'none' }}>
            {/* Pen Body Group: Starts from (0,0) and goes down */}
            <g className="pen-body-group">
                <g transform="translate(-20, 0)">
                    {/* Main Grip/Section */}
                    <path d="M8 0C8 -5 12 -10 20 -10C28 -10 32 -5 32 0V15H8V0Z" fill="#1A1A1A" />
                    {/* Main Barrel */}
                    <path d="M5 15C5 5 10 0 20 0C30 0 35 5 35 15V155C35 165 30 170 20 170C10 170 5 165 5 155V15Z" fill="#2A2A2A" />
                    <rect x="5" y="15" width="30" height="140" fill="url(#bodyGradient)" />

                    {/* Metallic Nib: Points UP from (0,0) */}
                    <path d="M20 -25C14 -25 10 -17 10 -13C10 -9 14 -5 20 -5C26 -5 30 -9 30 -13C30 -17 26 -25 20 -25Z" fill="url(#nibGradient)" />
                    <path d="M20 -25V-17" stroke="#333" strokeWidth="0.5" />
                    <circle cx="20" cy="-16" r="0.8" fill="#333" />
                </g>
            </g>

            {/* Pen Cap Group: Covers the nib area */}
            <g className="pen-cap-group">
                <g transform="translate(-21, -30)">
                    <path d="M4 10C4 5 10 0 21 0C32 0 38 5 38 10V75C38 78 35 80 21 80C7 80 4 78 4 75V10Z" fill="#2A2A2A" />
                    <rect x="4" y="0" width="34" height="80" fill="url(#capGradient)" />
                    <path d="M21 10V50C21 55 18 58 15 58" stroke="url(#clipGradient)" strokeWidth="3" strokeLinecap="round" />
                    <circle cx="15" cy="58" r="3" fill="url(#clipGradient)" />
                </g>
            </g>

            <defs>
                <linearGradient id="bodyGradient" x1="5" y1="110" x2="35" y2="110" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#1A1A1A" />
                    <stop offset="0.5" stopColor="#333333" />
                    <stop offset="1" stopColor="#1A1A1A" />
                </linearGradient>
                <linearGradient id="nibGradient" x1="10" y1="10" x2="30" y2="10" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#A0A0A0" />
                    <stop offset="0.5" stopColor="#E0E0E0" />
                    <stop offset="1" stopColor="#A0A0A0" />
                </linearGradient>
                <linearGradient id="capGradient" x1="4" y1="40" x2="38" y2="40" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#1A1A1A" />
                    <stop offset="0.5" stopColor="#333333" />
                    <stop offset="1" stopColor="#1A1A1A" />
                </linearGradient>
                <linearGradient id="clipGradient" x1="15" y1="10" x2="21" y2="58" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#A0A0A0" />
                    <stop offset="0.5" stopColor="#E0E0E0" />
                    <stop offset="1" stopColor="#A0A0A0" />
                </linearGradient>
            </defs>
        </g>
    );
});

PenLayer.displayName = 'PenLayer';
export default PenLayer;
