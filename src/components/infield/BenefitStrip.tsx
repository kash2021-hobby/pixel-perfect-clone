import { MapPin, Map, CheckCircle2, TrendingUp } from "lucide-react";
import { Reveal } from "./primitives";

const benefits = [
  { icon: MapPin, text: "Live GPS Tracking" },
  { icon: CheckCircle2, text: "GPS-Verified Visits" },
  { icon: Map, text: "Smart Route Planning" },
  { icon: TrendingUp, text: "Auto Incentives" },
];

export function BenefitStrip() {
  return (
    <section className="bg-[#111111] border-b border-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <Reveal key={b.text} delay={i * 0.1} className="flex flex-col items-center gap-4 py-8 text-center sm:flex-row sm:text-left sm:justify-center px-4">
                <div className="flex flex-shrink-0 items-center justify-center text-white">
                  <Icon className="h-8 w-8 stroke-[1.5]" />
                </div>
                <span className="text-[15px] font-bold tracking-wide text-white uppercase">{b.text}</span>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
