"use client";

import React from "react";
import { SKILLS } from "@/data/skills";
import { useInView } from "@/hooks/useInView";

// Custom SVG icons for each skill category
const SkillIcons: { [key: string]: React.ReactNode } = {
  "Back-end & Architecture": (
    <svg
      className="w-10 h-10"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L2 7L12 12L22 7L12 2Z"
        className="stroke-blue-500 group-hover:stroke-blue-400"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 17L12 22L22 17"
        className="stroke-indigo-500 group-hover:stroke-indigo-400"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 12L12 17L22 12"
        className="stroke-purple-500 group-hover:stroke-purple-400"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  "Front-end & Design": (
    <svg
      className="w-10 h-10"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="2"
        className="stroke-blue-500 group-hover:stroke-blue-400"
        strokeWidth="2"
      />
      <path
        d="M3 9H21"
        className="stroke-indigo-500 group-hover:stroke-indigo-400"
        strokeWidth="2"
      />
      <path
        d="M9 21V9"
        className="stroke-purple-500 group-hover:stroke-purple-400"
        strokeWidth="2"
      />
      <circle
        cx="6"
        cy="6"
        r="1"
        className="fill-pink-500 group-hover:fill-pink-400"
      />
      <circle
        cx="9"
        cy="6"
        r="1"
        className="fill-yellow-500 group-hover:fill-yellow-400"
      />
      <circle
        cx="12"
        cy="6"
        r="1"
        className="fill-green-500 group-hover:fill-green-400"
      />
    </svg>
  ),
  "CMS & E-commerce": (
    <svg
      className="w-10 h-10"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z"
        className="stroke-blue-500 group-hover:stroke-blue-400"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 6H21"
        className="stroke-indigo-500 group-hover:stroke-indigo-400"
        strokeWidth="2"
      />
      <path
        d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10"
        className="stroke-purple-500 group-hover:stroke-purple-400"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  "SEO & Outils": (
    <svg
      className="w-10 h-10"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 20V10"
        className="stroke-blue-500 group-hover:stroke-blue-400"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 20V4"
        className="stroke-indigo-500 group-hover:stroke-indigo-400"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 20V14"
        className="stroke-purple-500 group-hover:stroke-purple-400"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="18"
        cy="7"
        r="3"
        className="stroke-pink-500 group-hover:stroke-pink-400"
        strokeWidth="2"
      />
    </svg>
  ),
};

// Gradient colors for each card
const cardGradients = [
  "from-blue-500/10 via-indigo-500/5 to-transparent",
  "from-purple-500/10 via-pink-500/5 to-transparent",
  "from-emerald-500/10 via-teal-500/5 to-transparent",
  "from-orange-500/10 via-rose-500/5 to-transparent",
];

const borderGradients = [
  "group-hover:border-blue-500/50",
  "group-hover:border-purple-500/50",
  "group-hover:border-emerald-500/50",
  "group-hover:border-orange-500/50",
];

const glowColors = [
  "group-hover:shadow-blue-500/20",
  "group-hover:shadow-purple-500/20",
  "group-hover:shadow-emerald-500/20",
  "group-hover:shadow-orange-500/20",
];

const badgeColors = [
  {
    bg: "bg-blue-500/10 hover:bg-blue-500/20",
    text: "text-blue-400",
    border: "border-blue-500/30",
  },
  {
    bg: "bg-purple-500/10 hover:bg-purple-500/20",
    text: "text-purple-400",
    border: "border-purple-500/30",
  },
  {
    bg: "bg-emerald-500/10 hover:bg-emerald-500/20",
    text: "text-emerald-400",
    border: "border-emerald-500/30",
  },
  {
    bg: "bg-orange-500/10 hover:bg-orange-500/20",
    text: "text-orange-400",
    border: "border-orange-500/30",
  },
];

const Skills = () => {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      id="skills"
      className="relative w-full py-16 md:py-28 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gray-100/50 dark:bg-gray-900/30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-indigo-500/3 to-transparent rounded-full" />

      <div className="container relative mx-auto px-4 md:px-6">
        {/* Section header */}
        <div
          className={`text-center mb-12 md:mb-20 ${
            isInView ? "animate-fadeInUp" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Mes Compétences
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Un mix de maîtrise technique acquise en alternance et de veille
            technologique constante.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {SKILLS.map((skill, index) => (
            <div
              key={index}
              className={`relative p-6 md:p-8 bg-white/80 dark:bg-gray-900/60 rounded-2xl md:rounded-3xl border border-gray-200/50 dark:border-gray-700/50 ${
                borderGradients[index]
              } hover:shadow-2xl ${
                glowColors[index]
              } transition-all duration-500 group backdrop-blur-xl ${
                isInView ? "animate-fadeInUp" : "opacity-0"
              }`}
              style={{
                animationDelay: isInView ? `${(index + 1) * 100}ms` : "0ms",
                opacity: 0,
                animationFillMode: "forwards",
              }}
            >
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cardGradients[index]} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl md:rounded-3xl`}
              />

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden rounded-tr-2xl md:rounded-tr-3xl">
                <div
                  className={`absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br ${cardGradients[index]} opacity-50 rotate-45`}
                />
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon container */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    {SkillIcons[skill.title] || (
                      <span className="text-3xl">{skill.icon}</span>
                    )}
                  </div>
                  {/* Floating indicator */}
                  <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 border-2 border-white dark:border-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:bg-clip-text transition-all duration-300">
                  {skill.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                  {skill.description}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2">
                  {skill.techs.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1.5 text-xs font-medium ${badgeColors[index].bg} ${badgeColors[index].text} rounded-lg border ${badgeColors[index].border} transition-all duration-300 cursor-default`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom glow line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Bottom decorative text */}
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
          <p className="text-sm text-gray-500 dark:text-gray-500">
            <span className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              En apprentissage continu
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
