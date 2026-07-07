import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Reveal from "./Reveal.jsx";

// NOTE: replace stat numbers with live data before launch.
const SUPPORT_STATS = [
  { to: 34.2, decimals: 1, suffix: "K+", label: "Followers" },
  { to: 30, decimals: 0, suffix: "K+", label: "Growth in 3 months" },
  { to: 3, decimals: 0, suffix: "", label: "Services — ads, editing, workshops" },
  { to: 89, decimals: 0, suffix: "", label: "Posts, consistent growth" },
];

/** Animated count-up that starts when scrolled into view. */
function Counter({ to, decimals = 0, suffix = "", className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 1800, bounce: 0 });
  const text = useTransform(spring, (v) => v.toFixed(decimals) + suffix);

  useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, mv, to]);

  return (
    <motion.span ref={ref} className={className}>
      {text}
    </motion.span>
  );
}

export default function Stats() {
  return (
    <section className="relative overflow-hidden py-24 md:py-36">
      {/* accent glow behind the hero number */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(45% 45% at 50% 45%, rgba(62,159,255,0.10) 0%, transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8 text-center">
        <Reveal>
          <p className="eyebrow">The Numbers</p>
        </Reveal>

        {/* headline stat — Jesko "5K+ flights" treatment */}
        <Reveal delay={0.1}>
          <div className="mt-6">
            <Counter
              to={3}
              suffix="M+"
              className="block font-display font-bold tracking-tightest leading-none text-accent text-[clamp(5rem,18vw,15rem)]"
            />
            <p className="mt-2 font-display text-sm md:text-base uppercase tracking-wideish text-muted">
              Average views per month
            </p>
          </div>
        </Reveal>

        {/* supporting stat row */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 border-t border-line pt-14">
          {SUPPORT_STATS.map((s, i) => (
            <Reveal key={s.label} delay={0.1 + i * 0.08}>
              <div className="flex flex-col items-center gap-2">
                <Counter
                  to={s.to}
                  decimals={s.decimals}
                  suffix={s.suffix}
                  className="font-display text-4xl md:text-5xl font-bold tracking-tightest"
                />
                <span className="font-display text-[10px] md:text-xs uppercase tracking-wideish text-muted">
                  {s.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
