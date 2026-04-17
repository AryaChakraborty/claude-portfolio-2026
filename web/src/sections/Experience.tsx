import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { SectionHeader } from "../components/SectionHeader";
import { meta } from "../data/metadata";

function formatDate(d: string | null) {
  if (!d) return "Present";
  const [y, m] = d.split("-");
  const month = new Date(`${y}-${m}-01`).toLocaleString("en-US", {
    month: "short",
  });
  return `${month} ${y}`;
}

export function Experience() {
  const [open, setOpen] = useState<string | null>(meta.experience[0]?.id ?? null);

  return (
    <section
      id="experience"
      className="relative py-16 md:py-20 max-w-[1400px] mx-auto px-6 md:px-10"
    >
      <SectionHeader
        index="02"
        eyebrow="Work experience"
        title="Where I've shipped."
        sub="A mix of AI engineering, applied research, DevRel, and a short stint in the Indian foreign policy."
      />

      <div className="border-t border-ink/30">
        {meta.experience.map((x, i) => {
          const isOpen = open === x.id;
          return (
            <motion.div
              key={x.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="border-b border-ink/25"
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : x.id)}
                className="w-full text-left group flex items-start md:items-center justify-between gap-6 py-6 md:py-7"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-6 md:gap-10 flex-1 min-w-0">
                  <span className="font-mono text-[11px] text-muted w-10 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <div className="font-display text-2xl md:text-4xl tracking-tightest font-medium leading-tight truncate">
                      {x.company}
                      {x.current && (
                        <span className="ml-3 align-middle inline-block h-2 w-2 rounded-full bg-emerald-600" />
                      )}
                    </div>
                    <div className="mt-1 text-ink/60 text-[13px] md:text-sm">
                      {x.role} · {x.location}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <span className="hidden md:block font-mono text-xs text-muted whitespace-nowrap">
                    {formatDate(x.start)} → {formatDate(x.end)}
                  </span>
                  <span className="h-9 w-9 rounded-full border border-ink/50 grid place-items-center transition group-hover:bg-ink group-hover:text-cream">
                    {isOpen ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </span>
                </div>
              </button>

              <motion.div
                initial={false}
                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="pb-8 md:pb-10 pl-0 md:pl-[76px] pr-0 md:pr-24 grid md:grid-cols-12 gap-6">
                  <div className="md:col-span-3 md:hidden font-mono text-xs text-muted">
                    {formatDate(x.start)} → {formatDate(x.end)}
                  </div>
                  <ul className="md:col-span-12 space-y-3 text-ink/75 text-[14.5px] leading-relaxed">
                    {x.highlights.map((h, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="shrink-0 mt-2.5 h-[3px] w-[3px] rounded-full bg-ink" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
