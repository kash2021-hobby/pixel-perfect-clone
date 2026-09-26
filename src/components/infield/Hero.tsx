import { ArrowRight, BadgeCheck, MapPin, Route, Wallet } from "lucide-react";
import { motion } from "motion/react";
import { CityMap, DEFAULT_PINS } from "./CityMap";
import { Eyebrow, PrimaryButton, Reveal, SecondaryButton } from "./primitives";

const TRUST = [
  { icon: MapPin, label: "Live GPS Tracking" },
  { icon: BadgeCheck, label: "Verified Client Visits" },
  { icon: Route, label: "Smart Route Planning" },
  { icon: Wallet, label: "Auto Incentives" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-brand-soft pt-24 sm:pt-28">
      <div className="pointer-events-none absolute inset-0 map-dots opacity-70" />
      <div className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-brand/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-24 h-64 w-64 rounded-full bg-success/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-28 pt-6 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:pb-36">
        <div>
          <Reveal>
            <Eyebrow>📍 Field Sales Team Tracking App</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-5 text-sm italic text-body sm:text-base">
              Kaun kahan gaya? Kis client se mila? Report sach hai ya nahi?
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-3 text-[clamp(1.9rem,6.4vw,3.6rem)] font-extrabold leading-[1.12]">
              Know Where Your Sales Team Is —
              <br />
              <span className="text-brand">
                And Prove <span className="underline-green">Every Client Visit.</span>
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-5 max-w-xl text-base text-body sm:text-lg">
              InField tracks your field sales team live, verifies every client visit with
              GPS, plans daily routes and calculates incentives automatically.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href="#contact">
                Book a Free Demo <ArrowRight className="h-4 w-4" />
              </PrimaryButton>
              <SecondaryButton href="#features">See How It Works</SecondaryButton>
            </div>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="mt-4 text-sm text-body">
              Works on Android &amp; iPhone · Setup support included
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="relative">
          <div className="relative mx-auto max-w-xl rounded-[26px] border border-brand-tint bg-white p-3 shadow-card-lg">
            <div className="mb-2 flex items-center justify-between px-1">
              <span className="font-display text-sm font-bold text-navy">Team Live Map</span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-success/10 px-2.5 py-1 text-[11px] font-semibold text-success">
                <span className="h-1.5 w-1.5 rounded-full bg-success" /> Live
              </span>
            </div>
            <CityMap pins={DEFAULT_PINS} />
          </div>

          <FloatCard
            className="left-0 top-2 sm:-left-6"
            tone="success"
            title="✓ Rajesh K. checked in at ABC Corp"
            meta="11:42 AM"
          />
          <FloatCard
            className="-bottom-6 right-0 sm:-right-4"
            tone="warn"
            title="Priya S. · Traveling"
            meta="ETA 12 min"
          />
          <FloatCard
            className="-bottom-10 left-2 hidden sm:block"
            tone="brand"
            title="Today: 38 visits verified"
            meta="Team total"
          />
        </Reveal>
      </div>

      {/* Trust strip overlapping hero bottom */}
      <div className="relative mx-auto -mb-12 max-w-6xl translate-y-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-3 rounded-3xl border border-brand-tint bg-white p-4 shadow-card sm:p-6 lg:grid-cols-4">
          {TRUST.map((t) => (
            <div key={t.label} className="flex min-w-0 items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-tint">
                <t.icon className="h-5 w-5 text-brand" />
              </span>
              <span className="font-display text-sm font-bold leading-tight text-navy">
                {t.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FloatCard({
  title,
  meta,
  tone,
  className = "",
}: {
  title: string;
  meta: string;
  tone: "success" | "warn" | "brand";
  className?: string;
}) {
  const dot =
    tone === "success" ? "bg-success" : tone === "warn" ? "bg-warn" : "bg-brand";
  return (
    <motion.div
      className={`absolute z-10 rounded-2xl border border-brand-tint bg-white px-3.5 py-2.5 shadow-card ${className}`}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="flex items-center gap-2">
        <span className={`h-2 w-2 shrink-0 rounded-full ${dot}`} />
        <span className="font-display text-xs font-bold text-navy sm:text-sm">{title}</span>
      </div>
      <span className="ml-4 text-[11px] text-body">{meta}</span>
    </motion.div>
  );
}
