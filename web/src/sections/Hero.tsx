import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/Icons";
import { meta } from "../data/metadata";

const tickerItems = [
  "LLMs",
  "★",
  "Fine-tuning",
  "★",
  "RAG",
  "★",
  "Multi-GPU",
  "★",
  "Quantization",
  "★",
  "AI Ops",
  "★",
  "Voice Agents",
  "★",
  "Vector DBs",
  "★",
  "MLOps",
  "★",
];

export function Hero() {
  return (
    <section id="top" className="relative noise pt-28 pb-0">
      <div className="relative z-[1] max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Top row */}
        <div className="flex items-center justify-between border-b border-ink/20 pb-4 text-[12px] text-muted font-mono">
          <span>Portfolio</span>
          <span className="hidden md:inline">{meta.personal.location} · UTC+5:30</span>
          <span className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-600 opacity-60 animate-ping" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-700" />
            </span>
            Available for hire
          </span>
        </div>

        {/* Headline */}
        <div className="mt-12 md:mt-16 grid md:grid-cols-12 gap-8 md:gap-10 items-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="md:col-span-8 font-display font-medium tracking-tightest text-ink leading-[0.9] text-[13vw] md:text-[8.25rem]"
          >
            Arya
            <br />
            Chakraborty
            <span className="inline-block align-top ml-3 text-accent bg-ink rounded-full w-[0.35em] h-[0.35em] translate-y-[0.55em]" />
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-4 flex justify-center md:justify-end"
          >
            <PortraitGrid src="/photo/pfp.png" cols={12} rows={15} />
          </motion.div>
        </div>

        {/* Sub row */}
        <div className="mt-10 md:mt-14 grid md:grid-cols-12 gap-6 md:gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-6"
          >
            <p className="text-ink text-xl md:text-2xl leading-snug tracking-tight max-w-xl">
              AI Engineer working on{" "}
              <span className="inline-flex items-baseline gap-1">
                <span className="bg-accent px-1.5">LLMs</span>
              </span>
              , RAG, and applied ML systems.
              Currently at{" "}
              <span className="underline decoration-2 underline-offset-4">
                Namasys Analytics
              </span>
              .
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="md:col-span-6 md:col-start-7 flex flex-col gap-4"
          >
            <p className="text-ink/65 text-[15px] leading-relaxed max-w-xl">
              Previously fine-tuned 24B-param models on H100s at Oriserve
              (~$80K saved/yr for BFSI clients), shipped speech-to-speech
              pipelines, and spent a summer researching cyber policy at the
              Ministry of External Affairs.
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <a href="#experience" className="btn btn-dark">
                See the work <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={meta.personal.links.github}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost"
              >
                <GithubIcon className="h-4 w-4" /> GitHub
              </a>
              <a
                href={meta.personal.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost"
              >
                <LinkedinIcon className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href={`mailto:${meta.personal.email}`}
                className="btn btn-ghost"
              >
                <Mail className="h-4 w-4" /> Email
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-ink/20 pt-8">
          <Stat
            value="2024"
            unit="B.Tech"
            label="Graduated · CSE · KGEC"
          />
          <Stat
            value="MLH"
            unit="2023"
            label="Hackathon winner · Diversion 2k23"
          />
          <Stat
            value="2.5"
            unit="yrs"
            label="Experience in Data Science & related domains"
          />
          <Stat
            value="GDSC"
            unit="'22–'23"
            label="AI/ML Lead at GDSC KGEC"
          />
        </div>
      </div>

      {/* Ticker */}
      <div className="mt-20 border-y border-ink/25 bg-ink text-cream overflow-hidden">
        <div className="marquee py-4 text-[13px] font-mono uppercase tracking-[0.18em]">
          <div className="marquee-inner">
            {[...tickerItems, ...tickerItems].map((t, i) => (
              <span key={i} className={t === "★" ? "text-accent" : ""}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({
  value,
  unit,
  label,
}: {
  value: string;
  unit?: string;
  label: string;
}) {
  return (
    <div>
      <div className="flex items-baseline gap-1">
        <span className="display-num text-5xl md:text-6xl text-ink">
          {value}
        </span>
        {unit && (
          <span className="text-sm text-muted font-mono">{unit}</span>
        )}
      </div>
      <div className="mt-2 text-[12px] text-ink/70 leading-snug max-w-[180px]">
        {label}
      </div>
    </div>
  );
}

function PortraitGrid({
  src,
  cols,
  rows,
}: {
  src: string;
  cols: number;
  rows: number;
}) {
  const diagMax = Math.max(cols + rows - 2, 1);
  const tiles = Array.from({ length: cols * rows }, (_, i) => ({
    r: Math.floor(i / cols),
    c: i % cols,
    i,
  }));

  return (
    <div
      className="relative w-full max-w-[320px] md:max-w-[360px]"
      style={{ aspectRatio: "1122 / 1402" }}
      aria-label="Arya Chakraborty portrait"
    >
      <div
        className="grid w-full h-full gap-[2px]"
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
        }}
      >
        {tiles.map(({ r, c, i }) => {
          const diag = r + c;
          const t = diag / diagMax;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.55,
                delay: t * 0.5,
                ease: "easeOut",
              }}
              style={{
                backgroundImage: `url(${src})`,
                backgroundSize: `${cols * 100}% ${rows * 100}%`,
                backgroundPosition: `${(c / (cols - 1)) * 100}% ${
                  (r / (rows - 1)) * 100
                }%`,
              }}
              className="bg-no-repeat"
            />
          );
        })}
      </div>
    </div>
  );
}
