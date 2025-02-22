"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Experience() {
  const [scrollY, setScrollY] = useState(0);
  const [isSectionInView, setIsSectionInView] = useState(false);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (isSectionInView) {
        event.preventDefault(); // Stop page scroll
        setScrollY((prev) => Math.max(0, prev + event.deltaY * 0.3)); // Move marker
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [isSectionInView]);

  // Check if section is in view
  useEffect(() => {
    const section = document.getElementById("experience-section");

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSectionInView(entry.isIntersecting);

        // Enable/Disable body scroll
        if (entry.isIntersecting) {
          document.body.style.overflow = "hidden"; // Stop page scroll
        } else {
          document.body.style.overflow = ""; // Restore scrolling
        }
      },
      { threshold: 0.8 }, // Trigger when 80% visible
    );

    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
      document.body.style.overflow = ""; // Restore scrolling when component unmounts
    };
  }, []);

  const experiences = [
    { year: "2020" },
    { year: "2021" },
    { year: "2022" },
    { year: "2024" },
    { year: "current" },
  ];

  return (
    <div
      id="experience-section"
      className="flex h-screen w-full flex-col items-center justify-center gap-4"
    >
      <h1 className="text-5xl">Experience</h1>
      <div className="relative z-0 w-full max-w-4xl">
        {/* Horizontal Line */}
        <div className="h-1 w-full rounded-full bg-primary"></div>

        <div className="absolute inset-0 flex w-full items-center justify-between">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className="h-4 w-4 rounded-full bg-secondary"></div>
              <span className="absolute left-1/2 top-6 -translate-x-1/2 text-sm">
                {exp.year}
              </span>
            </div>
          ))}
        </div>

        {/* Moving Marker */}
        <motion.div
          className="absolute inset-0 flex w-full items-center"
          animate={{ x: scrollY }} // Moves markers with scroll input
          transition={{ type: "tween", ease: "linear", duration: 0.2 }}
        >
          <div className="h-4 w-4 rounded-full bg-white"></div>
        </motion.div>
      </div>
    </div>
  );
}
