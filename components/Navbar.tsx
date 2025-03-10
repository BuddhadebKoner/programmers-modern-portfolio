"use client";

import { Monitor, Moon, Sun } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from './ThemeProvider';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleToggleTheme = (selectedTheme: string) => {
    toggleTheme(selectedTheme);
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <nav className="fixed w-full z-100 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-16 items-center">
        <Link href="/" className="font-bold text-xl text-highlight flex-shrink-0">
          [Home ↗]
        </Link>

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="p-2 rounded-md hover:bg-accent focus:outline-none transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? (
              <Sun className="w-5 h-5 text-primary" />
            ) : theme === "dark" ? (
              <Moon className="w-5 h-5 text-primary" />
            ) : (
              <Monitor className="w-5 h-5 text-primary" />
            )}
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-foreground rounded-md shadow-lg py-1 z-100 border border-theme">
              <button
                onClick={() => handleToggleTheme("light")}
                className={`${theme === "light" ? "bg-accent" : ""} flex items-center w-full px-4 py-2 text-sm text-left hover:bg-accent text-primary`}
              >
                <Sun className="w-4 h-4 mr-3" />
                Light
              </button>
              <button
                onClick={() => handleToggleTheme("dark")}
                className={`${theme === "dark" ? "bg-accent" : ""} flex items-center w-full px-4 py-2 text-sm text-left hover:bg-accent text-primary`}
              >
                <Moon className="w-4 h-4 mr-3" />
                Dark
              </button>
              <button
                onClick={() => handleToggleTheme("system")}
                className={`${theme === "system" ? "bg-accent" : ""} flex items-center w-full px-4 py-2 text-sm text-left hover:bg-accent text-primary`}
              >
                <Monitor className="w-4 h-4 mr-3" />
                System
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;