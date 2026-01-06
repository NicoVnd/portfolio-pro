import React from "react";
import { SKILLS } from "@/constants/data";

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full py-24 bg-gray-100/50 dark:bg-gray-900/30"
    >
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((skill, index) => (
            <div
              key={index}
              className="p-8 bg-white dark:bg-gray-900/50 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group backdrop-blur-sm"
            >
              {/* Icon */}
              <div className="text-4xl mb-5 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {skill.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-500 dark:text-gray-500 mb-6 leading-relaxed">
                {skill.description}
              </p>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2">
                {skill.techs.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-lg border border-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
