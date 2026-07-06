import { about } from "../data/profile";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-28">
      <SectionHeading eyebrow="qui-suis-je" title="Qui suis-je ?" />
      <p className="max-w-2xl text-text-secondary leading-relaxed text-lg whitespace-pre-line">
        {about}
      </p>
    </section>
  );
}
