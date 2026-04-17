import { motion } from "framer-motion";

type Props = {
  eyebrow: string;
  title: string;
  sub?: string;
  index?: string;
};

export function SectionHeader({ eyebrow, title, sub, index }: Props) {
  return (
    <div className="mb-12 md:mb-16">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-baseline justify-between gap-6 border-b border-ink/30 pb-5">
          <div className="flex items-center gap-5">
            {index && (
              <span className="font-mono text-xs text-muted">{index}</span>
            )}
            <span className="eyebrow">{eyebrow}</span>
          </div>
        </div>

        <h2 className="mt-8 font-display text-5xl md:text-7xl tracking-tightest text-ink font-medium leading-[0.95]">
          {title}
        </h2>
        {sub && (
          <p className="mt-5 max-w-2xl text-ink/65 text-base md:text-lg leading-snug">
            {sub}
          </p>
        )}
      </motion.div>
    </div>
  );
}
