import type { ProjectIcon } from "../data/projects";

type Props = {
  type: ProjectIcon;
  className?: string;
};

export default function ProjectGlyph({ type, className }: Props) {
  const common = {
    className,
    viewBox: "0 0 48 48",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    "aria-hidden": true,
  } as const;

  switch (type) {
    case "server":
      return (
        <svg {...common}>
          <rect x="8" y="8" width="32" height="10" rx="2" />
          <rect x="8" y="22" width="32" height="10" rx="2" />
          <circle cx="14" cy="13" r="1.4" fill="currentColor" stroke="none" />
          <circle cx="14" cy="27" r="1.4" fill="currentColor" stroke="none" />
          <line x1="20" y1="13" x2="32" y2="13" />
          <line x1="20" y1="27" x2="32" y2="27" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M24 8 12 12v10c0 8 5 13.5 12 16 7-2.5 12-8 12-16V12L24 8Z" />
          <path d="m18 24 4 4 8-8" />
        </svg>
      );
    case "network":
      return (
        <svg {...common}>
          <circle cx="24" cy="12" r="3.2" />
          <circle cx="12" cy="34" r="3.2" />
          <circle cx="36" cy="34" r="3.2" />
          <line x1="24" y1="15" x2="12" y2="31" />
          <line x1="24" y1="15" x2="36" y2="31" />
          <line x1="15" y1="34" x2="33" y2="34" />
        </svg>
      );
    case "camera":
      return (
        <svg {...common}>
          <rect x="7" y="17" width="26" height="16" rx="3" />
          <path d="M33 21l8-4v14l-8-4" />
          <circle cx="20" cy="25" r="4.5" />
        </svg>
      );
    case "database":
      return (
        <svg {...common}>
          <ellipse cx="24" cy="12" rx="14" ry="5" />
          <path d="M10 12v10c0 2.8 6.3 5 14 5s14-2.2 14-5V12" />
          <path d="M10 22v10c0 2.8 6.3 5 14 5s14-2.2 14-5V22" />
        </svg>
      );
    case "code":
    default:
      return (
        <svg {...common}>
          <path d="m17 15-8 9 8 9" />
          <path d="m31 15 8 9-8 9" />
          <line x1="26" y1="12" x2="22" y2="36" />
        </svg>
      );
  }
}
