import Lenis from "lenis";
import { useEffect, useRef } from "react";

// Custom hook to integrate Lenis for smooth scrolling
export function useLenis() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis
    lenisRef.current = new Lenis({
      lerp: 0.1, // Set the scroll animation speed (0 to 1)
      smoothWheel: true, // Enable smooth scrolling with mouse wheel
    });

    // Animation loop for Lenis
    function raf(time: number) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenisRef.current?.destroy(); // Clean up on component unmount
    };
  }, []);

  return lenisRef;
}
