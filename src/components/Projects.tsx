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

/* ── Helper to extract project initials (up to 2 letters) ───────────────── */
const STOP_WORDS = new Set(["de", "du", "des", "le", "la", "les", "d", "l", "un", "une", "et", "en", "a", "au", "aux"]);

function getProjectInitials(title: string): string {
  const words = title
    .replace(/['’]/g, " ")
    .replace(/[^a-zA-Z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean);

  const meaningfulWords = words.filter(
    (w) => !STOP_WORDS.has(w.toLowerCase())
  );

  const selected = meaningfulWords.length >= 2 ? meaningfulWords : words;

  if (selected.length >= 2) {
    return (selected[0][0] + selected[1][0]).toUpperCase();
  }
  return title.slice(0, 2).toUpperCase();
}

const ProjectInitialsFallback = ({ title }: { title: string }) => (
  <span className="text-xs font-bold text-[#334155] dark:text-slate-300 font-mono tracking-tight select-none">
    {getProjectInitials(title)}
  </span>
);

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<
    "all" | "professional" | "school" | "personal"
  >("all");
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

          {/* Projects grid — 1 col mobile · 2 col tablet · 3 col desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`group cursor-pointer bg-white dark:bg-gray-900/50 rounded-2xl border border-[#E5E7EB] dark:border-gray-800 overflow-hidden hover:border-[#334155] dark:hover:border-gray-600 transition-all duration-300 hover:shadow-lg flex flex-col ${
                  isInView ? "animate-fadeInUp" : "opacity-0"
                }`}
                style={{
                  animationDelay: isInView
                    ? `${(index + 1) * 80}ms`
                    : "0ms",
                  animationFillMode: "forwards",
                }}
              >
                {/* Card content */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Header — logo/icon + type badge */}
                  <div className="flex items-start justify-between mb-5">
                    {/* Project icon / logo */}
                    <div className="w-11 h-11 rounded-xl bg-[#F7F7F8] dark:bg-gray-800 border border-[#E5E7EB] dark:border-gray-700 flex items-center justify-center shrink-0">
                      {project.logo ? (
                        <img
                          src={project.logo}
                          alt={`Logo ${project.title}`}
                          className="w-6 h-6 object-contain"
                        />
                      ) : (
                        <ProjectInitialsFallback title={project.title} />
                      )}
                    </div>

                    {/* Type badge */}
                    <span
                      className={`text-[10px] md:text-xs px-2.5 py-1 rounded-full border font-medium whitespace-nowrap ${
                        typeLabels[project.type].class
                      }`}
                    >
                      {typeLabels[project.type].label}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#1F2937] dark:text-white mb-2 group-hover:text-[#334155] dark:group-hover:text-slate-300 transition-colors leading-snug">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#64748B] dark:text-gray-400 text-sm leading-relaxed line-clamp-3 mb-5">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mt-auto mb-5">
                    {project.tags.slice(0, 4).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="tech-tag px-2.5 py-1 text-[11px] bg-[rgba(51,65,85,0.07)] text-[#475569] dark:text-slate-400 dark:bg-gray-800/60 rounded-md border border-[rgba(51,65,85,0.15)] dark:border-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="tech-tag px-2.5 py-1 text-[11px] text-[#94A3B8] dark:text-gray-500 rounded-md">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  {/* "En savoir plus" link */}
                  <div className="flex items-center gap-1.5 text-[#334155] dark:text-slate-400 group-hover:text-[#1E293B] dark:group-hover:text-slate-300 transition-colors">
                    <span className="text-xs font-semibold uppercase tracking-wider underline underline-offset-4 decoration-1">
                      En savoir plus
                    </span>
                    <svg
                      className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
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
