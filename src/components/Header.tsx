"use client";

import { useTheme } from "@/context/ThemeContext";

export default function Header() {
  const { darkTheme, toggleTheme } = useTheme();

  return (
    <div>
      <button onClick={toggleTheme}>
        {darkTheme ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}
