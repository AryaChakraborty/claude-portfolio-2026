import { motion } from "framer-motion";
import { SectionHeader } from "../components/SectionHeader";
import { meta } from "../data/metadata";

const skillBlocks: { title: string; key: keyof typeof meta.skills }[] = [
  { title: "ML / AI", key: "ml_ai" },
  { title: "Languages", key: "languages" },
  { title: "Frameworks", key: "frameworks" },
  { title: "Infra", key: "infra" },
];

export function About() {
  return (
    <section
      id="about"
      className="relative py-16 md:py-20 max-w-[1400px] mx-auto px-6 md:px-10"
    >
      <SectionHeader
        index="01"
        eyebrow="About"
        title="Refining the messy middle between research and production."
      />

      <div className="grid md:grid-cols-12 gap-8 md:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="md:col-span-7"
        >
          <p className="text-ink text-lg md:text-xl leading-snug tracking-tight">
            {meta.personal.summary}
          </p>
          <p className="mt-6 text-ink/65 text-base leading-relaxed">
            I graduated from{" "}
            <span className="text-ink">Kalyani Government Engineering College</span>{" "}
            with a 9.18 CGPA, won a few hackathons along the way (Hack4Bengal,
            Diversion, SIH finalist), and have since lived in the LLM stack —
            RAG, PEFT, quantization, DDP multi-GPU training, and AI Ops.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-5">
            <Fact label="Based in" value="India · Remote-first" />
            <Fact label="Role" value="AI Engineer" />
            <Fact label="Company" value="Namasys Analytics" />
            <Fact label="Status" value="Open to opportunities" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-5"
        >
          <div className="border border-ink/25 divide-y divide-ink/15">
            {skillBlocks.map((b) => (
              <div key={b.key as string} className="p-5">
                <div className="eyebrow mb-3">{b.title}</div>
                <div className="flex flex-wrap gap-1.5">
                  {meta.skills[b.key]?.map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-ink/15 pt-3">
      <div className="eyebrow">{label}</div>
      <div className="mt-1 text-ink text-[15px]">{value}</div>
    </div>
  );
}
