"use client";

import React, { useEffect, useCallback, useState } from "react";
import type { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const typeLabels: Record<string, { label: string; class: string }> = {
  school: {
    label: "Projet de cours",
    class:
      "border-purple-500/30 text-purple-600 dark:text-purple-400 bg-purple-500/10",
  },
  personal: {
    label: "Projet personnel",
    class:
      "border-green-500/30 text-green-600 dark:text-green-400 bg-green-500/10",
  },
  professional: {
    label: "Projet pro",
    class: "border-blue-500/30 text-blue-600 dark:text-blue-400 bg-blue-500/10",
  },
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (project) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
      setCurrentImageIndex(0);
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [project, handleEscape]);

  if (!project) return null;

  // Combine main image + gallery for carousel
  const allImages = [
    ...(project.image ? [project.image] : []),
    ...project.gallery,
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + allImages.length) % allImages.length
    );
  };

  const hasActions = project.github || project.demo;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center md:p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full h-full md:h-auto md:max-h-[90vh] md:max-w-4xl bg-white dark:bg-gray-900 md:rounded-2xl shadow-2xl overflow-hidden animate-slideUp flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile Header - Fixed */}
        <div className="md:hidden sticky top-0 z-20 flex items-center justify-between px-4 py-3 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-[#E5E7EB] dark:border-gray-800">
          <div className="flex items-center gap-3 min-w-0">
            {project.logo && (
              <img
                src={project.logo}
                alt={`Logo ${project.title}`}
                className="w-8 h-8 object-contain bg-white rounded-lg p-1 shadow-sm flex-shrink-0"
              />
            )}
            <h2 className="text-base font-bold text-[#1F2937] dark:text-white truncate">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 -mr-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors flex-shrink-0"
            aria-label="Fermer"
          >
            <svg
              className="w-5 h-5 text-[#64748B] dark:text-gray-400"
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

        {/* Desktop Close button */}
        <button
          onClick={onClose}
          className="hidden md:flex absolute top-4 right-4 z-10 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors"
          aria-label="Fermer"
        >
          <svg
            className="w-5 h-5"
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

        {/* Scrollable content */}
        <div
          className={`flex-1 overflow-y-auto ${
            hasActions ? "pb-20 md:pb-0" : ""
          }`}
        >
          {/* Image carousel */}
          {allImages.length > 0 && (
            <div className={`relative bg-gray-100 dark:bg-gray-800 ${
              project.imagePosition === "contain" ? "" : "h-44 sm:h-56 md:h-80"
            }`}>
              {project.imagePosition === "contain" ? (
                /* Full-width showcase mode for website screenshots */
                <div className="relative">
                  <img
                    src={allImages[currentImageIndex]}
                    alt={`${project.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-auto block"
                  />
                  {/* Gradient overlay at bottom for readability */}
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

                  {/* Image navigation */}
                  {allImages.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-2 md:p-2.5 bg-black/40 hover:bg-black/60 active:bg-black/70 text-white rounded-full transition-colors"
                        aria-label="Image précédente"
                      >
                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 md:p-2.5 bg-black/40 hover:bg-black/60 active:bg-black/70 text-white rounded-full transition-colors"
                        aria-label="Image suivante"
                      >
                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>

                      {/* Image indicators */}
                      <div className="absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2 z-10">
                        {allImages.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all ${
                              index === currentImageIndex
                                ? "bg-white scale-110"
                                : "bg-white/50 hover:bg-white/75"
                            }`}
                            aria-label={`Image ${index + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ) : (
                /* Standard fixed-height mode */
                <>
                  <img
                    src={allImages[currentImageIndex]}
                    alt={`${project.title} - Image ${currentImageIndex + 1}`}
                    className={`w-full h-full object-cover ${
                      project.imagePosition === "top"
                        ? "object-top"
                        : project.imagePosition === "bottom"
                        ? "object-bottom"
                        : "object-center"
                    }`}
                  />

                  {/* Image navigation */}
                  {allImages.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-2 md:p-2.5 bg-black/40 hover:bg-black/60 active:bg-black/70 text-white rounded-full transition-colors"
                        aria-label="Image précédente"
                      >
                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-2 md:right-12 top-1/2 -translate-y-1/2 p-2 md:p-2.5 bg-black/40 hover:bg-black/60 active:bg-black/70 text-white rounded-full transition-colors"
                        aria-label="Image suivante"
                      >
                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>

                      {/* Image indicators */}
                      <div className="absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2">
                        {allImages.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all ${
                              index === currentImageIndex
                                ? "bg-white scale-110"
                                : "bg-white/50 hover:bg-white/75"
                            }`}
                            aria-label={`Image ${index + 1}`}
                          />
                        ))}
                      </div>

                      {/* Image labels */}
                      <div className="absolute top-3 md:top-4 left-3 md:left-4 flex items-center gap-2">
                        <span className="px-2.5 py-1 bg-black/40 text-white text-xs rounded-full">
                          {project.galleryLabels && project.galleryLabels[currentImageIndex]
                            ? project.galleryLabels[currentImageIndex]
                            : currentImageIndex === 0 && project.image
                            ? "Screenshot"
                            : currentImageIndex === 1
                            ? "Zoning"
                            : currentImageIndex === 2
                            ? "Wireframe"
                            : "Maquette"}
                        </span>
                      </div>
                    </>
                  )}
                </>
              )}

              {/* Info bar for showcase mode (below image) */}
              {project.imagePosition === "contain" && allImages.length > 1 && (
                <div className="flex items-center justify-between px-4 py-2.5 bg-[#F7F7F8] dark:bg-gray-800/80 border-b border-[#E5E7EB] dark:border-gray-700/50">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-[#1F2937] dark:text-white">
                      {project.galleryLabels && project.galleryLabels[currentImageIndex]
                        ? project.galleryLabels[currentImageIndex]
                        : `Image ${currentImageIndex + 1}`}
                    </span>
                    <span className="text-xs text-[#94A3B8]">
                      {currentImageIndex + 1} / {allImages.length}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-[#334155] hover:bg-[#1E293B] text-white text-xs font-medium rounded-lg transition-colors"
                      >
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        Voir le code
                      </a>
                    )}
                    {project.siteLinks && project.siteLinks[currentImageIndex] && (
                      <a
                        href={project.siteLinks[currentImageIndex]}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-[rgba(51,65,85,0.09)] hover:bg-[rgba(51,65,85,0.15)] text-[#334155] dark:text-slate-300 text-xs font-medium rounded-lg border border-[rgba(51,65,85,0.15)] dark:border-gray-700 transition-colors"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Voir le site
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Content */}
          <div className="p-5 md:p-8 space-y-5 md:space-y-6">
            {/* Header: badges + title */}
            <div className="space-y-3">
              {/* Badges row */}
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={`text-xs px-3 py-1 rounded-full border font-medium ${
                    typeLabels[project.type].class
                  }`}
                >
                  {typeLabels[project.type].label}
                </span>
                {project.duration && (
                  <span className="text-xs px-3 py-1 rounded-full border border-[#E5E7EB] dark:border-gray-800 text-[#64748B] dark:text-gray-400 bg-[#F7F7F8] dark:bg-gray-800/50">
                    {project.duration}
                  </span>
                )}
                {project.teamSize && (
                  <span className="text-xs px-3 py-1 rounded-full border border-[#E5E7EB] dark:border-gray-800 text-[#64748B] dark:text-gray-400 bg-[#F7F7F8] dark:bg-gray-800/50">
                    Équipe de {project.teamSize}
                  </span>
                )}
              </div>

              {/* Title & Actions - Desktop only */}
              <div className="hidden md:flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  {project.logo && (
                    <img
                      src={project.logo}
                      alt={`Logo ${project.title}`}
                      className="w-12 h-12 object-contain bg-[#F7F7F8] dark:bg-gray-800 rounded-xl p-1.5 border border-[#E5E7EB] dark:border-gray-700"
                    />
                  )}
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1F2937] dark:text-white">
                    {project.title}
                  </h2>
                </div>

                {hasActions && (
                  <div className="flex items-center gap-2.5 shrink-0">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-[#334155] hover:bg-[#1E293B] text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-2 shadow-sm"
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
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-white dark:bg-gray-800 border border-[#E5E7EB] dark:border-gray-700 hover:bg-[#F7F7F8] dark:hover:bg-gray-700 text-[#334155] dark:text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-2"
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
                )}
              </div>
            </div>

            {/* Description — context as accent block + full description */}
            <div className="space-y-4">
              {project.context && (
                <div className="border-l-2 border-[#334155] dark:border-slate-500 pl-4">
                  <p className="text-sm text-[#1F2937] dark:text-gray-300 font-medium leading-relaxed">
                    {project.context}
                  </p>
                </div>
              )}
              <div className="text-sm text-[#64748B] dark:text-gray-400 leading-relaxed space-y-3">
                {project.fullDescription.split("\n\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Technologies — prominently placed right after description */}
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="tech-tag px-2.5 py-1 text-xs bg-[rgba(51,65,85,0.07)] text-[#475569] dark:text-slate-400 dark:bg-gray-800/60 rounded-md border border-[rgba(51,65,85,0.15)] dark:border-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Problem / Solution / Result — compact horizontal blocks */}
            {(project.problem || project.solution || project.result) && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {project.problem && (
                  <div className="p-3.5 rounded-xl bg-[#F7F7F8] dark:bg-gray-800/50 border border-[#E5E7EB] dark:border-gray-800 border-l-2 border-l-amber-400/70 dark:border-l-amber-500/50">
                    <h4 className="text-[11px] font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400/80 mb-1.5">
                      Problème
                    </h4>
                    <p className="text-xs text-[#64748B] dark:text-gray-400 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                )}
                {project.solution && (
                  <div className="p-3.5 rounded-xl bg-[#F7F7F8] dark:bg-gray-800/50 border border-[#E5E7EB] dark:border-gray-800 border-l-2 border-l-blue-400/70 dark:border-l-blue-500/50">
                    <h4 className="text-[11px] font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400/80 mb-1.5">
                      Solution
                    </h4>
                    <p className="text-xs text-[#64748B] dark:text-gray-400 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                )}
                {project.result && (
                  <div className="p-3.5 rounded-xl bg-[#F7F7F8] dark:bg-gray-800/50 border border-[#E5E7EB] dark:border-gray-800 border-l-2 border-l-emerald-400/70 dark:border-l-emerald-500/50">
                    <h4 className="text-[11px] font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400/80 mb-1.5">
                      Résultat
                    </h4>
                    <p className="text-xs text-[#64748B] dark:text-gray-400 leading-relaxed">
                      {project.result}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Key Features — compact 2-column list */}
            {project.features.length > 0 && (
              <>
                <hr className="border-[#E5E7EB] dark:border-gray-800" />
                <div>
                  <h3 className="text-xs font-semibold text-[#1F2937] dark:text-white uppercase tracking-wider mb-2.5">
                    Fonctionnalités
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1">
                    {project.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 py-0.5"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#334155] dark:bg-slate-500 mt-1.5 shrink-0" />
                        <span className="text-xs text-[#64748B] dark:text-gray-400 leading-snug">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* What I learned */}
            <div>
              <h3 className="text-xs font-semibold text-[#1F2937] dark:text-white uppercase tracking-wider mb-2">
                Ce que j&apos;ai appris
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {project.learned.map((item, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 text-xs text-[#64748B] dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-lg font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Mobile Fixed Actions */}
        {hasActions && (
          <div className="md:hidden fixed bottom-0 left-0 right-0 p-3 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-[#E5E7EB] dark:border-gray-800 flex gap-2 z-20">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 bg-[#334155] text-white text-sm font-medium rounded-xl flex items-center justify-center gap-2 active:scale-95 transition-transform"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 bg-white dark:bg-gray-800 border border-[#E5E7EB] dark:border-gray-700 text-[#334155] dark:text-white text-sm font-medium rounded-xl flex items-center justify-center gap-2 active:scale-95 transition-transform"
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
                Démo
              </a>
            )}
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
