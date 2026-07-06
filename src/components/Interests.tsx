import { interests } from "../data/profile";
import SectionHeading from "./SectionHeading";

export default function Interests() {
  return (
    <section id="interets" className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-28">
      <SectionHeading eyebrow="centres-dinteret" title="Centres d'intérêt" />
      <div className="flex flex-wrap gap-3">
        {interests.map((interest) => (
          <span
            key={interest}
            className="text-sm px-4 py-2 rounded-full border border-border text-text-secondary hover:border-accent hover:text-accent transition-colors"
          >
            {interest}
          </span>
        ))}
      </div>
    </section>
  );
}
