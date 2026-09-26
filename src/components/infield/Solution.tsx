import { motion, useReducedMotion } from "motion/react";
import { MapPin, CheckCircle2, FileText, BarChart3 } from "lucide-react";
import { SectionHeader, Reveal } from "./primitives";
import { CityMap, DEFAULT_PINS } from "./CityMap";

const orbitCards = [
  { icon: MapPin, text: "Live location", position: "top-10 -left-16 sm:-left-32" },
  { icon: CheckCircle2, text: "Client visits", position: "top-1/4 -right-12 sm:-right-28" },
  { icon: FileText, text: "Meeting notes", position: "bottom-1/4 -left-12 sm:-left-28" },
  { icon: BarChart3, text: "Sales performance", position: "bottom-10 -right-16 sm:-right-32" },
];

export function Solution() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-white py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="The Solution" sub="Imagine having your entire field team's live status, verified visits, and sales data right at your fingertips.">
          What If You Could Manage Every Rep<br />
          <span className="text-secondary">In Just One App?</span>
        </SectionHeader>

        <div className="mt-20 flex flex-col items-center">
          <div className="relative w-full max-w-[340px]">
            {/* Orbiting Cards */}
            {orbitCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <Reveal
                  key={card.text}
                  delay={0.2 + i * 0.15}
                  className={`absolute z-30 hidden sm:block ${card.position}`}
                >
                  <div className="flex items-center gap-2 rounded-xl border border-border bg-white p-2.5 shadow-card-lg float-slow" style={{ animationDelay: `${i * 0.5}s` }}>
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-soft text-secondary">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-semibold text-navy whitespace-nowrap pr-2">{card.text}</span>
                  </div>
                </Reveal>
              );
            })}

            {/* Phone Mockup with 3D effect */}
            <motion.div
              initial={reduce ? false : { rotateY: 15, rotateX: 10, scale: 0.95, opacity: 0 }}
              whileInView={{ rotateY: 0, rotateX: 0, scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-20 mx-auto w-full max-w-[320px] rounded-[2.5rem] border-[8px] border-navy bg-gray-50 shadow-[0_20px_50px_rgba(11,31,75,0.2)] overflow-hidden flex flex-col"
              style={{ perspective: "1000px" }}
            >
              {/* App Header */}
              <div className="bg-white px-4 py-4 pt-8 border-b border-border shadow-sm relative z-10">
                <h3 className="font-bold text-navy text-lg text-center">Team Today</h3>
              </div>

              {/* App Content */}
              <div className="flex-1 p-4 flex flex-col gap-4 bg-muted">
                {/* Status Counters */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-white rounded-xl p-2 text-center shadow-sm">
                    <div className="text-xl font-bold text-success">4</div>
                    <div className="text-[10px] font-semibold text-body">At Client</div>
                  </div>
                  <div className="bg-white rounded-xl p-2 text-center shadow-sm">
                    <div className="text-xl font-bold text-warn">3</div>
                    <div className="text-[10px] font-semibold text-body">Traveling</div>
                  </div>
                  <div className="bg-white rounded-xl p-2 text-center shadow-sm">
                    <div className="text-xl font-bold text-idle">1</div>
                    <div className="text-[10px] font-semibold text-body">Idle</div>
                  </div>
                </div>

                {/* Mini Map */}
                <div className="bg-white rounded-xl p-2 shadow-sm border border-border h-[180px] relative overflow-hidden flex-shrink-0">
                  <div className="absolute top-2 left-2 z-10 bg-white/90 px-2 py-0.5 rounded text-[10px] font-semibold shadow-sm text-navy">Live Map</div>
                  <CityMap pins={DEFAULT_PINS} compact className="absolute inset-0 h-full w-full object-cover rounded-lg" />
                </div>

                {/* Progress Bar */}
                <div className="bg-white rounded-xl p-4 shadow-sm border border-border mt-auto">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-xs font-semibold text-navy">Team Target</span>
                    <span className="text-sm font-bold text-success">68%</span>
                  </div>
                  <div className="h-2.5 w-full bg-success-soft rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-success rounded-full"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "68%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    />
                  </div>
                  <div className="mt-2 text-[10px] text-body text-right">₹5.4L / ₹8.0L</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Status Legend */}
          <Reveal delay={0.4} className="mt-12 flex flex-wrap justify-center gap-4 sm:gap-6">
            <LegendItem color="bg-success" label="At Client" />
            <LegendItem color="bg-warn" label="Traveling" />
            <LegendItem color="bg-idle" label="Idle" />
            <LegendItem color="bg-offline" label="Offline" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function LegendItem({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className={`h-2.5 w-2.5 rounded-full ${color}`} />
      <span className="text-sm font-medium text-navy">{label}</span>
    </div>
  );
}
