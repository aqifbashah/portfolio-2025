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
    <label className="flex cursor-pointer items-center">
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={toggleTheme}
        className="hidden"
      />
      <div className="relative h-8 w-14 rounded-full bg-gray-200 transition-colors dark:bg-gray-600">
        <div
          className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md transition-all dark:bg-gray-800 ${
            theme === "dark" ? "translate-x-6" : "translate-x-0"
          }`}
        >
          {theme === "light" ? "☀️" : "🌙"}
        </div>
      </div>
    </label>
  );
}
