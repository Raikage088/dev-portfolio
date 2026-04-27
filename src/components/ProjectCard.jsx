import { useState } from "react";
import { ExternalLink, ChevronUp } from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";

export const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const MAX_TECH_VALUE = 3;
  const techs = project.technologies || [];
  const visibleTechs = techs.slice(0, MAX_TECH_VALUE);
  const hiddenTechs = techs.slice(MAX_TECH_VALUE);

  return (
    <div className="group flex flex-col bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:scale-105 transition-all duration-300 max-w-sm mx-auto">
      {/* Project Image - Placeholder */}
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105 will-change-transform"
        />
      </div>

      {/* Content - Placeholder */}
      <div className="flex flex-col p-6 gap-2 flex-1">
        {/* Title */}
        <h3 className="text-xl font-semibold text-center text-gray-900">
          {project.title}
        </h3>
        {/* Description */}
        <p className="text-gray-500 text-center text-sm leading-relaxed">
          {project.description}
        </p>
        {/* Technologies - Placeholder */}
        <div className="flex flex-wrap justify-center gap-4 mt-2">
          {visibleTechs.map((tech, index) => (
            <span
              key={`visible-${tech}-${index}`}
              className="flex items-center justify-center px-3 py-2 font-bold bg-gray-100 text-gray-700 text-xs rounded-lg"
            >
              {tech}
            </span>
          ))}
          {hiddenTechs.length > 0 && !isExpanded && (
            <button
              onClick={() => setIsExpanded(true)}
              className="flex items-center justify-center py-2 font-bold text-gray-500 text-xs hover:text-gray-700 transition-colors"
            >
              +{hiddenTechs.length} more
            </button>
          )}
          {isExpanded &&
            hiddenTechs.map((tech, index) => (
              <span
                key={`hidden-${tech}-${index}`}
                className="flex items-center justify-center px-3 py-2 font-bold bg-gray-100 text-gray-700 text-xs rounded-lg"
              >
                {tech}
              </span>
            ))}

          {isExpanded && (
            <button
              onClick={() => setIsExpanded(false)}
              className="flex items-center justify-center py-2 font-bold text-gray-500 text-xs hover:text-gray-700 transition-colors"
            >
              <ChevronUp size={10} />
            </button>
          )}
        </div>
        {/* Action Buttons - Placeholder */}
        <div className="flex justify-center gap-3 mt-auto pt-4">
          {/* GitHub Button */}
          <a
            href={project.githubUrl || "#"}
            className={`flex items-center gap-2 px-4 py-2 border rounded-lg text-sm transition-colors duration-200 
            ${
              project.githubUrl
                ? "border-gray-300 text-gray-700 hover:bg-gray-50"
                : "border-gray-200 text-gray-400 bg-gray-50 pointer-events-none cursor-not-allowed opacity-50"
            }`}
            aria-disabled={!project.githubUrl}
            tabIndex={!project.githubUrl ? -1 : undefined}
          >
            <GithubIcon className="w-5 h-auto" />
            Github Repo
          </a>

          {/* Live Demo Button */}
          <a
            href={project.liveUrl || "#"}
            className={`flex items-center gap-2 px-4 py-2 border rounded-lg text-sm transition-colors duration-200 ${
              project.liveUrl
                ? "border-gray-300 text-gray-700 hover:bg-gray-50"
                : "border-gray-200 text-gray-400 bg-gray-50 pointer-events-none cursor-not-allowed opacity-50"
            }`}
            aria-disabled={!project.liveUrl}
            tabIndex={!project.liveUrl ? -1 : undefined}
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};
