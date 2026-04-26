import React from "react";
import { ProjectCard } from "@/components/ProjectCard";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex items-center flex-col min-h-screen py-24 px-4 gap-8"
    >
      <h1 className="font-bold text-2xl">Projects</h1>
      <p className="text-gray-500">
        A selection of high-impact digital solutions, built with focus on
        scalability, performance, and exceptional user experience.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
};
