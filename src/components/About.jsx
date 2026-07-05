import Reveal from "./Reveal.jsx";

const CARDS = [
  {
    title: "Content at Scale",
    body: "Kannada AI content reaching 3M+ average views — built for reach, made to stick.",
    icon: "📡",
  },
  {
    title: "Real Engineering Background",
    body: "4+ years shipping cloud systems with AWS, Kubernetes, Docker and Terraform.",
    icon: "⚙️",
  },
  {
    title: "Prompt Engineering",
    body: "Deep hands-on expertise turning AI tools into repeatable, practical workflows.",
    icon: "⌘",
  },
  {
    title: "Community Growth",
    body: "30K+ engaged followers grown organically in months — no ads, just value.",
    icon: "↗",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="eyebrow mb-4">About</p>
          <h2 className="display-lg max-w-4xl">
            Engineer by training.
            <span className="text-accent"> Creator by obsession.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-8 max-w-3xl text-lg md:text-xl leading-relaxed text-muted">
            I&apos;m an AI Content Creator and DevOps Engineer building at the
            intersection of automation, cloud, and artificial intelligence.
            With 4+ years in DevOps, I&apos;ve designed scalable cloud systems
            using AWS, Kubernetes, Docker, and Terraform. Today I combine that
            technical depth with content — turning complex AI tools into
            simple, practical, viral-worthy insights for a Kannada-speaking
            audience.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CARDS.map((c, i) => (
            <Reveal key={c.title} delay={0.1 + i * 0.1}>
              <div className="card group h-full p-7 transition-colors duration-300 hover:border-accent/50">
                <span className="text-2xl text-accent">{c.icon}</span>
                <h3 className="mt-5 font-display text-lg font-semibold uppercase tracking-tight">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {c.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
