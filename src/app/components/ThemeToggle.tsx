"use client";

import { useEffect, useState } from "react";
import { useTheme } from "../context/theme-provider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className="rounded bg-gray-300 p-2 text-black dark:bg-gray-700 dark:text-white"
    >
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
}
