import React from "react";
import { ME } from "@/constants/data";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center text-center px-4">
      <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 mb-6 animate-pulse">
        Ambition : Développeur Fullstack 🚀
      </span>

      <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
        Salut, moi c'est{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
          {ME.name}
        </span>
      </h1>

      <p className="max-w-2xl text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10">
        {ME.bio}
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="#contact"
          className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/30"
        >
          Me contacter
        </a>
        <a
          href="/CV_VANDAMME_Nicolas.pdf"
          target="_blank"
          className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 hover:scale-105 transition-all duration-300 shadow-sm"
        >
          Voir mon CV
        </a>
      </div>

      <div className="absolute inset-0 -z-10 bg-white dark:bg-gray-950">
        <div className="absolute left-[10%] top-[20%] h-[400px] w-[400px] rounded-full bg-purple-500/30 blur-[100px]"></div>
        <div className="absolute right-[10%] bottom-[20%] h-[350px] w-[350px] rounded-full bg-blue-500/30 blur-[100px]"></div>
      </div>
    </section>
  );
};

export default Hero;
