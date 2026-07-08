"use client";

import { IconType } from "react-icons";

type Props = {
  icon: IconType;
  title: string;
  value: string;
  href?: string;
};

export default function ContactItem({
  icon: Icon,
  title,
  value,
  href,
}: Props) {
  const content = (
    <div className="group flex items-center gap-5 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 transition-all duration-300 hover:border-cyan-400/50 hover:bg-zinc-900/60">
      <div className="rounded-xl bg-cyan-500/10 p-4">
        <Icon
          size={24}
          className="text-cyan-400 transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div>
        <p className="text-sm uppercase tracking-wider text-zinc-500">
          {title}
        </p>

        <p className="mt-1 text-white">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
}