"use client";

type Skill = {
  name: string;
  icon: string;
  color: string;
};

export default function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div
      className="
        group
        rounded-2xl
        border
        border-zinc-800
        bg-zinc-900/50
        p-6
        backdrop-blur
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-cyan-400
        hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]
      "
    >
      <div
        className="mb-4 text-5xl transition-transform duration-300 group-hover:scale-110"
        style={{ color: skill.color }}
      >
        {skill.icon}
      </div>

      <h3 className="text-lg font-semibold">{skill.name}</h3>
    </div>
  );
}