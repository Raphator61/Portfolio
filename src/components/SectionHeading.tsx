type Props = {
  eyebrow: string;
  title: string;
};

export default function SectionHeading({ eyebrow, title }: Props) {
  return (
    <div className="mb-10 md:mb-14">
      <p className="eyebrow text-sm text-accent mb-3">// {eyebrow}</p>
      <h2 className="font-display text-3xl md:text-4xl font-medium text-text-primary">
        {title}
      </h2>
    </div>
  );
}
