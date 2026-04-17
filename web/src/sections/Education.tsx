import { motion } from "framer-motion";
import { SectionHeader } from "../components/SectionHeader";
import { meta } from "../data/metadata";

type Card = {
  id: string;
  kicker: string;
  school: string;
  year: string;
  board: string;
  score: number; // for bar: 0..100
  scoreLabel: string;
  scoreUnit: string;
  highlight?: string;
  accent?: boolean;
};

const cards: Card[] = [
  {
    id: "btech",
    kicker: "2020 — 2024",
    school: "Kalyani Govt. Engineering College",
    year: "B.Tech · Computer Science & Engineering",
    board: "MAKAUT, West Bengal",
    score: 91.8,
    scoreLabel: "9.18",
    scoreUnit: "/ 10 CGPA",
    highlight: "Invited as a judge in Binary v2",
    accent: true,
  },
  {
    id: "class12",
    kicker: "2018 — 2020",
    school: "Bishop Morrow School",
    year: "ISC · Class XII (Science)",
    board: "CISCE, New Delhi",
    score: 95.25,
    scoreLabel: "95.25",
    scoreUnit: "%",
    highlight: "Mathematics 98 · Computer Science 92",
  },
  {
    id: "class10",
    kicker: "2016 — 2018",
    school: "Bishop Morrow School",
    year: "ICSE · Class X",
    board: "CISCE, New Delhi",
    score: 93.2,
    scoreLabel: "93.20",
    scoreUnit: "%",
    highlight: "Mathematics 97 · Computer Apps 96",
  },
];

export function Education() {
  return (
    <section
      id="education"
      className="relative py-16 md:py-20 max-w-[1400px] mx-auto px-6 md:px-10"
    >
      <SectionHeader
        index="03"
        eyebrow="Education"
        title="Paper trail."
        sub="Engineering - Higher Secondary - Secondary"
      />

      <div className="grid md:grid-cols-3 gap-5">
        {cards.map((c, i) => (
          <ScoreCard key={c.id} card={c} index={i} />
        ))}
      </div>

      {/* Course strip */}
      <div className="mt-14 border-y border-ink/25 py-4 overflow-hidden">
        <div className="marquee text-[12px] font-mono uppercase tracking-[0.18em]">
          <div className="marquee-inner">
            {[
              "Data Structures",
              "·",
              "Algorithms",
              "·",
              "Operating Systems",
              "·",
              "Compilers",
              "·",
              "Computer Networks",
              "·",
              "Machine Learning",
              "·",
              "Pattern Recognition",
              "·",
              "Cyber Security",
              "·",
              "Databases",
              "·",
              "Discrete Math",
              "·",
              "OOP",
              "·",
            ]
              .flatMap((x) => [x])
              .concat([
                "Data Structures",
                "·",
                "Algorithms",
                "·",
                "Operating Systems",
                "·",
                "Compilers",
                "·",
                "Computer Networks",
                "·",
                "Machine Learning",
                "·",
                "Pattern Recognition",
                "·",
                "Cyber Security",
                "·",
                "Databases",
                "·",
                "Discrete Math",
                "·",
                "OOP",
                "·",
              ])
              .map((t, idx) => (
                <span
                  key={idx}
                  className={t === "·" ? "text-accent-ink" : "text-ink"}
                >
                  {t}
                </span>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ScoreCard({ card, index }: { card: Card; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`relative border border-ink ${
        card.accent ? "bg-accent" : "bg-cream"
      } p-6 md:p-7 overflow-hidden`}
    >
      {/* Index tag */}
      <div className="flex items-center justify-between text-[11px] font-mono">
        <span className="opacity-70">{`(${String(index + 1).padStart(
          2,
          "0"
        )})`}</span>
        <span className="opacity-70">{card.kicker}</span>
      </div>

      {/* Large score */}
      <div className="mt-10 md:mt-14 flex items-baseline gap-2">
        <div className="display-num text-[96px] md:text-[128px] leading-none text-ink">
          {card.scoreLabel}
        </div>
        <div className="text-sm md:text-base font-mono text-ink/70 pb-2 md:pb-4">
          {card.scoreUnit}
        </div>
      </div>

      {/* Meter */}
      <div className="mt-4 md:mt-6">
        <div className="flex justify-between text-[10px] font-mono text-ink/60 mb-1.5">
          <span>0</span>
          <span>100</span>
        </div>
        <div className="h-2 bg-ink/10 border border-ink/30 relative overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${card.score}%` }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.1, delay: 0.25 + index * 0.08, ease: "easeOut" }}
            className={`absolute inset-y-0 left-0 ${
              card.accent ? "bg-ink" : "bg-ink"
            }`}
          />
        </div>
      </div>

      {/* Meta */}
      <div className="mt-6 border-t border-ink/25 pt-4">
        <div className="eyebrow">{card.year}</div>
        <div className="mt-1 font-display text-lg md:text-xl font-medium tracking-tightest text-ink leading-tight">
          {card.school}
        </div>
        <div className="mt-1 text-ink/65 text-[13px]">{card.board}</div>
        {card.highlight && (
          <div className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest border border-ink/40 px-2 py-1">
            ★ {card.highlight}
          </div>
        )}
      </div>

      {/* Decorative monogram */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-6 -right-4 text-ink/10 font-display text-[200px] leading-none select-none"
      >
        {getLetter(card.id)}
      </div>
    </motion.article>
  );
}

function getLetter(id: string) {
  if (id === "btech") return "B";
  if (id === "class12") return "XII";
  if (id === "class10") return "X";
  return "·";
}

// Note: the data numbers above come from metadata.json; we translate them here
// for a cleaner marketing-style display. Source values (unchanged):
//   B.Tech CGPA: meta.education[0].final_cgpa  → 9.18
//   ISC percentage: meta.education[1].percentage → 95.25
//   ICSE percentage: meta.education[2].percentage → 93.2
export const _sanityCheck = {
  btech: meta.education.find((e) => e.id === "btech")?.final_cgpa,
  isc: meta.education.find((e) => e.id === "class12")?.percentage,
  icse: meta.education.find((e) => e.id === "class10")?.percentage,
};
