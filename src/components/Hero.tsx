import { profile } from "../data/profile";

function NetworkMesh() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.18] pointer-events-none"
      viewBox="0 0 1000 600"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <g stroke="#3FA9F5" strokeWidth="1">
        <line x1="80" y1="90" x2="260" y2="180" />
        <line x1="260" y1="180" x2="230" y2="360" />
        <line x1="260" y1="180" x2="470" y2="120" />
        <line x1="470" y1="120" x2="640" y2="220" />
        <line x1="640" y1="220" x2="880" y2="150" />
        <line x1="640" y1="220" x2="720" y2="420" />
        <line x1="230" y1="360" x2="470" y2="120" />
        <line x1="230" y1="360" x2="420" y2="480" />
        <line x1="420" y1="480" x2="720" y2="420" />
        <line x1="720" y1="420" x2="900" y2="480" />
      </g>
      <g fill="#E8A33D">
        <circle cx="80" cy="90" r="4" />
        <circle cx="260" cy="180" r="4" />
        <circle cx="470" cy="120" r="4" />
        <circle cx="640" cy="220" r="4" />
        <circle cx="880" cy="150" r="4" />
        <circle cx="230" cy="360" r="4" />
        <circle cx="420" cy="480" r="4" />
        <circle cx="720" cy="420" r="4" />
        <circle cx="900" cy="480" r="4" />
      </g>
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <NetworkMesh />
      <div className="relative max-w-content mx-auto px-6 md:px-10 py-24 md:py-32 flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
        <img
          src={profile.photo}
          alt={profile.name}
          width={160}
          height={160}
          className="w-36 h-36 md:w-40 md:h-40 rounded-full object-cover border-2 border-accent shrink-0"
        />
        <div className="text-center md:text-left">
          <p className="eyebrow text-sm text-signal mb-3">// portfolio_boot --user=raphael</p>
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-text-primary leading-tight">
            {profile.name}
          </h1>
          <p className="mt-2 text-lg text-accent font-medium">{profile.title}</p>
          <p className="mt-5 max-w-xl text-text-secondary leading-relaxed">
            {profile.tagline}
          </p>

          <ul className="mt-8 flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-3 text-sm text-text-secondary">
            <li className="flex items-center gap-2">
              <MailIcon />
              <a href={`mailto:${profile.email}`} className="hover:text-accent transition-colors">
                {profile.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <PhoneIcon />
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="hover:text-accent transition-colors">
                {profile.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <LinkedinIcon />
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent transition-colors"
              >
                LinkedIn
              </a>
            </li>
            <li className="flex items-center gap-2">
              <PinIcon />
              <span>{profile.location}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.4 2.1L8 9.9a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.8 2.2Z" />
    </svg>
  );
}
function LinkedinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 10v7M7 7v.01M11 17v-4.5a2.5 2.5 0 0 1 5 0V17M11 10v7" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M20 10c0 5.5-8 12-8 12s-8-6.5-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
