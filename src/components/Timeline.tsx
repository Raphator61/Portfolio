import { formation } from "../data/profile";
import SectionHeading from "./SectionHeading";

export default function Timeline() {
  return (
    <section id="parcours" className="bg-surface border-y border-border">
      <div className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-28">
        <SectionHeading eyebrow="parcours" title="Formation" />
        <ol className="relative border-l border-border ml-2">
          {formation.map((step) => (
            <li key={step.title} className="mb-10 ml-6 last:mb-0">
              <span className="absolute -left-[7px] mt-1.5 w-3.5 h-3.5 rounded-full bg-accent border-2 border-surface" />
              <p className="eyebrow text-xs text-signal">{step.period}</p>
              <h3 className="font-display text-lg font-medium text-text-primary mt-1">
                {step.title}
              </h3>
              <p className="text-text-secondary text-sm mt-1">{step.place}</p>
              <p className="text-text-muted text-sm mt-0.5">{step.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
