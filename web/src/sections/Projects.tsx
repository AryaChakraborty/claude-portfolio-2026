import { motion } from "framer-motion";
import { ArrowUpRight, Trophy } from "lucide-react";
import { GithubIcon } from "../components/Icons";
import { SectionHeader } from "../components/SectionHeader";
import { meta } from "../data/metadata";

export function Projects() {
  return (
    <section
      id="projects"
      className="relative py-16 md:py-20 max-w-[1400px] mx-auto px-6 md:px-10"
    >
      <SectionHeader
        index="04"
        eyebrow="Projects"
        title="Small, focused, award-winning."
        sub="A couple of projects that collected trophies on the way."
      />

      <div className="grid md:grid-cols-2 gap-5">
        {meta.projects.map((p, i) => (
          <motion.article
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="relative border border-ink bg-cream p-6 md:p-8 overflow-hidden group transition hover:bg-cream-2"
          >
            {/* Index */}
            <div className="flex items-center justify-between text-[11px] font-mono opacity-70">
              <span>({String(i + 1).padStart(2, "0")})</span>
              <span>{p.timeline}</span>
            </div>

            {/* Award */}
            {p.award && (
              <div className="mt-5 inline-flex items-center gap-2 bg-ink text-cream px-2.5 py-1 text-[11px] font-mono uppercase tracking-widest">
                <Trophy className="h-3.5 w-3.5 text-accent" />
                {p.award}
              </div>
            )}

            {/* Title */}
            <h3 className="mt-5 font-display font-medium text-3xl md:text-4xl tracking-tightest leading-[1.02]">
              {p.name}
            </h3>
            <div className="mt-1 text-ink/60 text-sm">{p.subtitle}</div>

            {/* Body */}
            <ul className="mt-5 space-y-2.5 text-ink/75 text-[14px] leading-relaxed">
              {p.highlights.map((h, idx) => (
                <li key={idx} className="flex gap-2.5">
                  <span className="shrink-0 mt-2 h-[3px] w-[3px] rounded-full bg-ink" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            {/* Tools */}
            <div className="mt-5 flex flex-wrap gap-1.5">
              {p.tools.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>

            {/* Footer links */}
            <div className="mt-6 pt-5 border-t border-ink/20 flex items-center justify-between">
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-ink ul-link"
                >
                  <GithubIcon className="h-4 w-4" /> View code
                </a>
              )}
              <ArrowUpRight className="h-5 w-5 text-ink/40 group-hover:text-ink transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>

            {/* Monogram */}
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-10 -right-6 text-ink/[0.06] font-display text-[240px] leading-none select-none"
            >
              {p.name[0]}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
