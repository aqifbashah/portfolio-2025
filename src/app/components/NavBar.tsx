"use client";

import { useEffect, useState } from "react";
import { Link } from "react-scroll";

export default function NavBar() {
  const [isMounted, setIsMounted] = useState(false);

  // Ensure component only renders on client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Avoid mismatched SSR/CSR

  return (
    <nav className="flex items-center justify-center gap-4 bg-gray-200 p-2 text-black dark:bg-gray-800 dark:text-white">
      <Link to="hero" smooth={true} duration={500}>
        Home
      </Link>
      <Link to="about" smooth={true} duration={500}>
        About
      </Link>
      <Link to="experience" smooth={true} duration={500}>
        Experience
      </Link>
      <Link to="projects" smooth={true} duration={500}>
        Projects
      </Link>
      <Link to="contact" smooth={true} duration={500}>
        Contact
      </Link>
    </nav>
  );
}
