"use client";

import React from "react";
import Image from "next/image";

const MobilePhotoSection = () => (
  <div className="flex flex-col items-center w-full max-w-md mx-auto py-3 px-1">
    <div className="relative w-full">
      {/* Background tilted card - offset & rotated to be clearly visible */}
      <div 
        className="absolute -inset-1 bg-[#CBD5E1]/60 dark:bg-gray-800/70 rounded-[28px] border border-[#94A3B8]/40 dark:border-gray-700 transform rotate-2 transition-transform duration-500" 
        style={{ zIndex: 1 }}
      />

      {/* Main Photo */}
      <div 
        className="relative w-full aspect-[4/5] rounded-[26px] overflow-hidden shadow-xl border border-[#E5E7EB] dark:border-gray-800 bg-white dark:bg-gray-800"
        style={{ zIndex: 2 }}
      >
        <Image
          src="/profile.jpg"
          alt="Nicolas Vandamme - Développeur Web"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 500px"
          className="object-cover object-top"
        />
      </div>

      {/* Small Badge: Disponible */}
      <div 
        className="absolute bottom-3 left-3 bg-[#1F2937]/90 dark:bg-gray-900/90 text-white backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-gray-700/50 shadow-lg flex items-center gap-2 z-20"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <div>
          <span className="text-xs font-semibold leading-tight block">Disponible</span>
          <span className="text-[9px] text-gray-400 font-normal leading-none block">Réponse rapide</span>
        </div>
      </div>
    </div>

    {/* Compact Tech Badges under photo on mobile */}
    <div className="mt-4 w-full grid grid-cols-3 gap-2.5">
      <div className="flex flex-col items-center p-2.5 rounded-xl bg-white dark:bg-gray-900 border border-[#E5E7EB] dark:border-gray-800 shadow-sm text-center">
        <span className="text-xs font-bold text-[#1F2937] dark:text-white">CMS</span>
        <span className="text-[10px] text-[#64748B] dark:text-gray-400 truncate w-full mt-0.5">WordPress</span>
      </div>
      <div className="flex flex-col items-center p-2.5 rounded-xl bg-white dark:bg-gray-900 border border-[#E5E7EB] dark:border-gray-800 shadow-sm text-center">
        <span className="text-xs font-bold text-[#1F2937] dark:text-white">Backend</span>
        <span className="text-[10px] text-[#64748B] dark:text-gray-400 truncate w-full mt-0.5">PHP / Laravel</span>
      </div>
      <div className="flex flex-col items-center p-2.5 rounded-xl bg-white dark:bg-gray-900 border border-[#E5E7EB] dark:border-gray-800 shadow-sm text-center">
        <span className="text-xs font-bold text-[#1F2937] dark:text-white">Frontend</span>
        <span className="text-[10px] text-[#64748B] dark:text-gray-400 truncate w-full mt-0.5">React / JS</span>
      </div>
    </div>
  </div>
);

