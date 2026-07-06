import { skillGroups } from "../data/profile";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="competences" className="bg-surface border-y border-border">
      <div className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-28">
        <SectionHeading eyebrow="competences" title="Compétences & certifications" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.name} className="bg-ink border border-border rounded-xl p-5">
              <h3 className="eyebrow text-sm text-accent mb-3">{group.name}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-2.5 py-1 rounded-md bg-surfaceAlt text-text-secondary border border-border"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
