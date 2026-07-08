"use client";

import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

import type { Project } from "@/app/data/projects";

type Props = {
  project: Project;
};

export default function FeaturedProject({ project }: Props) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/40 hover:shadow-[0_0_60px_rgba(34,211,238,0.15)]">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-indigo-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Decorative Glow */}
      <div className="absolute -left-20 top-10 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute -right-20 bottom-10 h-60 w-60 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative grid items-center gap-10 lg:grid-cols-2">
        {/* Image */}
        <div className="relative h-[320px] overflow-hidden lg:h-[520px]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

          {/* Hover Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <span className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-white backdrop-blur">
              ↗ View Project
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 p-8 lg:p-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
            ⭐ Featured Project
          </span>

          <h3 className="mt-6 text-4xl font-bold tracking-tight text-white lg:text-5xl">
            {project.title}
          </h3>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mt-8 flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-500/20"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-zinc-700 px-6 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-500/10"
            >
              <FaGithub size={20} />
              GitHub
            </a>

            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:scale-105"
            >
              <HiOutlineExternalLink size={20} />
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}