type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function GlassCard({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-md
        transition-all
        duration-300
        hover:border-cyan-400
        hover:shadow-lg
        hover:shadow-cyan-500/10
        ${className}
      `}
    >
      {children}
    </div>
  );
}