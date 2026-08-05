"use client";

import React from "react";
import { SKILLS } from "@/data/skills";
import { useInView } from "@/hooks/useInView";

// ─── Design system — one config per skill category ───────────────────────────
// Order must match SKILLS array: [Back-end, Front-end, CMS, SEO]
const skillConfig = [
  {
    // Back-end & Architecture → Purple #7C3AED
    color:        "#7C3AED",
    cardGradient: "from-[rgba(124,58,237,0.07)] to-transparent",
    borderHover:  "group-hover:border-[rgba(124,58,237,0.40)]",
    shadowHover:  "group-hover:shadow-[rgba(124,58,237,0.10)]",
    badge: {
      bg:     "bg-[rgba(124,58,237,0.09)] hover:bg-[rgba(124,58,237,0.18)]",
      text:   "text-[#7C3AED]",
      border: "border-[rgba(124,58,237,0.25)]",
    },
  },
  {
    // Front-end & Design → Blue #2563EB
    color:        "#2563EB",
    cardGradient: "from-[rgba(37,99,235,0.07)] to-transparent",
    borderHover:  "group-hover:border-[rgba(37,99,235,0.40)]",
    shadowHover:  "group-hover:shadow-[rgba(37,99,235,0.10)]",
    badge: {
      bg:     "bg-[rgba(37,99,235,0.09)] hover:bg-[rgba(37,99,235,0.18)]",
      text:   "text-[#2563EB]",
      border: "border-[rgba(37,99,235,0.25)]",
    },
  },
  {
    // CMS & E-commerce → Amber #D97706
    color:        "#D97706",
    cardGradient: "from-[rgba(217,119,6,0.07)] to-transparent",
    borderHover:  "group-hover:border-[rgba(217,119,6,0.40)]",
    shadowHover:  "group-hover:shadow-[rgba(217,119,6,0.10)]",
    badge: {
      bg:     "bg-[rgba(217,119,6,0.09)] hover:bg-[rgba(217,119,6,0.18)]",
      text:   "text-[#D97706]",
      border: "border-[rgba(217,119,6,0.25)]",
    },
  },
  {
    // SEO & Outils → Green #059669
    color:        "#059669",
    cardGradient: "from-[rgba(5,150,105,0.07)] to-transparent",
    borderHover:  "group-hover:border-[rgba(5,150,105,0.40)]",
    shadowHover:  "group-hover:shadow-[rgba(5,150,105,0.10)]",
    badge: {
      bg:     "bg-[rgba(5,150,105,0.09)] hover:bg-[rgba(5,150,105,0.18)]",
      text:   "text-[#059669]",
      border: "border-[rgba(5,150,105,0.25)]",
    },
  },
];

// ─── Custom SVG icons — strokes match category color ─────────────────────────
const SkillIcons: { [key: string]: (color: string) => React.ReactNode } = {
  "Back-end & Architecture": (color) => (
    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7L12 12L22 7L12 2Z"    stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 17L12 22L22 17"              stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" />
      <path d="M2 12L12 17L22 12"              stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.45" />
    </svg>
  ),
  "Front-end & Design": (color) => (
    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke={color} strokeWidth="2" />
      <path d="M3 9H21"                        stroke={color} strokeWidth="2" strokeOpacity="0.7" />
      <path d="M9 21V9"                         stroke={color} strokeWidth="2" strokeOpacity="0.45" />
      <circle cx="6"  cy="6" r="1"             fill={color} fillOpacity="0.9" />
      <circle cx="9"  cy="6" r="1"             fill={color} fillOpacity="0.6" />
      <circle cx="12" cy="6" r="1"             fill={color} fillOpacity="0.35" />
    </svg>
  ),
  "CMS & E-commerce": (color) => (
    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z"
        stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      />
      <path d="M3 6H21"                        stroke={color} strokeWidth="2" strokeOpacity="0.7" />
      <path
        d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10"
        stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.55"
      />
    </svg>
  ),
  "SEO & Outils": (color) => (
    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 20V10" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 20V4"  stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" />
      <path d="M6 20V14"  stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.45" />
      <circle cx="18" cy="7" r="3" stroke={color} strokeWidth="2" strokeOpacity="0.8" />
    </svg>
  ),
};

// ─── Component ────────────────────────────────────────────────────────────────
const Skills = () => {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      id="skills"
      className="relative w-full py-16 md:py-28 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#F7F7F8] dark:bg-gray-900/30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[rgba(51,65,85,0.04)] rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[rgba(51,65,85,0.03)] rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4 md:px-6">
        {/* Section header */}
        <div
          className={`text-center mb-12 md:mb-20 ${
            isInView ? "animate-fadeInUp" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-[40px] font-bold text-[#1F2937] dark:text-white mb-4">
            Mes Compétences
          </h2>
          <div className="h-1 w-20 bg-[#334155] mx-auto rounded-full"></div>
          <p className="mt-6 text-[#64748B] dark:text-gray-400 max-w-2xl mx-auto">
            Un mix de maîtrise technique acquise en alternance et de veille
            technologique constante.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {SKILLS.map((skill, index) => {
            const cfg = skillConfig[index];
            return (
              <div
                key={index}
                className={`relative p-6 md:p-8 bg-white dark:bg-gray-900/60 rounded-2xl border border-[#E5E7EB] dark:border-gray-700/50
                  ${cfg.borderHover} hover:shadow-xl ${cfg.shadowHover}
                  transition-all duration-500 group
                  shadow-[rgba(15,23,42,0.08)]
                  ${isInView ? "animate-fadeInUp" : "opacity-0"}`}
                style={{
                  animationDelay: isInView ? `${(index + 1) * 100}ms` : "0ms",
                  opacity: 0,
                  animationFillMode: "forwards",
                }}
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${cfg.cardGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
                />

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden rounded-tr-2xl">
                  <div
                    className={`absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br ${cfg.cardGradient} opacity-40 rotate-45`}
                  />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div
                      className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center
                        group-hover:scale-110 transition-transform duration-500
                        bg-[#F7F7F8] dark:bg-gray-800
                        shadow-[rgba(15,23,42,0.08)] shadow-sm"
                    >
                      {SkillIcons[skill.title]?.(cfg.color) ?? (
                        <span className="text-3xl">{skill.icon}</span>
                      )}
                    </div>
                    {/* Floating dot indicator */}
                    <div
                      className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-white dark:border-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ backgroundColor: cfg.color }}
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-lg md:text-xl font-semibold text-[#1F2937] dark:text-white mb-2 transition-colors duration-300"
                    style={{ color: undefined }}
                  >
                    {skill.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#64748B] dark:text-gray-400 mb-6 leading-relaxed">
                    {skill.description}
                  </p>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-2">
                    {skill.techs.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`tech-tag px-3 py-1.5 text-xs ${cfg.badge.bg} ${cfg.badge.text} rounded-lg border ${cfg.badge.border} transition-all duration-300 cursor-default`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ backgroundColor: cfg.color, opacity: 0 }}
                />
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <div
          className={`mt-12 md:mt-16 text-center ${
            isInView ? "animate-fadeInUp" : "opacity-0"
          }`}
          style={{
            animationDelay: isInView ? "600ms" : "0ms",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          <p className="text-sm text-[#64748B] dark:text-gray-500">
            <span className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#059669] animate-pulse" />
              En apprentissage continu
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
