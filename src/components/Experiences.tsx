import React from "react";
import { TIMELINE } from "@/constants/data";

const Experience = () => {
  return (
    <section id="parcours" className="py-24 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Parcours & Expériences</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="relative max-w-5xl mx-auto py-8">
          {/* Ligne centrale de la timeline */}
          <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-indigo-500 to-gray-800 rounded-full"></div>

          {TIMELINE.map((item, index) => (
            <div
              key={index}
              className={`relative mb-16 last:mb-0 flex items-start md:items-center w-full ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Point sur la ligne */}
              <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-blue-600 border-4 border-black z-10 shadow-[0_0_15px_rgba(37,99,235,0.8)]"></div>

              {/* Contenu de la carte */}
              <div className="ml-16 md:ml-0 md:w-[44%] p-8 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-mono text-blue-400 uppercase tracking-widest">
                    {item.period}
                  </span>
                  <span
                    className={`text-xs px-3 py-1 rounded-full border font-medium ${
                      item.type === "work"
                        ? "border-green-500/50 text-green-400 bg-green-500/10"
                        : "border-purple-500/50 text-purple-400 bg-purple-500/10"
                    }`}
                  >
                    {item.type === "work" ? "Pro" : "Diplôme"}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-base mb-6 font-medium">
                  {item.company}
                </p>

                <ul className="space-y-3">
                  {item.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="text-gray-400 text-sm flex items-start leading-relaxed"
                    >
                      <span className="text-blue-500 mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
