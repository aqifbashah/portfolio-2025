"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  // Ensure component only renders on client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted || pathname === "/") return null; // Avoid mismatched SSR/CSR

  return (
    <nav className="flex items-center justify-center gap-4 bg-gray-200 p-2 text-black dark:bg-gray-800 dark:text-white">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/resume">Resume</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
