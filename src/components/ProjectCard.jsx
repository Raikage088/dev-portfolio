import React from "react";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";

export const ProjectCard = ({ project }) => {
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
        <div className="flex flex-wrap justify-center gap-2 mt-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="flex items-center justify-center px-3 py-2 font-bold bg-gray-100 text-gray-700 text-xs rounded-lg"
            >
              {tech}
            </span>
          ))}
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
