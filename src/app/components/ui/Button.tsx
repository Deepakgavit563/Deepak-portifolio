type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const base =
    "rounded-full px-8 py-3 font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-cyan-500 text-black hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30",

    secondary:
      "border border-white/20 bg-white/5 backdrop-blur-md hover:border-cyan-400",
  };

  return (
    <button className={`${base} ${variants[variant]}`}>
      {children}
    </button>
  );
}