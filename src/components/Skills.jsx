import Reveal from "./Reveal.jsx";

const GROUPS = [
  {
    title: "Content & AI",
    skills: [
      "Prompt Engineering",
      "AI Tools & Automation",
      "Generative AI",
      "ChatGPT",
      "Content Strategy",
      "Prompt Writing",
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Kubernetes", "Docker", "Terraform", "Jenkins", "CI/CD"],
  },
];

const LANGUAGES = [
  { name: "Kannada", level: "Native" },
  { name: "English", level: "Full Professional" },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="eyebrow mb-4">Skills</p>
          <h2 className="display-lg">
            Two stacks,
            <span className="text-accent"> one operator.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {GROUPS.map((g, gi) => (
            <Reveal key={g.title} delay={0.1 + gi * 0.12}>
              <div className="card h-full p-8 md:p-10">
                <h3 className="font-display text-lg font-semibold uppercase tracking-tight">
                  <span className="text-accent mr-2">{gi === 0 ? "01" : "02"}</span>
                  {g.title}
                </h3>
                <div className="mt-6 flex flex-wrap gap-3">
                  {g.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-line bg-ink px-4 py-2 font-display text-xs uppercase tracking-wide text-cream/90 transition-colors duration-300 hover:border-accent hover:text-accent"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-6 card flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-10 p-8">
            <span className="font-display text-xs uppercase tracking-wideish text-muted">
              Languages
            </span>
            <div className="flex flex-wrap gap-x-10 gap-y-3">
              {LANGUAGES.map((l) => (
                <p key={l.name} className="font-display">
                  <span className="font-semibold">{l.name}</span>
                  <span className="text-muted text-sm"> — {l.level}</span>
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
