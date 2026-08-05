"use client";

import { ME } from "@/data/profile";
import { useInView } from "@/hooks/useInView";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 });

  const navLinks = [
    { name: "Accueil", href: "#" },
    { name: "Compétences", href: "#skills" },
    { name: "Projets", href: "#projects" },
    { name: "Parcours", href: "#parcours" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer
      ref={ref}
      className="relative w-full bg-[#F7F7F8] dark:bg-gray-950 overflow-hidden"
    >
      {/* Gradient separator - subtle transition from contact section */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent"></div>

      {/* Decorative background elements - matching site style */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-32 left-1/4 w-64 h-64 bg-blue-400/5 dark:bg-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 right-1/4 w-64 h-64 bg-indigo-400/5 dark:bg-indigo-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-6 py-16">
        {/* Main content - centered and compact */}
        <div
          className={`flex flex-col items-center text-center ${
            isInView ? "animate-fadeInUp" : "opacity-0"
          }`}
        >
          {/* Brand */}
          <h3 className="text-2xl font-bold text-[#1F2937] dark:text-white mb-3">
            {ME.name}
          </h3>
          <p className="text-[#1F2937]/75 dark:text-gray-400 text-sm mb-8 max-w-md">
            {ME.title}
          </p>

          {/* Navigation Links - horizontal */}
          <nav
            className={`flex flex-wrap justify-center gap-6 mb-8 ${
              isInView ? "animate-fadeInUp" : "opacity-0"
            }`}
            style={{
              animationDelay: isInView ? "100ms" : "0ms",
              opacity: 0,
              animationFillMode: "forwards",
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#64748B] dark:text-gray-400 hover:text-[#334155] dark:hover:text-white transition-colors duration-300 text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div
            className={`flex gap-4 mb-10 ${
              isInView ? "animate-fadeInUp" : "opacity-0"
            }`}
            style={{
              animationDelay: isInView ? "150ms" : "0ms",
              opacity: 0,
              animationFillMode: "forwards",
            }}
          >
            <a
              href={ME.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 bg-white dark:bg-gray-900/50 border border-[#E5E7EB] dark:border-gray-800 hover:border-[#334155]/50 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-md hover:shadow-[rgba(15,23,42,0.10)]"
              aria-label="LinkedIn"
            >
              <svg
                className="w-5 h-5 text-[#64748B] dark:text-gray-400 group-hover:text-[#334155] dark:group-hover:text-white transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href={ME.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 bg-white dark:bg-gray-900/50 border border-[#E5E7EB] dark:border-gray-800 hover:border-[#334155]/50 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-md hover:shadow-[rgba(15,23,42,0.10)]"
              aria-label="GitHub"
            >
              <svg
                className="w-5 h-5 text-[#64748B] dark:text-gray-400 group-hover:text-[#334155] dark:group-hover:text-white transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent mb-8"></div>

          {/* Bottom bar */}
          <div
            className={`flex flex-col sm:flex-row items-center gap-2 text-center ${
              isInView ? "animate-fadeInUp" : "opacity-0"
            }`}
            style={{
              animationDelay: isInView ? "200ms" : "0ms",
              opacity: 0,
              animationFillMode: "forwards",
            }}
          >
            <p className="text-gray-500 dark:text-gray-500 text-sm">
              © {currentYear} {ME.name}
            </p>
            <span className="hidden sm:inline text-gray-300 dark:text-gray-700">
              •
            </span>
            <p className="text-gray-400 dark:text-gray-600 text-sm flex items-center gap-1.5">
              Fait avec
              <span className="text-red-500 text-xs">❤️</span>
              Next.js & Tailwind
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
