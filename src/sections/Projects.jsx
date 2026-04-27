import React from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "../data/project.js";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex items-center flex-col min-h-screen py-24 px-4 gap-5"
    >
      <h1 className="font-bold text-2xl">Projects</h1>
      <p className="text-gray-500">
        Each project is a deliberate balance of clean architecture, speed, and
        interfaces people actually enjoy using.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};
