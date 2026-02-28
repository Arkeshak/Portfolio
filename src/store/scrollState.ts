// A highly optimized mutable store for GSAP to write to, and React Three Fiber to read from.
// This bridges the HTML scroll timeline to the WebGL Canvas without triggering expensive React state changes.

export const scrollState = {
    // Current scrubbed scroll progress (0 to 1)
    progress: 0,

    // Highest point reached (0 to 1), used to "remember" the journey and never reset awakened particles
    maxProgressReached: 0,

    // Used for slight camera parallax independent of scroll
    mouse: {
        x: 0,
        y: 0,
        targetX: 0,
        targetY: 0
    }
};

// Global mouse tracker listener
if (typeof window !== 'undefined') {
    window.addEventListener('mousemove', (e) => {
        // Normalize to -1 to 1
        scrollState.mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
        scrollState.mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    });
}
