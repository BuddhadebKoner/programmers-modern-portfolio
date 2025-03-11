"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

type ThemeContextType = {
  theme: string | null;
  toggleTheme: (theme: string) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<string | null>(null);

  // Function to get the current system theme
  const getSystemTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

  useEffect(() => {
    // Get the theme from localStorage
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "system" || !storedTheme) {
      const systemTheme = getSystemTheme();
      setTheme("system");
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(systemTheme);
    } else {
      setTheme(storedTheme);
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(storedTheme);
    }

    // Listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (localStorage.getItem("theme") === "system") {
        const newSystemTheme = getSystemTheme();
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(newSystemTheme);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = (selectedTheme: string) => {
    if (selectedTheme === "system") {
      localStorage.setItem("theme", "system");
      const systemTheme = getSystemTheme();
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(systemTheme);
      setTheme("system");
    } else {
      localStorage.setItem("theme", selectedTheme);
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(selectedTheme);
      setTheme(selectedTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}