const DesktopPhotoSection = () => (
  <div className="relative w-full max-w-[390px] py-4 mx-auto">
    <div 
      className="absolute inset-0 bg-[#CBD5E1]/60 dark:bg-gray-800 rounded-[32px] border border-[#94A3B8]/40 dark:border-gray-700 transform rotate-6 scale-[0.98] transition-transform duration-500 hover:rotate-3" 
      style={{ zIndex: 1 }}
    />

    <div 
      className="relative w-full aspect-[4/5] rounded-[30px] overflow-hidden shadow-2xl shadow-slate-900/15 border border-[#E5E7EB] dark:border-gray-800 bg-white dark:bg-gray-800"
      style={{ zIndex: 2 }}
    >
      <Image
        src="/profile.jpg"
        alt="Nicolas Vandamme - Développeur Web"
        fill
        priority
        sizes="400px"
        className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
      />
    </div>

    {/* Card 1: Disponible */}
    <div 
      className="absolute bottom-2 -left-6 bg-[#1F2937]/95 dark:bg-gray-900/95 text-white backdrop-blur-md px-3.5 py-2 rounded-xl border border-gray-700/50 shadow-xl flex items-center gap-2.5 animate-fadeInUp z-30"
      style={{ animationDelay: "600ms", animationFillMode: "forwards" }}
    >
      <div className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
      </div>
      <div>
        <div className="text-xs font-semibold leading-tight">Disponible</div>
        <div className="text-[10px] text-gray-400 font-normal">Réponse rapide</div>
      </div>
    </div>

    {/* Card 2: Tech stack */}
    <div 
      className="absolute top-12 -right-20 lg:-right-24 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md p-3.5 rounded-2xl border border-[#E5E7EB] dark:border-gray-800 shadow-xl shadow-slate-900/10 w-52 animate-fadeInUp z-30 hover:-translate-y-1 transition-transform duration-300"
      style={{ animationDelay: "700ms", animationFillMode: "forwards" }}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-8 rounded-lg bg-[rgba(37,99,235,0.09)] flex items-center justify-center shrink-0">
          <svg className="w-4 h-4 text-[#2563EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <div className="text-xs font-semibold text-[#1F2937] dark:text-white">CMS</div>
          <div className="tech-tag text-[10px] text-[#64748B] dark:text-gray-400">WordPress / Prestashop</div>
        </div>
      </div>

      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-8 rounded-lg bg-[rgba(124,58,237,0.09)] flex items-center justify-center shrink-0">
          <svg className="w-4 h-4 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2-2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2" />
          </svg>
        </div>
        <div>
          <div className="text-xs font-semibold text-[#1F2937] dark:text-white">Backend</div>
          <div className="tech-tag text-[10px] text-[#64748B] dark:text-gray-400">PHP / Laravel</div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-[rgba(5,150,105,0.09)] flex items-center justify-center shrink-0">
          <svg className="w-4 h-4 text-[#059669]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </div>
        <div>
          <div className="text-xs font-semibold text-[#1F2937] dark:text-white">Frontend</div>
          <div className="tech-tag text-[10px] text-[#64748B] dark:text-gray-400">HTML / JS / React</div>
        </div>
      </div>
    </div>
  </div>
);

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen pt-28 md:pt-36 pb-16 overflow-hidden flex items-center bg-[#F7F7F8] dark:bg-gray-950">
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute right-[10%] top-[15%] w-[600px] h-[600px] rounded-full bg-[rgba(51,65,85,0.05)] blur-[140px]" />
        <div className="absolute left-[5%] bottom-[10%] w-[450px] h-[450px] rounded-full bg-[rgba(51,65,85,0.03)] blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div 
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#334155]/10 text-[#334155] dark:text-slate-300 border border-[#334155]/15 mb-6 animate-fadeInUp"
              style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
            >
              <span>👋</span>
              <span>Bonjour, je suis Nicolas</span>
            </div>

            {/* Mobile Photo Component (between Bonjour badge and Développeur Web) */}
            <div className="w-full my-4 lg:hidden flex justify-center">
              <MobilePhotoSection />
            </div>

            <h1 
              className="text-5xl sm:text-6xl lg:text-[64px] font-extrabold tracking-tight text-[#1F2937] dark:text-white leading-[1.08] mb-6 animate-fadeInUp"
              style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
            >
              Développeur <br />
              <span className="text-[#334155] dark:text-slate-300">Web</span>
            </h1>

            <p 
              className="text-lg md:text-xl text-[#64748B] dark:text-gray-400 max-w-xl leading-relaxed mb-8 font-normal animate-fadeInUp"
              style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
            >
              Je conçois des sites web modernes, performants et optimisés pour répondre aux besoins des entreprises.
            </p>

            <div 
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-12 animate-fadeInUp"
              style={{ animationDelay: "400ms", animationFillMode: "forwards" }}
            >
              <a
                href="#projects"
                className="px-7 py-3.5 bg-[#334155] hover:bg-[#1E293B] text-white font-semibold text-base rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-[rgba(15,23,42,0.08)] hover:shadow-md hover:-translate-y-0.5"
              >
                <span>Voir mes projets</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a
                href="/cv-vandamme-nicolas.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 bg-white dark:bg-gray-900 border border-[#CBD5E1] dark:border-gray-700 hover:bg-[#F1F5F9] dark:hover:bg-gray-800 text-[#334155] dark:text-slate-200 font-semibold text-base rounded-xl transition-all duration-200 flex items-center justify-center gap-2 hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4 text-[#475569] dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Télécharger mon CV</span>
              </a>
            </div>

            <div 
              className="grid grid-cols-3 gap-3 sm:gap-4 w-full max-w-xl animate-fadeInUp"
              style={{ animationDelay: "500ms", animationFillMode: "forwards" }}
            >
              <div className="p-4 bg-white dark:bg-gray-900/90 rounded-2xl border border-[#E5E7EB] dark:border-gray-800 shadow-[rgba(15,23,42,0.06)] hover:shadow-md hover:border-[#CBD5E1] transition-all duration-200">
                <div className="w-8 h-8 rounded-lg bg-[#334155]/10 flex items-center justify-center mb-2.5">
                  <svg className="w-4 h-4 text-[#334155] dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <div className="font-bold text-lg text-[#1F2937] dark:text-white leading-tight">Bac+5</div>
                <div className="text-xs text-[#64748B] dark:text-gray-400 mt-0.5 font-normal">Architecte Web</div>
              </div>

              <div className="p-4 bg-white dark:bg-gray-900/90 rounded-2xl border border-[#E5E7EB] dark:border-gray-800 shadow-[rgba(15,23,42,0.06)] hover:shadow-md hover:border-[#CBD5E1] transition-all duration-200">
                <div className="w-8 h-8 rounded-lg bg-[#334155]/10 flex items-center justify-center mb-2.5">
                  <svg className="w-4 h-4 text-[#334155] dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v4m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="font-bold text-lg text-[#1F2937] dark:text-white leading-tight">+ de 3 ans</div>
                <div className="text-xs text-[#64748B] dark:text-gray-400 mt-0.5 font-normal">Expérience</div>
              </div>

              <div className="p-4 bg-white dark:bg-gray-900/90 rounded-2xl border border-[#E5E7EB] dark:border-gray-800 shadow-[rgba(15,23,42,0.06)] hover:shadow-md hover:border-[#CBD5E1] transition-all duration-200">
                <div className="w-8 h-8 rounded-lg bg-[#334155]/10 flex items-center justify-center mb-2.5">
                  <svg className="w-4 h-4 text-[#334155] dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="font-bold text-sm sm:text-base text-[#1F2937] dark:text-white leading-tight truncate">Hauts-de-France</div>
                <div className="text-xs text-[#64748B] dark:text-gray-400 mt-0.5 font-normal truncate">Lille</div>
              </div>
            </div>
          </div>

          {/* Desktop Photo Component (Column 5) */}
          <div className="hidden lg:flex lg:col-span-5 relative justify-center items-center mt-12 lg:mt-0">
            <DesktopPhotoSection />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
