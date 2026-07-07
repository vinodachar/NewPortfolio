import Reveal from "./Reveal.jsx";
import { WHATSAPP, INSTAGRAM, LINKEDIN, EMAIL, EMAIL_ADDRESS } from "../constants.js";

const CHANNELS = [
  { label: "Email", value: EMAIL_ADDRESS, href: EMAIL },
  { label: "Instagram", value: "@ai.with.vi_", href: INSTAGRAM },
  { label: "LinkedIn", value: "in/vinod985", href: LINKEDIN },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-28 md:py-44 bg-coal">
      {/* accent glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 60% at 50% 100%, rgba(62,159,255,0.12) 0%, transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8 text-center">
        <Reveal>
          <p className="eyebrow mb-6">Contact</p>
          <h2 className="display-xl">
            <span className="block">Let&apos;s Build Something</span>
            <span className="block text-accent">In AI, Together</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mx-auto mt-8 max-w-md text-muted">
            One message away. WhatsApp is the fastest — AI ads, editing,
            workshops, collabs, or just AI talk. Email opens with a ready-made
            message.
          </p>
          <div className="mt-10">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="btn-primary !px-9 !py-4 !text-base"
            >
              Message on WhatsApp
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
            {CHANNELS.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-center gap-1"
              >
                <span className="font-display text-[10px] uppercase tracking-wideish text-muted">
                  {c.label}
                </span>
                <span className="font-display text-sm md:text-base group-hover:text-accent transition-colors duration-300">
                  {c.value}
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
