import React from "react";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";

export const ProjectCard = () => {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:scale-105 transition-all duration-300 max-w-sm mx-auto">
      {/* Project Image - Placeholder */}
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
          alt="Project placeholder"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content - Placeholder */}
      <div className="flex flex-col p-6 gap-2 flex-1">
        {/* Title */}
        <h3 className="text-xl font-semibold text-center text-gray-900">
          Project Title
        </h3>
        {/* Description */}
        <p className="text-gray-500 text-center text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        {/* Technologies - Placeholder */}
        <div className="flex flex-wrap justify-center gap-2 mt-2">
          <span className="flex items-center justify-center px-3 py-2 font-bold bg-gray-100 text-gray-700 text-xs rounded-lg">
            React
          </span>
          <span className="flex items-center justify-center px-3 py-2 font-bold bg-gray-100 text-gray-700 text-xs rounded-lg">
            Node.js
          </span>
          <span className="flex items-center justify-center px-3 py-2 font-bold bg-gray-100 text-gray-700 text-xs rounded-lg">
            Tailwind CSS
          </span>
        </div>

        {/* Action Buttons - Placeholder */}
        <div className="flex justify-center gap-3 mt-auto pt-4">
          <a
            href="#"
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 text-sm hover:bg-gray-50 transition-colors duration-200"
          >
            <GithubIcon className="w-5 h-auto" />
            Github Repo
          </a>
          <a
            href="#"
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 text-sm hover:bg-gray-50 transition-colors duration-200"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};
