"use client";

import { projects } from "@/app/data/projects";
import ProjectCard from "../ui/ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-center uppercase tracking-[0.3em] text-cyan-400">
          Projects
        </p>

        <h2 className="mt-4 text-center text-4xl font-bold md:text-5xl">
          Things I've Built
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-center text-zinc-400">
          A collection of projects showcasing my experience with modern web technologies.
        </p>

        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}