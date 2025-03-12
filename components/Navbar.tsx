"use client";

import { Monitor, Moon, Sun } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from '../context/ThemeProvider';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

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
    setIsDropdownOpen(false);
  };

  // Handle keyboard navigation for theme dropdown
  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, index?: number) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();

      if (index === undefined) {
        buttonRefs.current[0]?.focus();
      } else if (index < 2) {
        buttonRefs.current[index + 1]?.focus();
      }
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();

      if (index === undefined) {
        buttonRefs.current[2]?.focus();
      } else if (index > 0) {
        buttonRefs.current[index - 1]?.focus();
      } else if (index === 0) {
        const toggleButton = dropdownRef.current?.querySelector('button[aria-label="Toggle Theme"]') as HTMLButtonElement;
        toggleButton?.focus();
      }
    }

    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (index === undefined) {
        setIsDropdownOpen(!isDropdownOpen);
      } else {
        e.currentTarget.click();
      }
    }

    if (e.key === "Escape" && isDropdownOpen) {
      e.preventDefault();
      setIsDropdownOpen(false);
      const toggleButton = dropdownRef.current?.querySelector('button[aria-label="Toggle Theme"]') as HTMLButtonElement;
      toggleButton?.focus();
    }
  };

  return (
    <nav className="fixed w-full z-100 bg-glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-16 items-center">
        <Link href="/" className="font-bold text-xl text-highlight flex-shrink-0">
          [Home ↗]
        </Link>

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            onKeyDown={(e) => handleKeyDown(e)}
            className="p-2 rounded-md hover:bg-accent focus:outline-none transition-colors"
            aria-label="Toggle Theme"
            aria-haspopup="true"
            aria-expanded={isDropdownOpen}
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
            <div className="absolute right-0 mt-2 w-48 dropdown-glass rounded-md shadow-lg py-1 z-100">
              <button
                ref={(el) => {
                  buttonRefs.current[0] = el;
                }}
                onClick={() => handleToggleTheme("light")}
                onKeyDown={(e) => handleKeyDown(e, 0)}
                className={`${theme === "light" ? "bg-accent" : ""} flex items-center w-full px-4 py-2 text-sm text-left hover:bg-accent text-primary`}
                role="menuitem"
              >
                <Sun className="w-4 h-4 mr-3" />
                Light
              </button>
              <button
                ref={(el) => {
                  buttonRefs.current[1] = el;
                }}
                onClick={() => handleToggleTheme("dark")}
                onKeyDown={(e) => handleKeyDown(e, 1)}
                className={`${theme === "dark" ? "bg-accent" : ""} flex items-center w-full px-4 py-2 text-sm text-left hover:bg-accent text-primary`}
                role="menuitem"
              >
                <Moon className="w-4 h-4 mr-3" />
                Dark
              </button>
              <button
                ref={(el) => {
                  buttonRefs.current[2] = el;
                }}
                onClick={() => handleToggleTheme("system")}
                onKeyDown={(e) => handleKeyDown(e, 2)}
                className={`${theme === "system" ? "bg-accent" : ""} flex items-center w-full px-4 py-2 text-sm text-left hover:bg-accent text-primary`}
                role="menuitem"
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