"use client";
import {
  ReactElement,
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type ThemeContextType = {
  darkTheme: boolean | null;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  darkTheme: false,
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  const [darkTheme, setDarkTheme] = useState<boolean | null>(false);

  const toggleTheme = (): void => {
    setDarkTheme(!darkTheme);
  };

  useEffect(() => {
    const dark = localStorage.getItem("darkTheme");
    if (dark == "true") {
      setDarkTheme(true);
    }
  }, []);

  useEffect(() => {
    if (darkTheme) {
      document!.querySelector("html")!.classList.add("dark");
      localStorage.setItem("darkTheme", "true");
    } else {
      document!.querySelector("html")!.classList.remove("dark");
      localStorage.setItem("darkTheme", "false");
    }
  }, [darkTheme]);

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
