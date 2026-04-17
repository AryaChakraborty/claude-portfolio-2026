import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/Icons";
import { SectionHeader } from "../components/SectionHeader";
import { meta } from "../data/metadata";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative py-16 md:py-20 max-w-[1400px] mx-auto px-6 md:px-10"
    >
      <SectionHeader
        index="06"
        eyebrow="Contact"
        title="Let's build something."
        sub="Open to AI engineering roles, research collabs, and interesting conversations."
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-12 gap-6 md:gap-10 items-start"
      >
        <div className="md:col-span-6">
          <div className="font-display text-6xl md:text-8xl tracking-tightest font-medium leading-[0.9]">
            say
            <br />
            <span className="inline-flex items-baseline">
              hi
              <span className="align-top inline-block ml-2 bg-accent rounded-full w-[0.22em] h-[0.22em] translate-y-[0.35em]" />
            </span>
          </div>
          <p className="mt-6 text-ink/65 max-w-md leading-relaxed">
            Quickest on email. LinkedIn works for roles and quick chats.
          </p>
          <a
            href={`mailto:${meta.personal.email}`}
            className="mt-6 inline-flex items-center gap-2 btn btn-dark"
          >
            {meta.personal.email} <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="md:col-span-6 space-y-3">
          <ContactRow
            icon={Mail}
            label="Email"
            value={meta.personal.email}
            href={`mailto:${meta.personal.email}`}
          />
          <ContactRow
            icon={LinkedinIcon}
            label="LinkedIn"
            value="/in/chakraborty-arya"
            href={meta.personal.links.linkedin}
          />
          <ContactRow
            icon={GithubIcon}
            label="GitHub"
            value="@AryaChakraborty"
            href={meta.personal.links.github}
          />
          <ContactRow
            icon={Phone}
            label="Phone"
            value={meta.personal.phone}
            href={`tel:${meta.personal.phone.replace(/\s+/g, "")}`}
          />
        </div>
      </motion.div>

      <div className="mt-20 border-t border-ink/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-muted text-xs font-mono">
        <div>© {new Date().getFullYear()} Arya Chakraborty · Made in India</div>
        <div>Built with React · Tailwind · Claude</div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="group flex items-center justify-between gap-4 border border-ink/25 px-5 py-4 hover:bg-ink hover:text-cream transition"
    >
      <div className="flex items-center gap-4">
        <span className="h-9 w-9 grid place-items-center border border-ink/30 group-hover:border-cream/50">
          <Icon className="h-4 w-4" />
        </span>
        <div>
          <div className="eyebrow group-hover:text-cream/60">{label}</div>
          <div className="text-[15px]">{value}</div>
        </div>
      </div>
      <ArrowUpRight className="h-5 w-5 opacity-40 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
    </a>
  );
}
