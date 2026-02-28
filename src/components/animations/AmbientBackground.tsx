import React from 'react';
import { Canvas } from '@react-three/fiber';
import SkillsAssemble from './SkillsAssemble';

export default function AmbientBackground() {
    return (
        <div className="fixed inset-0 pointer-events-none z-[-50] bg-[#030303]" style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0 }}>
            {/* 
        We use gl={{ antialias: false }} and dpr limitation for extreme performance 
        since the particle system and shaders are already highly optimized
      */}
            <div id="canvas-container" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                <Canvas
                    camera={{ position: [0, 0, 5], fov: 60, near: 0.1, far: 500 }}
                    dpr={Math.min(2, window.devicePixelRatio || 1)}
                    gl={{
                        alpha: true,
                        antialias: false,
                        powerPreference: "high-performance",
                        preserveDrawingBuffer: true
                    }}
                >
                    <fog attach="fog" args={['#050505', 10, 40]} />
                    <ambientLight intensity={0.2} color="#4c1d95" />
                    <directionalLight position={[10, 10, 5]} intensity={0.5} color="#3b82f6" />

                    <SkillsAssemble />
                </Canvas>
            </div>

            {/* Subtle vignette overlay to blend edges into the dark UI */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] opacity-80 pointer-events-none"></div>
        </div>
    );
}
