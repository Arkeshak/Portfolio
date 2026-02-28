import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { scrollState } from '../../store/scrollState';

export default function SkillsAssemble() {
    const coreOuterRef = useRef<THREE.Mesh>(null);
    const coreInnerRef = useRef<THREE.Mesh>(null);
    const frontendRef = useRef<THREE.Mesh>(null);
    const backendRef = useRef<THREE.LineSegments>(null);
    const motionRef = useRef<THREE.Mesh>(null);
    const performanceRef = useRef<THREE.Mesh>(null);

    // References for HTML text opacities and transforms
    const frontendTextRef = useRef<HTMLDivElement>(null);
    const backendTextRef = useRef<HTMLDivElement>(null);
    const motionTextRef = useRef<HTMLDivElement>(null);
    const performanceTextRef = useRef<HTMLDivElement>(null);

    useFrame((state, delta) => {
        const p = scrollState.progress;

        // Helper to map a progress segment [start, end] to [0, 1] with easing
        const mapP = (start: number, end: number) => {
            return THREE.MathUtils.clamp((p - start) / (end - start), 0, 1);
        };

        // Smooth step easing
        const ease = (t: number) => t * t * (3 - 2 * t);

        // 0.0 -> 0.15: Core idle + subtle split
        const coreSplit = ease(mapP(0.0, 0.15));
        if (coreOuterRef.current) {
            coreOuterRef.current.rotation.y = state.clock.elapsedTime * 0.2;
            coreOuterRef.current.rotation.z = state.clock.elapsedTime * 0.1;
            // Expand and fade wireframe
            const outerMat = coreOuterRef.current.material as THREE.MeshStandardMaterial;
            coreOuterRef.current.scale.setScalar(1 + coreSplit * 0.5);
            outerMat.opacity = 1 - coreSplit * 0.5;
        }
        if (coreInnerRef.current) {
            coreInnerRef.current.scale.setScalar(0.5 + coreSplit * 0.3);
            const innerMat = coreInnerRef.current.material as THREE.MeshStandardMaterial;
            innerMat.emissiveIntensity = 1 + coreSplit * 2;
        }

        // 1. FRONTEND: 0.15 -> 0.35 (Grid Plane locks in below)
        const pFrontend = ease(mapP(0.15, 0.35));
        if (frontendRef.current) {
            frontendRef.current.position.y = THREE.MathUtils.lerp(-10, -1.5, pFrontend);
            frontendRef.current.rotation.x = THREE.MathUtils.lerp(Math.PI / 2, -Math.PI / 2 + 0.2, pFrontend); // Slight tilt
            frontendRef.current.rotation.z = THREE.MathUtils.lerp(-Math.PI, 0, pFrontend);
            const mat = frontendRef.current.material as THREE.MeshStandardMaterial;
            mat.opacity = pFrontend * 0.8;
            mat.emissiveIntensity = pFrontend >= 0.95 ? 2 : 0.5; // Pulse on lock

            if (frontendTextRef.current) {
                frontendTextRef.current.style.opacity = pFrontend >= 0.95 ? '1' : '0';
                frontendTextRef.current.style.transform = `translateY(${pFrontend >= 0.95 ? '0px' : '20px'})`;
            }
        }

        // 2. BACKEND: 0.35 -> 0.55 (Cube Lattice surrounds the core)
        const pBackend = ease(mapP(0.35, 0.55));
        if (backendRef.current) {
            backendRef.current.position.z = THREE.MathUtils.lerp(-20, 0, pBackend);
            backendRef.current.scale.setScalar(THREE.MathUtils.lerp(5, 1.8, pBackend));
            backendRef.current.rotation.y = THREE.MathUtils.lerp(Math.PI, Math.PI / 4, pBackend);
            backendRef.current.rotation.x = THREE.MathUtils.lerp(-Math.PI / 2, Math.PI / 4, pBackend);

            const mat = backendRef.current.material as THREE.LineBasicMaterial;
            mat.opacity = pBackend * 0.6;

            if (backendTextRef.current) {
                backendTextRef.current.style.opacity = pBackend >= 0.95 ? '1' : '0';
                backendTextRef.current.style.transform = `translateY(${pBackend >= 0.95 ? '0px' : '20px'})`;
            }
        }

        // 3. MOTION: 0.55 -> 0.75 (Dynamic Arc with light)
        const pMotion = ease(mapP(0.55, 0.75));
        if (motionRef.current) {
            motionRef.current.position.x = THREE.MathUtils.lerp(15, 0, pMotion);
            motionRef.current.scale.setScalar(THREE.MathUtils.lerp(0.1, 1, pMotion));
            // Orbit continuously but align to a specific axis when locked
            const baseRotationX = THREE.MathUtils.lerp(0, Math.PI / 3, pMotion);
            const dynamicZ = pMotion >= 0.95 ? state.clock.elapsedTime * 0.5 : THREE.MathUtils.lerp(Math.PI * 2, 0, pMotion);

            motionRef.current.rotation.set(baseRotationX, 0, dynamicZ);

            const mat = motionRef.current.material as THREE.MeshStandardMaterial;
            mat.opacity = pMotion;
            mat.emissiveIntensity = pMotion >= 0.95 ? 3 : 1;

            if (motionTextRef.current) {
                motionTextRef.current.style.opacity = pMotion >= 0.95 ? '1' : '0';
                motionTextRef.current.style.transform = `translateY(${pMotion >= 0.95 ? '0px' : '20px'})`;
            }
        }

        // 4. PERFORMANCE: 0.75 -> 0.95 (Stabilizing Ring)
        const pPerf = ease(mapP(0.75, 0.95));
        if (performanceRef.current) {
            performanceRef.current.position.y = THREE.MathUtils.lerp(15, 0, pPerf);
            performanceRef.current.scale.setScalar(THREE.MathUtils.lerp(5, 1, pPerf));
            performanceRef.current.rotation.x = THREE.MathUtils.lerp(0, Math.PI / 2.2, pPerf);

            const mat = performanceRef.current.material as THREE.MeshStandardMaterial;
            mat.opacity = pPerf;
            mat.emissiveIntensity = pPerf >= 0.95 ? 4 : 0.5;

            if (performanceTextRef.current) {
                performanceTextRef.current.style.opacity = pPerf >= 0.95 ? '1' : '0';
                performanceTextRef.current.style.transform = `translateY(${pPerf >= 0.95 ? '0px' : '20px'})`;
            }
        }

        // Smooth camera drift over the entire sequence
        state.camera.position.x = THREE.MathUtils.lerp(0, 1.5, ease(p));
        state.camera.position.y = THREE.MathUtils.lerp(0, 0.5, ease(p));
        state.camera.lookAt(0, 0, 0);
    });

    return (
        <group>
            {/* GLOWING NUCLEUS */}
            <mesh ref={coreOuterRef}>
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial
                    color="#111"
                    wireframe
                    transparent
                    opacity={1}
                    emissive="#3b82f6"
                    emissiveIntensity={0.5}
                />
            </mesh>
            <mesh ref={coreInnerRef}>
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshStandardMaterial
                    color="#fff"
                    emissive="#60a5fa"
                    emissiveIntensity={1}
                    toneMapped={false}
                />
            </mesh>

            {/* FRONTEND: Grid Plane */}
            <mesh ref={frontendRef}>
                <planeGeometry args={[6, 6, 12, 12]} />
                <meshStandardMaterial
                    color="#2dd4bf"
                    wireframe
                    transparent
                    opacity={0}
                    emissive="#2dd4bf"
                    emissiveIntensity={0}
                />
                <Html position={[-3, 0, 1]} center>
                    <div ref={frontendTextRef} className="px-3 py-1 bg-black/50 backdrop-blur-md border border-[#2dd4bf]/30 text-[#2dd4bf] text-xs tracking-[0.2em] uppercase rounded transition-all duration-500 opacity-0 pointer-events-none whitespace-nowrap">
                        Frontend
                    </div>
                </Html>
            </mesh>

            {/* BACKEND: Cube Lattice */}
            <lineSegments ref={backendRef}>
                <edgesGeometry args={[new THREE.BoxGeometry(2, 2, 2)]} />
                <lineBasicMaterial color="#a855f7" transparent opacity={0} />
                <Html position={[2, 1, 0]} center>
                    <div ref={backendTextRef} className="px-3 py-1 bg-black/50 backdrop-blur-md border border-[#a855f7]/30 text-[#a855f7] text-xs tracking-[0.2em] uppercase rounded transition-all duration-500 opacity-0 pointer-events-none whitespace-nowrap">
                        Backend
                    </div>
                </Html>
            </lineSegments>

            {/* MOTION: Orbiting Arc */}
            <mesh ref={motionRef}>
                {/* A half torus that rotates */}
                <torusGeometry args={[2.5, 0.02, 16, 100, Math.PI * 1.5]} />
                <meshStandardMaterial
                    color="#f43f5e"
                    transparent
                    opacity={0}
                    emissive="#f43f5e"
                    emissiveIntensity={0}
                />
                <Html position={[2.5, 0, 0]} center>
                    <div ref={motionTextRef} className="px-3 py-1 bg-black/50 backdrop-blur-md border border-[#f43f5e]/30 text-[#f43f5e] text-xs tracking-[0.2em] uppercase rounded transition-all duration-500 opacity-0 pointer-events-none whitespace-nowrap">
                        Motion
                    </div>
                </Html>
            </mesh>

            {/* PERFORMANCE: Stabilizing Ring */}
            <mesh ref={performanceRef}>
                <torusGeometry args={[3.2, 0.03, 16, 100]} />
                <meshStandardMaterial
                    color="#eab308"
                    transparent
                    opacity={0}
                    emissive="#eab308"
                    emissiveIntensity={0}
                />
                <Html position={[0, -3.2, 0]} center>
                    <div ref={performanceTextRef} className="px-3 py-1 bg-black/50 backdrop-blur-md border border-[#eab308]/30 text-[#eab308] text-xs tracking-[0.2em] uppercase rounded transition-all duration-500 opacity-0 pointer-events-none whitespace-nowrap">
                        Performance
                    </div>
                </Html>
            </mesh>
        </group>
    );
}
