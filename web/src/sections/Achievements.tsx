import { motion } from "framer-motion";
import { SectionHeader } from "../components/SectionHeader";
import { meta } from "../data/metadata";

export function Achievements() {
  return (
    <section
      id="achievements"
      className="relative py-16 md:py-20 max-w-[1400px] mx-auto px-6 md:px-10"
    >
      <SectionHeader
        index="05"
        eyebrow="Awards"
        title="A few proud moments."
        sub="The trophies that led to better problem-solving."
      />

      <div className="border-t border-ink/30">
        {meta.achievements.map((a, i) => (
          <motion.div
            key={a.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="border-b border-ink/25 py-6 md:py-8 grid grid-cols-12 gap-5 items-center"
          >
            <span className="col-span-2 md:col-span-1 font-mono text-xs text-muted">
              {String(i + 1).padStart(2, "0")}
            </span>

            <div className="col-span-10 md:col-span-9">
              <div className="font-display text-2xl md:text-4xl tracking-tightest font-medium leading-tight">
                {a.title}
              </div>
              <div className="mt-1 text-ink/60 text-sm">
                {a.description}
              </div>
            </div>

            <div className="col-span-12 md:col-span-2 flex md:justify-end font-mono text-xs text-muted">
              {a.year}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
