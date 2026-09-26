import { motion, useReducedMotion } from "motion/react";
import { Reveal, SectionHeader } from "./primitives";

const FLOATERS = [
  { text: "Rajesh K. · At ABC Corp · Deal ₹1.2 L", tone: "bg-success", pos: "left-0 top-6 sm:-left-10" },
  { text: "Priya S. · Traveling · 3 of 7 visits done", tone: "bg-warn", pos: "right-0 top-24 sm:-right-8" },
  { text: "Amit V. · Idle 22 min", tone: "bg-idle", pos: "left-0 bottom-24 sm:-left-12" },
  { text: "Neha M. · Target 92%", tone: "bg-brand", pos: "right-0 bottom-6 sm:-right-6" },
];

const LEGEND = [
  { label: "At Client", dot: "bg-success" },
  { label: "Traveling", dot: "bg-warn" },
  { label: "Idle", dot: "bg-idle" },
  { label: "Offline", dot: "bg-offline" },
];

export function Solution() {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden bg-brand-soft py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 map-dots opacity-60" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="The solution"
          sub="Live location, client visits, meeting notes and sales performance — all in one place, all automatic."
        >
          One App. Your Entire Field Sales Team.
          <br />
          <span className="text-brand">Live &amp; Transparent.</span>
        </SectionHeader>

        <div className="relative mx-auto mt-14 max-w-md">
          {FLOATERS.map((f, i) => (
            <motion.div
              key={f.text}
              className={`absolute z-10 max-w-[62%] rounded-2xl border border-brand-tint bg-white px-3 py-2 text-xs font-semibold text-navy shadow-card sm:max-w-none sm:text-sm ${f.pos}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 * i, duration: 0.45 }}
            >
              <span className="mr-2 inline-block h-2 w-2 rounded-full align-middle">
                <span className={`block h-2 w-2 rounded-full ${f.tone}`} />
              </span>
              {f.text}
            </motion.div>
          ))}

          <Reveal>
            <motion.div
              initial={reduce ? false : { rotateY: -14, rotateX: 8 }}
              whileInView={{ rotateY: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8 }}
              className="mx-auto w-[260px] rounded-[34px] border-[10px] border-navy bg-white p-3 shadow-card-lg sm:w-[290px]"
            >
              <p className="text-center font-display text-sm font-bold text-navy">Team Today</p>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {[
                  { n: 4, l: "At Client", c: "text-success bg-success/10" },
                  { n: 3, l: "Traveling", c: "text-warn bg-warn/10" },
                  { n: 1, l: "Idle", c: "text-idle bg-idle/10" },
                ].map((k) => (
                  <div key={k.l} className={`rounded-xl px-2 py-2 text-center ${k.c}`}>
                    <p className="font-display text-lg font-extrabold">{k.n}</p>
                    <p className="text-[10px] font-semibold">{k.l}</p>
                  </div>
                ))}
              </div>
              <div className="mt-3 rounded-2xl bg-brand-soft p-2">
                <svg viewBox="0 0 220 120" className="w-full">
                  <rect width="220" height="120" rx="10" fill="white" />
                  <g stroke="var(--color-brand-tint)" strokeWidth="4">
                    <path d="M0 45 H220" />
                    <path d="M0 88 H220" />
                    <path d="M70 0 V120" />
                    <path d="M155 0 V120" />
                  </g>
                  {[
                    [34, 24, "var(--color-success)"],
                    [104, 30, "var(--color-warn)"],
                    [186, 60, "var(--color-success)"],
                    [50, 100, "var(--color-idle)"],
                    [140, 104, "var(--color-brand)"],
                  ].map(([x, y, c], i) => (
                    <g key={i}>
                      <circle cx={x as number} cy={y as number} r="9" fill={c as string} opacity="0.2" />
                      <circle cx={x as number} cy={y as number} r="4.5" fill={c as string} />
                    </g>
                  ))}
                </svg>
              </div>
              <div className="mt-3">
                <div className="flex justify-between text-[11px] font-semibold text-body">
                  <span>Team target</span>
                  <span className="text-success">68%</span>
                </div>
                <div className="mt-1 h-2 w-full rounded-full bg-brand-tint">
                  <motion.div
                    className="h-2 rounded-full bg-success"
                    initial={{ width: 0 }}
                    whileInView={{ width: "68%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  />
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-24 flex flex-wrap justify-center gap-4 sm:mt-14">
            {LEGEND.map((l) => (
              <span
                key={l.label}
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-navy shadow-card"
              >
                <span className={`h-2 w-2 rounded-full ${l.dot}`} /> {l.label}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
