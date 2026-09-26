import { SectionHeader, Reveal } from "./primitives";

const steps = [
  {
    num: "1",
    title: "Request a Free Demo",
    desc: "Fill the form. We'll show you how it works for your specific industry.",
  },
  {
    num: "2",
    title: "Add Your Team",
    desc: "Import your sales team and clients in 5 minutes. No technical skills needed.",
  },
  {
    num: "3",
    title: "Go Live Today",
    desc: "Your team downloads the app, and you start seeing live data instantly.",
  },
];

export function GetStarted() {
  return (
    <section className="bg-white py-24 sm:py-32 map-dots">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Get started">
          Live in 24 Hours. <span className="text-secondary">Zero Setup Hassle.</span>
        </SectionHeader>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.num} delay={i * 0.1}>
              <div className="relative rounded-[2rem] border border-border bg-white p-8 shadow-card text-center h-full flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand text-2xl font-bold text-white shadow-sm mb-6">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-navy">{step.title}</h3>
                <p className="mt-3 text-body">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
