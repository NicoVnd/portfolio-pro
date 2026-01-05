import React from "react";

const PROJECTS = [
  {
    title: "E-Commerce Platform",
    description:
      "Plateforme de vente en ligne complète avec gestion des stocks, panier et paiement sécurisé.",
    type: "school", // school, personal, professional
    tags: ["PHP", "Symfony", "MySQL", "Twig"],
    learned: ["Architecture MVC", "Sécurité web", "Gestion de sessions"],
    github: "https://github.com/NicoVnd/ecommerce",
    demo: null,
  },
  {
    title: "Dashboard Analytics",
    description:
      "Tableau de bord interactif pour visualiser les données de vente et comportement utilisateur.",
    type: "school",
    tags: ["React", "TypeScript", "Chart.js", "API REST"],
    learned: ["React Hooks", "Data visualization", "Appels API asynchrones"],
    github: "https://github.com/NicoVnd/dashboard",
    demo: null,
  },
  {
    title: "Application Gestion RH",
    description:
      "Système de gestion des employés avec planning, congés et évaluations annuelles.",
    type: "professional",
    tags: ["PHP", "Symfony", "PostgreSQL", "Bootstrap"],
    learned: ["Workflows métier", "Gestion des rôles", "Exports PDF/Excel"],
    github: "https://github.com/NicoVnd/hr-management",
    demo: null,
  },
  {
    title: "Portfolio Photographe",
    description:
      "Site portfolio moderne et animé pour un photographe avec galerie interactive.",
    type: "personal",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    learned: ["SSR/SSG", "Animations avancées", "Optimisation images"],
    github: "https://github.com/NicoVnd/photo-portfolio",
    demo: "https://demo-photo.example.com",
  },
];

const typeLabels: Record<string, { label: string; class: string }> = {
  school: {
    label: "Projet de cours",
    class: "border-purple-500/30 text-purple-400 bg-purple-500/10",
  },
  personal: {
    label: "Projet personnel",
    class: "border-green-500/30 text-green-400 bg-green-500/10",
  },
  professional: {
    label: "Projet pro",
    class: "border-blue-500/30 text-blue-400 bg-blue-500/10",
  },
};

export default function Projects() {
  return (
    <section id="projects" className="w-full py-24 bg-gray-900/30">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Mes Projets
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Une sélection de projets réalisés en cours, en entreprise ou sur mon
            temps libre. Le code source est disponible sur GitHub.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-900/50 rounded-2xl border border-gray-800 overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
            >
              {/* Header with type badge */}
              <div className="p-6 pb-0">
                <div className="flex items-start justify-between mb-4">
                  <span
                    className={`text-xs px-3 py-1 rounded-full border font-medium ${
                      typeLabels[project.type].class
                    }`}
                  >
                    {typeLabels[project.type].label}
                  </span>
                  {!project.demo && (
                    <span className="text-xs text-gray-600 italic">
                      Non hébergé
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* What I learned */}
              <div className="px-6 pb-4">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2 font-medium">
                  Ce que j'ai appris
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.learned.map((item, i) => (
                    <span
                      key={i}
                      className="text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer with tags and actions */}
              <div className="p-6 pt-4 border-t border-gray-800/50">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 rounded-lg border border-blue-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Voir le code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm font-medium rounded-lg transition-all flex items-center justify-center gap-2"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Voir la démo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
