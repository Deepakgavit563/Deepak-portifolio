"use client";

import ExperienceCard from "../ui/ExperienceCard";
import { experiences } from "../../data/experience";

export default function Experience() {
  return (
    <section className="bg-[#09090b] px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-center uppercase tracking-[0.3em] text-cyan-400">
          Experience
        </p>

        <h2 className="mt-4 text-center text-4xl font-bold md:text-5xl">
          My Journey
        </h2>

        <div className="mt-16 space-y-8">
          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.year}
              experience={experience}
            />
          ))}
        </div>
      </div>
    </section>
  );
}