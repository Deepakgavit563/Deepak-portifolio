"use client";

type Experience = {
  year: string;
  title: string;
  company: string;
  description: string;
};

export default function ExperienceCard({
  experience,
}: {
  experience: Experience;
}) {
  return (
    <div className="group relative rounded-3xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md p-8 transition-all">
      {/* Year Badge */}
      <span className="inline-block rounded-full bg-cyan-500/20 px-4 py-1 text-sm">
        {experience.year}
      </span>

      {/* Title */}
      <h3 className="mt-5 text-2xl font-bold text-white">
        {experience.title}
      </h3>

      {/* Company */}
      <p className="mt-2 text-lg text-zinc-300">
        {experience.company}
      </p>

      {/* Description */}
      <p className="mt-4 leading-7 text-zinc-400">
        {experience.description}
      </p>
    </div>
  );
}