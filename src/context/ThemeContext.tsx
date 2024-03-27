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
  darkTheme: null,
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  const [darkTheme, setDarkTheme] = useState<boolean | null>(null);

  const toggleTheme = (): void => {
    setDarkTheme(!darkTheme);
  };

  useEffect(() => {
    document!
      .querySelector("html")!
      .classList.replace(
        darkTheme ? "dark" : "light",
        darkTheme ? "light" : "dark"
      );
  }, [darkTheme]);

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
