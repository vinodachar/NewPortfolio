import Reveal from "./Reveal.jsx";

const ROLES = [
  {
    org: "Instagram — @ai.with.vi_",
    role: "Content Creator",
    period: "Jan 2026 — Present",
    place: "Bengaluru",
    body: "Grew 30K+ followers in 3 months with Kannada-first AI content — tools, automation and productivity.",
    highlight: true,
  },
  {
    org: "Capgemini",
    role: "Consultant",
    period: "May 2025 — Present",
    place: "Bengaluru",
    body: "Cloud & DevOps consulting across enterprise engagements.",
  },
  {
    org: "Infosys",
    role: "Senior System Engineer",
    period: "Jul 2024 — May 2025",
    place: "Bengaluru",
    body: "Docker/ECR pipelines cutting deployment time 20%; Kubernetes orchestration; Terraform for EC2, EKS, VPC and IAM; Jenkins CI/CD.",
  },
  {
    org: "Infosys",
    role: "System Engineer",
    period: "Apr 2022 — Jun 2024",
    place: "Bengaluru",
    body: "AWS EC2, VPC, Route53, ELB, IAM, RDS and EKS; Docker environments for Finacle banking demos.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-36 bg-coal">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="eyebrow mb-4">Experience</p>
          <h2 className="display-lg max-w-3xl">
            The engineering
            <span className="text-accent"> behind the content.</span>
          </h2>
        </Reveal>

        <div className="relative mt-16 ml-3 border-l border-line">
          {ROLES.map((r, i) => (
            <Reveal key={r.org + r.period} delay={0.08 * i}>
              <article className="relative pb-12 pl-8 md:pl-12 last:pb-0">
                {/* timeline node */}
                <span
                  className={`absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full ${
                    r.highlight ? "bg-accent shadow-[0_0_16px_rgba(62,159,255,0.8)]" : "bg-muted"
                  }`}
                />
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
                  <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight">
                    {r.role}
                    <span className="text-muted"> · {r.org}</span>
                  </h3>
                  <span className="font-display text-[11px] uppercase tracking-wideish text-muted shrink-0">
                    {r.period} · {r.place}
                  </span>
                </div>
                <p className="mt-3 max-w-2xl text-sm md:text-base leading-relaxed text-muted">
                  {r.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
