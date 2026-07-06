import { experience } from "../data/profile";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-28">
      <SectionHeading eyebrow="experiences" title="Expériences professionnelles" />
      <div className="grid gap-6 md:grid-cols-2">
        {experience.map((job) => (
          <article
            key={job.title}
            className="bg-surface border border-border rounded-xl p-6 hover:border-accent/60 transition-colors"
          >
            <p className="eyebrow text-xs text-signal">{job.period}</p>
            <h3 className="font-display text-xl font-medium text-text-primary mt-2">
              {job.title}
            </h3>
            <p className="text-text-secondary text-sm mt-1">{job.place}</p>
            <ul className="mt-4 space-y-2">
              {job.missions.map((mission) => (
                <li key={mission} className="text-sm text-text-secondary flex gap-2">
                  <span className="text-accent mt-1">▸</span>
                  <span>{mission}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {job.skills.map((skill) => (
                <span
                  key={skill}
                  className="eyebrow text-xs px-2.5 py-1 rounded-full bg-surfaceAlt text-text-secondary border border-border"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
