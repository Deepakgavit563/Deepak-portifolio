type Props = {
  subtitle: string;
  title: string;
};

export default function SectionHeading({
  subtitle,
  title,
}: Props) {
  return (
    <>
      <p className="uppercase tracking-[0.3em] text-cyan-400">
        {subtitle}
      </p>

      <h2 className="mt-3 text-5xl font-black">
        {title}
      </h2>
    </>
  );
}