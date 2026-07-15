import { useEffect, useRef } from "react";
import type { Project } from "../data/projects";
import ProjectGlyph from "./ProjectGlyph";

type Props = {
  project: Project;
  onClose: () => void;
};

const categoryStyles: Record<Project["category"], string> = {
  Perso: "text-signal border-signal/40 bg-signal/10",
  École: "text-accent border-accent/40 bg-accent/10",
  Entreprise: "text-text-secondary border-border bg-surfaceAlt",
};

export default function ProjectModal({ project, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-ink/80 backdrop-blur-sm"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${project.id}-title`}
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-surface border border-border rounded-2xl p-6 md:p-10 shadow-2xl"
      >
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Fermer le détail du projet"
          className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-full border border-border text-text-secondary hover:text-accent hover:border-accent transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-xl bg-ink border border-border flex items-center justify-center text-accent shrink-0">
            <ProjectGlyph type={project.icon} className="w-8 h-8" />
          </div>
          <div>
            <span
              className={`eyebrow inline-block text-xs px-2.5 py-1 rounded-full border mb-2 ${categoryStyles[project.category]}`}
            >
              {project.category}
            </span>
            <h3 id={`${project.id}-title`} className="font-display text-2xl font-medium text-text-primary">
              {project.title}
            </h3>
          </div>
        </div>

        <p className="eyebrow text-xs text-signal mb-6">{project.period}</p>

        <div className="space-y-6">
          <div>
            <h4 className="eyebrow text-xs text-text-muted mb-2">contexte</h4>
            <p className="text-text-secondary leading-relaxed">{project.context}</p>
          </div>

          <div>
            <h4 className="eyebrow text-xs text-text-muted mb-2">objectifs</h4>
            <ul className="space-y-1.5">
              {project.objectives.map((goal) => (
                <li key={goal} className="text-text-secondary text-sm flex gap-2">
                  <span className="text-accent mt-1">▸</span>
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow text-xs text-text-muted mb-2">réalisation</h4>
            <p className="text-text-secondary leading-relaxed">{project.details}</p>
          </div>

          <div>
            <h4 className="eyebrow text-xs text-text-muted mb-3">technologies</h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-sm px-2.5 py-1 rounded-md bg-surfaceAlt text-text-secondary border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
