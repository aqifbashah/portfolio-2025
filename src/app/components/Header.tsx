"use client";

import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <div className="fixed top-0 z-50 flex h-[60px] w-full items-center justify-between bg-background px-24 py-4 text-black dark:text-white">
      <h1 className="text-2xl font-bold text-primary">Aqif Bashah</h1>
      <NavBar />
      <ThemeToggle />
    </div>
  );
}
