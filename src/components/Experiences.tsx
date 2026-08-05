"use client";

import React from "react";
import { TIMELINE } from "@/data/timeline";
import { useInView } from "@/hooks/useInView";

const Experience = () => {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      id="parcours"
      className="w-full py-16 md:py-24 bg-[#F7F7F8] dark:bg-gray-950"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <div
          className={`text-center mb-12 md:mb-16 ${
            isInView ? "animate-fadeInUp" : "opacity-0"
          }`}
        >
          <h2 className="text-2xl md:text-5xl font-bold text-[#1F2937] dark:text-white mb-4">
            Parcours &amp; Expériences
          </h2>
          <div className="h-1 w-20 bg-[#334155] mx-auto rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central line - positioned on left for mobile, center for desktop */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-4 w-0.5 md:w-1 bg-gradient-to-b from-[#334155] to-[#E5E7EB] dark:to-gray-800 rounded-full"></div>

          {TIMELINE.map((item, index) => (
            <div
              key={index}
              className={`relative mb-8 md:mb-16 ${
                index % 2 === 0 ? "md:flex md:flex-row-reverse" : "md:flex"
              }`}
            >
              {/* Point on the line */}
              <div
                className={`absolute left-4 md:left-1/2 top-6 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 w-3 h-3 md:w-5 md:h-5 rounded-full bg-[#334155] border-2 md:border-4 border-white dark:border-gray-950 z-10 shadow-sm ${
                  isInView ? "animate-scaleIn" : "opacity-0"
                }`}
                style={{
                  animationDelay: isInView ? `${index * 150}ms` : "0ms",
                  opacity: 0,
                  animationFillMode: "forwards",
                }}
              ></div>

              {/* Card content */}
              <div
                className={`ml-10 md:ml-0 md:w-[44%] p-5 md:p-8 bg-white dark:bg-gray-900/50 rounded-xl md:rounded-2xl border border-[#E5E7EB] dark:border-gray-800 hover:border-[#334155] transition-all duration-300 backdrop-blur-sm hover:shadow-md ${
                  isInView
                    ? index % 2 === 0
                      ? "md:animate-slideInRight animate-fadeInUp"
                      : "md:animate-slideInLeft animate-fadeInUp"
                    : "opacity-0"
                }`}
                style={{
                  animationDelay: isInView ? `${index * 150 + 100}ms` : "0ms",
                  opacity: 0,
                  animationFillMode: "forwards",
                }}
              >
                {/* Header with period and badge */}
                <div className="flex flex-wrap items-center gap-2 mb-3 md:mb-4">
                  <span className="tech-tag text-[10px] md:text-sm font-medium text-[#475569] dark:text-slate-400 uppercase tracking-wider md:tracking-widest">
                    {item.period}
                  </span>
                  <span
                    className={`text-[10px] md:text-xs px-2 md:px-3 py-0.5 md:py-1 rounded-full border font-medium ${
                      item.type === "work"
                        ? "border-green-500/30 text-green-600 dark:text-green-400 bg-green-500/10"
                        : "border-purple-500/30 text-purple-600 dark:text-purple-400 bg-purple-500/10"
                    }`}
                  >
                    {item.type === "work" ? "Pro" : "Diplôme"}
                  </span>
                </div>

                <h3 className="text-lg md:text-2xl font-bold text-[#1F2937] dark:text-white mb-1 md:mb-2">
                  {item.title}
                </h3>
                <p className="text-[#64748B] dark:text-gray-400 text-sm md:text-base mb-4 md:mb-6 font-medium">
                  {item.company}
                </p>

                <ul className="space-y-2 md:space-y-3">
                  {item.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="text-[#64748B] dark:text-gray-400 text-xs md:text-sm flex items-start leading-relaxed"
                    >
                      <span className="mr-2 md:mr-3 mt-1.5 h-1.5 w-1.5 md:h-1.5 md:w-1.5 rounded-full bg-[#334155] shrink-0"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Empty space for alternating layout on desktop */}
              <div className="hidden md:block md:w-[44%]"></div>
            </div>
          ))}

          {/* Starting point bubble */}
          <div className="relative mt-0 md:mt-0 pb-4">
            <div
              className={`flex items-center md:flex-col md:absolute md:left-1/2 md:-translate-x-1/2 ${
                isInView ? "animate-scaleIn" : "opacity-0"
              }`}
              style={{
                animationDelay: isInView
                  ? `${TIMELINE.length * 150 + 200}ms`
                  : "0ms",
                opacity: 0,
                animationFillMode: "forwards",
              }}
            >
              {/* Circle - aligned with timeline on mobile */}
              <div className="absolute left-4 md:relative md:left-auto -translate-x-1/2 md:translate-x-0 w-10 h-10 md:w-16 md:h-16 rounded-full bg-[#334155] flex items-center justify-center shadow-sm border-2 md:border-4 border-white dark:border-gray-950 z-10">
                <span className="text-white text-sm md:text-lg">🚀</span>
              </div>
              {/* Text label */}
              <div className="ml-10 md:ml-0 md:mt-3 px-3 md:px-4 py-2 bg-white dark:bg-gray-900/80 rounded-xl border border-[#E5E7EB] dark:border-slate-700/50 backdrop-blur-sm">
                <span className="text-xs md:text-sm font-medium text-[#475569] dark:text-slate-400 whitespace-nowrap">
                  Début de mon parcours
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
