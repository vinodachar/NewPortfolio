import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WHATSAPP } from "../constants.js";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Content", href: "#content" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll while the drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ink/80 backdrop-blur-md border-b border-line"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8 h-16 md:h-20">
        <a
          href="#top"
          className="font-display font-bold text-lg tracking-tightest uppercase"
        >
          Vinod<span className="text-accent"> Achar</span>
        </a>

        {/* desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-display text-xs uppercase tracking-wideish text-muted hover:text-cream transition-colors duration-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex btn-primary !px-5 !py-2.5"
          >
            Message on WhatsApp
          </a>

          {/* hamburger */}
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="md:hidden flex h-10 w-10 flex-col items-center justify-center gap-1.5"
          >
            <span className="block h-px w-6 bg-cream" />
            <span className="block h-px w-6 bg-cream" />
            <span className="block h-px w-4 self-end mr-2 bg-accent" />
          </button>
        </div>
      </nav>

      {/* mobile slide-in drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              className="fixed inset-0 bg-black/60 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              key="drawer"
              className="fixed right-0 top-0 h-screen w-[78%] max-w-xs bg-coal border-l border-line md:hidden flex flex-col px-8 pt-24 pb-10"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="absolute right-6 top-6 text-muted hover:text-cream text-2xl leading-none"
              >
                ✕
              </button>
              <ul className="flex flex-col gap-7">
                {LINKS.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06 }}
                  >
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="font-display text-2xl uppercase tracking-tightest hover:text-accent transition-colors"
                    >
                      {l.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="btn-primary mt-auto justify-center"
              >
                Message on WhatsApp
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
