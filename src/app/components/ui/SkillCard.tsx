import { IconType } from "react-icons";

type Skill = {
  name: string;
  icon: IconType;
  color: string;
};

export default function SkillCard({ skill }: { skill: Skill }) {
  const Icon = skill.icon;
  
  return (
    <div
  className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-[0_0_40px_rgba(34,211,238,0.18)]"
>
  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-indigo-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

  <div className="relative z-10">
    <Icon
      size={52}
      color={skill.color}
      className="mx-auto mb-5 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6"
    />

    <h3 className="mt-2 text-lg font-semibold text-white">
      {skill.name}
    </h3>
  </div>
</div>
  );
}