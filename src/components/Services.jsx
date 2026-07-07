import Reveal from "./Reveal.jsx";
import { VVLABS_INSTAGRAM, WHATSAPP } from "../constants.js";

const SERVICES = [
  {
    tag: "02",
    title: "Video Editing for Small Businesses",
    body: "End-to-end editing for reels, ads and promos — hooks, cuts, captions and sound design that make small brands look big. Affordable, fast turnarounds built for local businesses.",
    points: ["Reels & short-form edits", "Promo & product videos", "Captions, motion graphics & sound"],
  },
  {
    tag: "03",
    title: "AI Workshops & Training",
    body: "Hands-on AI workshops for schools, colleges and corporate teams — from AI fundamentals and prompt engineering to real automation workflows people use the next day.",
    points: ["Schools & colleges — AI fundamentals", "Corporate teams — AI productivity", "Live demos, tools & takeaway playbooks"],
  },
  {
    tag: "04",
    title: "AI-Powered Software & Websites",
    body: "Custom software solutions and websites built with AI — modern, fast and tailored to your business, from landing pages to full web apps with AI features baked in.",
    points: ["Business websites & landing pages", "Custom web apps & dashboards", "AI chatbots, automation & integrations"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="eyebrow mb-4">Services</p>
          <h2 className="display-lg max-w-4xl">
            Content that converts,
            <span className="text-accent"> built with AI.</span>
          </h2>
        </Reveal>

        {/* flagship — VV Labs studio card */}
        <Reveal delay={0.15}>
          <div className="card mt-14 overflow-hidden">
            <div className="grid md:grid-cols-[1.2fr_2fr]">
              <div className="relative flex flex-col justify-between gap-8 border-b md:border-b-0 md:border-r border-line p-8 md:p-10 bg-gradient-to-br from-accent-soft to-transparent">
                <div>
                  <span className="font-display text-xs uppercase tracking-wideish text-muted">
                    01 · AI Ad Studio
                  </span>
                  <h3 className="mt-4 font-display text-3xl md:text-4xl font-bold tracking-tightest">
                    VV Labs
                  </h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">
                    My AI video production studio — ads and brand films made
                    with AI, at a fraction of traditional cost and time.
                  </p>
                </div>
                <a
                  href={VVLABS_INSTAGRAM}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary self-start"
                >
                  See VV Labs on Instagram
                </a>
              </div>

              <div className="flex flex-col justify-center gap-6 p-8 md:p-10">
                <p className="text-base md:text-lg leading-relaxed text-muted">
                  VV Labs builds scroll-stopping AI video for brands — no film
                  crew, no studio rental, no week-long shoots. Concept to
                  final cut, fully AI-powered.
                </p>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {[
                    "AI video production for brands",
                    "AI-powered ad campaigns",
                    "Object-talking product videos",
                    "UGC-style AI creatives",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-cream/90">
                      <span className="mt-0.5 text-accent">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        {/* editing + workshops + software */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <Reveal key={s.tag} delay={0.1 + i * 0.1}>
              <div className="card group h-full p-8 md:p-10 transition-colors duration-300 hover:border-accent/50">
                <span className="font-display text-sm text-accent">{s.tag}</span>
                <h3 className="mt-4 font-display text-xl md:text-2xl font-semibold uppercase tracking-tight leading-snug">
                  {s.title}
                </h3>
                <p className="mt-4 text-sm md:text-base leading-relaxed text-muted">
                  {s.body}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm text-cream/90">
                      <span className="mt-0.5 text-accent">▸</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 text-center">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-ghost">
              Book a service on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
