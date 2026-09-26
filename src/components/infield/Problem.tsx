import { AlertTriangle, FileWarning, Fuel, MapPinOff, Receipt } from "lucide-react";
import { Reveal, SectionHeader } from "./primitives";

const PAINS = [
  {
    icon: MapPinOff,
    title: "Kaun kahan hai?",
    line: "No idea where anyone is during the day.",
  },
  {
    icon: FileWarning,
    title: "Reports you can't verify",
    line: "“Met 10 clients” — but did they?",
  },
  {
    icon: Fuel,
    title: "Long routes, high petrol bills",
    line: "Random routes waste hours and fuel.",
  },
  {
    icon: AlertTriangle,
    title: "Territory overlap",
    line: "Reps wander into other zones, clients get missed.",
  },
  {
    icon: Receipt,
    title: "Incentive disputes",
    line: "Manual commission sheets every month.",
  },
];

export function Problem() {
  return (
    <section id="problem" className="bg-white py-20 pt-28 sm:py-24 sm:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="The daily blind spot">
          Your Sales Team Is Out All Day.
          <br />
          <span className="text-brand">You See Nothing.</span>
        </SectionHeader>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative mx-auto max-w-sm">
              <div className="rounded-3xl border border-brand-tint bg-brand-soft p-5 shadow-card">
                <p className="text-xs font-semibold text-body">Daily report · 8:42 PM</p>
                <div className="mt-3 rounded-2xl rounded-bl-sm bg-white p-4 shadow-card">
                  <p className="font-display text-base font-bold text-navy">
                    Met 8 clients today ✓
                  </p>
                  <p className="mt-1 text-sm text-body">5 deals will close</p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="-rotate-6 rounded-lg border-2 border-destructive px-3 py-1 font-display text-sm font-extrabold uppercase tracking-wide text-destructive">
                    Unverified?
                  </span>
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-destructive/10 font-display text-xl font-extrabold text-destructive">
                    <span className="animate-pulse">?</span>
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-3">
            {PAINS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <div className="card-soft flex min-w-0 items-start gap-3 p-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-tint">
                    <p.icon className="h-5 w-5 text-brand" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-display text-[18px] font-bold text-navy">{p.title}</p>
                    <p className="text-sm text-body">{p.line}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal>
          <p className="mt-12 text-center font-display text-xl font-bold text-navy sm:text-2xl">
            You can't grow what you can't see.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
