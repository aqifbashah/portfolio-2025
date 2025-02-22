"use client";

import { useEffect, useState } from "react";
import { useLenis } from "../hooks/useLenis";

const navLinks = [
  { to: "hero", label: "Home" },
  { to: "about", label: "About" },
  { to: "experience", label: "Experience" },
  { to: "projects", label: "Projects" },
  { to: "contact", label: "Contact" },
];

export default function NavBar() {
  const lenisRef = useLenis(); // Lenis hook for smooth scrolling
  const [activeLink, setActiveLink] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id); // Set active link when section is in view
          }
        });
      },
      { threshold: 0.5 }, // Trigger when 50% of the section is visible
    );

    // Observe each section
    navLinks.forEach(({ to }) => {
      const section = document.getElementById(to);
      if (section) observer.observe(section);
    });

    return () => {
      observer.disconnect(); // Cleanup observer when component unmounts
    };
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      lenisRef.current?.scrollTo(element); // Scroll to section with Lenis
    }
  };

  return (
    <nav className="flex items-center justify-center gap-16 p-2 text-2xl">
      {navLinks.map(({ to, label }) => (
        <button
          key={to}
          onClick={() => handleScrollTo(to)} // Handle scroll on click
          className={`cursor-pointer transition-all ${
            activeLink === to ? "font-bold text-primary" : "text-gray1"
          }`}
        >
          {label}
        </button>
      ))}
    </nav>
  );
}
