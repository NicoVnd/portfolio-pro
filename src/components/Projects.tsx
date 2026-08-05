"use client";

import React, { useState } from "react";
import { PROJECTS, type Project } from "@/data/projects";
import ProjectModal from "./ProjectModal";
import { useInView } from "@/hooks/useInView";

const typeLabels: Record<string, { label: string; class: string }> = {
  school: {
    label: "Projet scolaire",
    class:
      "border-purple-500/30 text-purple-600 dark:text-purple-400 bg-purple-500/10",
  },
  personal: {
    label: "Projet personnel",
    class:
      "border-green-500/30 text-green-600 dark:text-green-400 bg-green-500/10",
  },
  professional: {
    label: "Projet professionnel",
    class: "border-blue-500/30 text-blue-600 dark:text-blue-400 bg-blue-500/10",
  },
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<"all" | "professional" | "school" | "personal">("all");
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.05 });

  const filterOptions = [
    { id: "all", label: "Tous les projets" },
    { id: "professional", label: "Projets pro" },
    { id: "school", label: "Projets scolaires" },
    { id: "personal", label: "Projets personnels" },
  ] as const;

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeFilter === "all") return true;
    return project.type === activeFilter;
  });

  return (
    <>
      <section
        ref={ref}
        id="projects"
        className="w-full py-12 md:py-24 bg-white dark:bg-gray-900/30"
      >
        <div className="container mx-auto px-4 md:px-6">
          {/* Section header */}
          <div
            className={`text-center mb-10 md:mb-12 ${
              isInView ? "animate-fadeInUp" : "opacity-0"
            }`}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#1F2937] dark:text-white mb-4">
              Mes Projets
            </h2>
            <div className="h-1 w-20 bg-[#334155] mx-auto rounded-full"></div>
            <p className="mt-6 text-[#1F2937]/75 dark:text-gray-400 max-w-2xl mx-auto">
              Une sélection de projets réalisés en cours, en entreprise ou sur
              mon temps libre. Cliquez sur un projet pour en savoir plus.
            </p>

            {/* Filters */}
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mt-8">
              {filterOptions.map((filter) => {
                const isActive = activeFilter === filter.id;
                const count =
                  filter.id === "all"
                    ? PROJECTS.length
                    : PROJECTS.filter((p) => p.type === filter.id).length;

                return (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`px-4 py-2 text-xs md:text-sm font-medium rounded-full transition-all duration-300 flex items-center gap-2 border ${
                      isActive
                        ? "bg-[#334155] border-[#334155] text-white shadow-sm scale-105"
                        : "bg-white dark:bg-gray-800/80 border-[#E5E7EB] dark:border-gray-700 text-[#1F2937] dark:text-gray-300 hover:border-[#334155] hover:text-[#334155] dark:hover:text-slate-300"
                    }`}
                  >
                    <span>{filter.label}</span>
                    <span
                      className={`text-[10px] md:text-xs px-1.5 py-0.5 rounded-full ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-[#F7F7F8] dark:bg-gray-700 text-[#1F2937]/70 dark:text-gray-400"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`group cursor-pointer bg-white dark:bg-gray-900/50 rounded-2xl border border-[#E5E7EB] dark:border-gray-800 overflow-hidden hover:border-[#334155] transition-all duration-300 hover:shadow-lg flex flex-col justify-between ${
                  isInView ? "animate-fadeInUp" : "opacity-0"
                }`}
                style={{
                  animationDelay: isInView ? `${(index + 1) * 100}ms` : "0ms",
                  animationFillMode: "forwards",
                }}
              >
                {/* Upper content container */}
                <div className="flex flex-col flex-1">
                  {/* Header with type badge */}
                  <div className="p-6 pb-0">
                    <div className="flex items-start justify-between mb-4 h-10">
                      <span
                        className={`text-xs px-3 py-1 rounded-full border font-medium ${
                          typeLabels[project.type].class
                        }`}
                      >
                        {typeLabels[project.type].label}
                      </span>
                      {project.logo ? (
                        <img
                          src={project.logo}
                          alt={`Logo ${project.title}`}
                          className="w-10 h-10 object-contain rounded-lg dark:bg-white dark:border-gray-200 dark:border-1"
                        />
                      ) : project.status ? (
                        <span className="text-xs text-amber-500 dark:text-amber-400 italic">
                          {project.status}
                        </span>
                      ) : null}
                    </div>

                    <h3 className="text-xl font-bold text-[#1F2937] dark:text-white mb-2 group-hover:text-[#334155] dark:group-hover:text-slate-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[#1F2937]/75 dark:text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* What I learned — inline items with slate color */}
                  <div className="px-6 pb-4 mt-auto">
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-2 font-medium">
                      Ce que j&apos;ai appris
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.learned.slice(0, 3).map((item, i) => (
                        <span
                          key={i}
                          className="tech-tag text-[10px] md:text-xs text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800/50 px-2 py-1 rounded"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer with tags and actions */}
                <div className="p-6 pt-4 border-t border-[#E5E7EB] dark:border-gray-800/50 bg-gray-50/30 dark:bg-transparent">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4 min-h-[34px] items-center">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="tech-tag px-3 py-1 text-xs bg-[rgba(51,65,85,0.09)] text-[#475569] dark:text-slate-300 rounded-lg border border-[rgba(51,65,85,0.20)] dark:border-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 w-full">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 py-2.5 px-4 bg-white dark:bg-gray-800 border border-[#CBD5E1] dark:border-gray-700 hover:bg-[#F1F5F9] dark:hover:bg-gray-700 text-[#334155] dark:text-white text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
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
                    )}
                    <button className="flex-1 py-2.5 px-4 bg-[#334155] hover:bg-[#1E293B] text-white text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-2">
                      Détails
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
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
