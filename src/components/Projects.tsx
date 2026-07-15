import { useState } from "react";
import { projects, type Project } from "../data/projects";
import SectionHeading from "./SectionHeading";
import ProjectGlyph from "./ProjectGlyph";
import ProjectModal from "./ProjectModal";

const categoryStyles: Record<Project["category"], string> = {
  Perso: "text-signal border-signal/40 bg-signal/10",
  École: "text-accent border-accent/40 bg-accent/10",
  Entreprise: "text-text-secondary border-border bg-surfaceAlt",
};

function ProjectCard({ project, onOpen }: { project: Project; onOpen: (p: Project) => void }) {
  return (
    <button
      onClick={() => onOpen(project)}
      className="group shrink-0 w-72 flex flex-col items-start text-left bg-surface border border-border rounded-xl p-5 hover:border-accent/60 transition-colors"
    >
      <div className="w-11 h-11 rounded-lg bg-ink border border-border flex items-center justify-center text-accent mb-4">
        <ProjectGlyph type={project.icon} className="w-6 h-6" />
      </div>
      <span
        className={`eyebrow inline-block text-xs px-2 py-0.5 rounded-full border mb-3 ${categoryStyles[project.category]}`}
      >
        {project.category}
      </span>
      <h3 className="font-display text-lg w-full font-medium text-text-primary leading-snug">
        {project.title}
      </h3>
      <p className="mt-2 text-sm text-text-secondary w-full leading-relaxed">{project.summary}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-xs text-text-muted group-hover:text-accent transition-colors">
        Voir le détail
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </span>
    </button>
  );
}

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  const track = [...projects, ...projects];

  return (
    <section id="projets" className="bg-surface border-y border-border overflow-hidden">
      <div className="max-w-content mx-auto px-6 md:px-10 pt-20 md:pt-28">
        <SectionHeading eyebrow="projets" title="Projets" />
        <p className="max-w-2xl text-text-secondary -mt-6 mb-10">
          Une sélection de projets personnels, scolaires et professionnels. Cliquez sur une
          vignette pour en voir le détail.
        </p>
      </div>

      <div className="marquee-wrapper pb-20 md:pb-28">
        <div className="marquee-track">
          {track.map((project, i) => (
            <ProjectCard key={`${project.id}-${i}`} project={project} onOpen={setActive} />
          ))}
        </div>
      </div>

      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </section>
  );
}
