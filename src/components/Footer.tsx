import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-surface">
      <div className="max-w-content mx-auto px-6 md:px-10 py-16 text-center">
        <p className="eyebrow text-sm text-signal mb-3">// contact</p>
        <h2 className="font-display text-2xl md:text-3xl font-medium text-text-primary">
          Discutons de votre prochaine alternance
        </h2>
        <p className="mt-3 text-text-secondary">
          Disponible et mobile en Oise et alentours.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="inline-block mt-8 px-6 py-3 rounded-lg bg-accent text-ink font-medium hover:bg-accent-soft transition-colors"
        >
          M'envoyer un email
        </a>
        <p className="mt-10 text-xs text-text-muted">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
