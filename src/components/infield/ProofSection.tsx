import { Reveal } from "./primitives";

const stats = [
  {
    value: "30%",
    label: "Increase in Daily Client Visits",
    desc: "By optimizing routes and reducing idle time.",
  },
  {
    value: "2 Hrs",
    label: "Saved on Route Planning Daily",
    desc: "Automated routing replaces manual planning.",
  },
  {
    value: "100%",
    label: "Elimination of Fake Reporting",
    desc: "GPS-verified check-ins enforce honesty.",
  },
];

export function ProofSection() {
  return (
    <section className="bg-muted py-24 border-y border-border map-dots">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">
            Trusted by 500+ Indian Businesses
          </h2>
          <p className="mt-4 text-lg text-body max-w-2xl mx-auto">
            From pharma to FMCG, companies are switching to InField to get real visibility into their on-ground operations.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <div className="rounded-[2rem] bg-white p-8 shadow-card border border-border h-full flex flex-col justify-center transition-transform hover:-translate-y-1 hover:shadow-card-lg">
                <div className="text-[2.5rem] font-bold text-secondary leading-none">
                  {stat.value}
                </div>
                <div className="mt-4 text-lg font-bold text-navy leading-tight">
                  {stat.label}
                </div>
                <div className="mt-2 text-sm text-body">
                  {stat.desc}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
