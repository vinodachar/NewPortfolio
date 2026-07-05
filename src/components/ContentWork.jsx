import Reveal from "./Reveal.jsx";
import { INSTAGRAM } from "../constants.js";

// Instagram profile spec-sheet numbers.
// NOTE: replace with live numbers before launch.
const PROFILE_STATS = [
  { value: "89", label: "Posts" },
  { value: "34.2K", label: "Followers" },
  { value: "169", label: "Following" },
];

const PILLARS = [
  {
    title: "Daily AI Updates in Kannada",
    body: "The latest AI news and launches, decoded for a Kannada-first audience every single day.",
    tag: "01",
  },
  {
    title: "AI Tool Breakdowns",
    body: "Hands-on walkthroughs of the tools that actually matter — what they do, and how to use them.",
    tag: "02",
  },
  {
    title: "Automation Workflows",
    body: "End-to-end automations that save hours — built live, explained simply.",
    tag: "03",
  },
  {
    title: "Prompt Engineering Tutorials",
    body: "How to talk to AI so it actually delivers — frameworks, templates, real examples.",
    tag: "04",
  },
];

export default function ContentWork() {
  return (
    <section id="content" className="relative py-24 md:py-36 bg-coal">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="eyebrow mb-4">The Content</p>
          <h2 className="display-lg">
            What I build,
            <span className="text-accent"> millions watch.</span>
          </h2>
        </Reveal>

        {/* flagship platform — Instagram spec-sheet card */}
        <Reveal delay={0.15}>
          <div className="card mt-14 overflow-hidden">
            <div className="grid md:grid-cols-[1.2fr_2fr]">
              {/* identity panel */}
              <div className="relative flex flex-col justify-between gap-8 border-b md:border-b-0 md:border-r border-line p-8 md:p-10 bg-gradient-to-br from-accent-soft to-transparent">
                <div>
                  <span className="font-display text-xs uppercase tracking-wideish text-muted">
                    Flagship platform
                  </span>
                  <h3 className="mt-4 font-display text-3xl md:text-4xl font-bold tracking-tightest">
                    @ai.with.vi_
                  </h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">
                    Instagram · AI, automation &amp; productivity — taught in
                    Kannada.
                  </p>
                </div>
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary self-start"
                >
                  Follow on Instagram
                </a>
              </div>

              {/* spec-sheet numbers */}
              <div className="grid grid-cols-3 divide-x divide-line">
                {PROFILE_STATS.map((s) => (
                  <div
                    key={s.label}
                    className="flex flex-col items-center justify-center gap-2 py-12 md:py-0"
                  >
                    <span className="font-display text-3xl md:text-6xl font-bold tracking-tightest">
                      {s.value}
                    </span>
                    <span className="font-display text-[10px] md:text-xs uppercase tracking-wideish text-muted">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* content pillars */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PILLARS.map((p, i) => (
            <Reveal key={p.tag} delay={0.1 + i * 0.1}>
              <div className="card group h-full p-7 transition-colors duration-300 hover:border-accent/50">
                <span className="font-display text-sm text-accent">
                  {p.tag}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold uppercase tracking-tight leading-snug">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
