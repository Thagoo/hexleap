"use client";

import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";

export default function Header() {
  const { darkTheme, toggleTheme } = useTheme();

  return (
    <div>
      <button onClick={toggleTheme} className=" absolute top-14 right-28">
        {darkTheme ? (
          <Image
            className="dark:invert"
            alt="light"
            src={"/static/light-mode.svg"}
            width={30}
            height={30}
          />
        ) : (
          <Image
            alt="dark"
            src={"/static/dark-mode.svg"}
            width={30}
            height={30}
          />
        )}
      </button>
    </div>
  );
}
