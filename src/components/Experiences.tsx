import React from "react";
import { TIMELINE } from "@/constants/data";

const Experience = () => {
  return (
    <section id="parcours" className="w-full py-24 bg-gray-950">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Parcours & Expériences
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto py-8">
          {/* Central line */}
          <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-indigo-500 to-gray-800 rounded-full"></div>

          {TIMELINE.map((item, index) => (
            <div
              key={index}
              className={`relative mb-16 last:mb-0 flex items-start md:items-center w-full ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Point on the line */}
              <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-blue-600 border-4 border-gray-950 z-10 shadow-[0_0_15px_rgba(37,99,235,0.6)]"></div>

              {/* Card content */}
              <div className="ml-16 md:ml-0 md:w-[44%] p-8 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-mono text-blue-400 uppercase tracking-widest">
                    {item.period}
                  </span>
                  <span
                    className={`text-xs px-3 py-1 rounded-full border font-medium ${
                      item.type === "work"
                        ? "border-green-500/30 text-green-400 bg-green-500/10"
                        : "border-purple-500/30 text-purple-400 bg-purple-500/10"
                    }`}
                  >
                    {item.type === "work" ? "Pro" : "Diplôme"}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  {item.title}
                </h3>
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

          {/* Starting point bubble */}
          <div className="relative mt-16 flex justify-center md:justify-center">
            <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-[0_0_25px_rgba(37,99,235,0.5)] border-4 border-gray-950 z-10">
                <span className="text-white text-lg">🚀</span>
              </div>
              <div className="mt-3 px-4 py-2 bg-gray-900/80 rounded-xl border border-blue-500/30 backdrop-blur-sm">
                <span className="text-sm font-medium text-blue-400 whitespace-nowrap">
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
