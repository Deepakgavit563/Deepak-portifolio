"use client";

import FeaturedProject from "../ui/FeaturedProject";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "@/app/data/projects";

export default function Projects() {
  const featured = projects.find((project) => project.featured);
  const others = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <p className="text-center uppercase tracking-[0.3em] text-cyan-400">
          Projects
        </p>

        <h2 className="mt-4 text-center text-5xl font-black tracking-tight md:text-6xl">
  Featured Work
</h2>

<p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-zinc-400">
  A selection of projects that showcase my passion for building fast,
  scalable, and user-focused web applications.
</p>

        <p className="mx-auto mt-6 max-w-2xl text-center text-zinc-400">
          A collection of projects showcasing my experience with modern web
          technologies.
        </p>

        {/* Featured Project */}
        {featured && (
          <div className="mt-20">
            <FeaturedProject project={featured} />
          </div>
        )}

        {/* Other Projects */}
        <div className="mt-20 grid gap-10 md:grid-cols-2">
          {others.map((project) => (
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