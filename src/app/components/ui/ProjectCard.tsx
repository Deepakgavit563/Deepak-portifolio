"use client";

import Image from "next/image";
import type { Project } from "@/app/data/projects";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <div
      className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/50"
    >
      <div className="relative h-60 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-white">
          {project.title}
        </h3>

        <p className="mt-4 leading-7 text-zinc-400">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-8 flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-zinc-700 px-5 py-2 transition hover:border-cyan-400"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-2 font-medium text-black transition hover:scale-105"
          >
            <HiOutlineExternalLink />
            Live
          </a>
        </div>
      </div>
    </div>
  );
}