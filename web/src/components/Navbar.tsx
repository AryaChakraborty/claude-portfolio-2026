import { useEffect, useState } from "react";

const items = [
  { id: "about", label: "About" },
  { id: "experience", label: "Work" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Awards" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    items.forEach((i) => {
      const el = document.getElementById(i.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all ${
        scrolled
          ? "backdrop-blur-md bg-cream/80 border-b border-line"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
        <a
          href="#top"
          className="font-display text-[15px] font-medium tracking-tighter-2 text-ink"
        >
          Arya Chakraborty
        </a>
        <ul className="hidden md:flex items-center gap-1 text-[13px]">
          {items.map((i) => (
            <li key={i.id}>
              <a
                href={`#${i.id}`}
                className={`px-3 py-1.5 rounded-full transition ${
                  active === i.id
                    ? "bg-ink text-cream"
                    : "text-ink/70 hover:text-ink"
                }`}
              >
                {i.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="btn btn-accent text-[13px] py-1.5 px-4">
          Say hi →
        </a>
      </nav>
    </header>
  );
}
