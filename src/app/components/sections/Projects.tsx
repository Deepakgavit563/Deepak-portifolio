"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import FeaturedProject from "../ui/FeaturedProject";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "@/app/data/projects";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const container = useRef<HTMLDivElement>(null);

  const [featured, ...others] = projects;

  useGSAP(
    () => {
      // Section Heading
      gsap.from(".projects-title", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      });

      // Featured Project
      gsap.from(".featured-project", {
        opacity: 0,
        x: -80,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".featured-project",
          start: "top 80%",
        },
      });

      // Project Cards
      gsap.from(".project-card", {
        opacity: 0,
        y: 60,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 80%",
        },
      });
    },
    { scope: container }
  );

  return (
    <section
      id="projects"
      ref={container}
      className="relative py-32 px-6 scroll-mt-10"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-center uppercase tracking-[0.3em] text-cyan-400">
          Projects
        </p>

        <h2 className="projects-title mt-4 text-center text-5xl font-bold md:text-6xl">
          Featured Work
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-center text-zinc-400">
          A collection of projects showcasing my experience with modern web
          technologies.
        </p>

        {/* Featured Project */}
        {featured && (
          <div className="featured-project mt-20">
            <FeaturedProject project={featured} />
          </div>
        )}

        {/* Other Projects */}
        <div className="projects-grid mt-20 grid gap-10 md:grid-cols-2">
          {others.map((project) => (
            <div key={project.title} className="project-card">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}