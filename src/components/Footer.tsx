import { ME } from "@/data/profile";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Accueil", href: "#" },
    { name: "Compétences", href: "#skills" },
    { name: "Projets", href: "#projects" },
    { name: "Expériences", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative w-full bg-gray-900 dark:bg-gray-950 overflow-hidden">
      {/* Wave SVG separator */}
      <div className="absolute -top-1 left-0 right-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-full h-20 md:h-28"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="50%" stopColor="#4f46e5" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
          </defs>
          {/* Back wave - darker */}
          <path
            d="M0,40 C150,80 350,0 600,40 C850,80 1050,0 1200,40 L1200,120 L0,120 Z"
            className="fill-gray-900 dark:fill-gray-950"
          />
          {/* Middle wave - gradient */}
          <path
            d="M0,60 C200,100 400,20 600,60 C800,100 1000,20 1200,60 L1200,120 L0,120 Z"
            fill="url(#waveGradient)"
            opacity="0.3"
          />
          {/* Front wave - subtle */}
          <path
            d="M0,80 C300,110 500,50 700,80 C900,110 1100,50 1200,80 L1200,120 L0,120 Z"
            className="fill-gray-900 dark:fill-gray-950"
          />
        </svg>
      </div>

      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-6 pt-20 md:pt-28 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              {ME.name}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              {ME.title}
            </p>
            <p className="text-gray-500 text-sm">📍 {ME.location}</p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-widest">
              Navigation
            </h4>
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm w-fit"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-widest">
              Me suivre
            </h4>
            <div className="flex gap-3">
              <a
                href={ME.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-11 h-11 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
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
                className="group w-11 h-11 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
                aria-label="GitHub"
              >
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href={`mailto:${ME.email}`}
                className="group w-11 h-11 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
                aria-label="Email"
              >
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} {ME.name}. Tous droits réservés.
          </p>
          <p className="text-gray-600 text-sm flex items-center gap-2">
            Fait avec
            <span className="text-red-500 animate-pulse">❤️</span>
            en utilisant Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
