"use client";

import React, { useState, useEffect } from "react";
import { ME } from "@/data/profile";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { name: "Accueil", href: "#", icon: "🏠" },
  { name: "Compétences", href: "#skills", icon: "💡" },
  { name: "Projets", href: "#projects", icon: "🚀" },
  { name: "Parcours", href: "#parcours", icon: "📚" },
  { name: "Contact", href: "#contact", icon: "✉️" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on scroll
  useEffect(() => {
    if (isMobileMenuOpen) {
      const handleScroll = () => setIsMobileMenuOpen(false);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800/50 py-3 md:py-4"
            : "bg-transparent py-4 md:py-6"
        } ${isLoaded ? "animate-fadeInDown" : "opacity-0"}`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="Logo"
              width={48}
              height={48}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
            />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.slice(0, -1).map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}

            <li>
              <a
                href="#contact"
                className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium rounded-lg hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 shadow-lg shadow-blue-500/20"
              >
                Me contacter
              </a>
            </li>

            {/* Theme Toggle Button */}
            <li>
              <button
                onClick={toggleTheme}
                className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-105"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <svg
                    className="w-5 h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 text-gray-700"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <svg
                  className="w-4 h-4 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="w-4 h-4 text-gray-700"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800 flex flex-col items-center justify-center gap-1 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <span
                className={`w-4 h-0.5 bg-gray-600 dark:bg-gray-400 transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`w-4 h-0.5 bg-gray-600 dark:bg-gray-400 transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`w-4 h-0.5 bg-gray-600 dark:bg-gray-400 transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white dark:bg-gray-900 z-50 md:hidden transition-transform duration-300 ease-out shadow-2xl ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-800">
          <span className="font-semibold text-gray-900 dark:text-white">
            Menu
          </span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center"
            aria-label="Fermer le menu"
          >
            <svg
              className="w-4 h-4 text-gray-600 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Menu Links */}
        <nav className="p-4">
          <ul className="space-y-1">
            {navLinks.map((link, index) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
                  style={{
                    animationDelay: isMobileMenuOpen
                      ? `${index * 50}ms`
                      : "0ms",
                  }}
                >
                  <span className="text-lg">{link.icon}</span>
                  <span className="font-medium">{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Menu Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/profile.jpg"
              alt="Nicolas Vandamme"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Nicolas Vandamme
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Développeur Web
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            <a
              href={ME.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span className="text-xs font-medium">LinkedIn</span>
            </a>
            <a
              href={ME.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span className="text-xs font-medium">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
