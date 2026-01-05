import React from "react";
import { ME } from "@/constants/data";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center text-center px-4">
      {/* Background gradient effects */}
      <div className="absolute inset-0 -z-10 bg-gray-950">
        <div className="absolute left-[10%] top-[20%] h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[120px] animate-pulse"></div>
        <div className="absolute right-[10%] bottom-[20%] h-[400px] w-[400px] rounded-full bg-blue-600/20 blur-[120px] animate-pulse"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-indigo-600/10 blur-[100px]"></div>
      </div>

      {/* Profile Photo */}
      <div className="relative mb-8 group">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-gray-900 shadow-2xl shadow-indigo-500/25">
          <img
            src="/profile.jpg"
            alt="Nicolas Vandamme"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Badge */}
      <span className="px-5 py-2 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-8 backdrop-blur-sm">
        Ambition : Devenir Développeur Fullstack 🚀
      </span>

      {/* Main heading */}
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6">
        Salut, moi c'est{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">
          {ME.name}
        </span>
      </h1>

      {/* Bio */}
      <p className="max-w-2xl text-lg md:text-xl text-gray-400 mb-12 leading-relaxed">
        {ME.bio}
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="#contact"
          className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-indigo-500 hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/25"
        >
          Me contacter
        </a>
        <a
          href="/cv_vandamme_nicolas.pdf"
          target="_blank"
          className="px-8 py-4 bg-gray-800/50 text-white font-semibold rounded-xl border border-gray-700 hover:bg-gray-800 hover:border-gray-600 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
        >
          Voir mon CV
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-5 h-8 border-2 border-gray-600 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-gray-500 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
