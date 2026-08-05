"use client";

import React from "react";
import Image from "next/image";
import { ME } from "@/data/profile";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center text-center px-4">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[#F7F7F8] dark:bg-gray-950">
        <div className="absolute left-[10%] top-[20%] h-[500px] w-[500px] rounded-full bg-[rgba(51,65,85,0.06)] blur-[120px]"></div>
        <div className="absolute right-[10%] bottom-[20%] h-[400px] w-[400px] rounded-full bg-[rgba(51,65,85,0.04)] blur-[120px]"></div>
      </div>

      {/* Profile Photo */}
      <div className="relative mb-6 md:mb-8 group animate-scaleIn">
        <div className="absolute -inset-1 bg-gradient-to-r from-[#334155] to-[#475569] rounded-full blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white dark:border-gray-900 shadow-xl shadow-slate-900/10">
          <Image
            src="/profile.jpg"
            alt="Nicolas Vandamme - Développeur Web PHP & Fullstack basé à Lille"
            width={192}
            height={192}
            priority
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Badge */}
      <span
        className="px-5 py-2 rounded-full text-sm font-medium bg-[#334155]/10 text-[#334155] dark:text-slate-300 border border-[#334155]/20 mb-8 backdrop-blur-sm animate-fadeInUp delay-100"
        style={{ opacity: 0, animationFillMode: "forwards" }}
      >
        Ambition : Devenir Développeur Fullstack 🚀
      </span>

      {/* Main heading */}
      <h1
        className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#1F2937] dark:text-white mb-6 animate-fadeInUp delay-200"
        style={{ opacity: 0, animationFillMode: "forwards" }}
      >
        Salut, moi c'est{" "}
        <span className="text-[#334155]">
          {ME.name}
        </span>
      </h1>

      {/* Bio */}
      <p
        className="max-w-2xl text-lg md:text-xl text-[#1F2937]/80 dark:text-gray-400 mb-12 leading-relaxed animate-fadeInUp delay-300"
        style={{ opacity: 0, animationFillMode: "forwards" }}
      >
        {ME.bio}
      </p>

      {/* CTA Buttons */}
      <div
        className="flex flex-col sm:flex-row gap-4 animate-fadeInUp delay-400"
        style={{ opacity: 0, animationFillMode: "forwards" }}
      >
        <a
          href="/cv-vandamme-nicolas.pdf"
          target="_blank"
          className="px-8 py-4 bg-[#334155] hover:bg-[#1E293B] text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-md shadow-slate-900/10"
        >
          Voir mon CV
        </a>
        <a
          href="#projects"
          className="px-8 py-4 bg-white dark:bg-gray-800/50 text-[#1F2937] dark:text-white font-semibold rounded-xl border border-[#E5E7EB] dark:border-gray-700 hover:bg-[#F7F7F8] dark:hover:bg-gray-800 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
        >
          Voir mes Projets
        </a>
      </div>

      {/* Scroll indicator - hidden on mobile */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-gray-400 dark:text-gray-500 animate-fadeInUp delay-700"
        style={{ opacity: 0, animationFillMode: "forwards" }}
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-5 h-8 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
