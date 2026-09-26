import {
  ArrowRight,
  BarChart3,
  ChevronRight,
  ClipboardCheck,
  MapPin,
  Route,
  ShieldAlert,
  Wallet,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal, SectionHeader } from "./primitives";

type Feature = {
  icon: LucideIcon;
  title: string;
  line: string;
  href: string;
  preview: React.ReactNode;
};

const miniMap = (
  <svg viewBox="0 0 200 90" className="w-full">
    <rect width="200" height="90" rx="10" fill="var(--color-brand-soft)" />
    <g stroke="var(--color-brand-tint)" strokeWidth="4">
      <path d="M0 34 H200" />
      <path d="M70 0 V90" />
      <path d="M140 0 V90" />
    </g>
    <circle cx="44" cy="58" r="6" fill="var(--color-success)" />
    <circle cx="108" cy="22" r="6" fill="var(--color-warn)" />
    <circle cx="168" cy="64" r="6" fill="var(--color-brand)" />
  </svg>
);

const miniCheckIn = (
  <div className="space-y-1.5 rounded-xl bg-brand-soft p-3">
    <div className="rounded-lg bg-white px-2 py-1.5 text-[10px] font-semibold text-navy">
      ABC Corp · Sector 62
    </div>
    <div className="rounded-lg bg-success px-2 py-1.5 text-[10px] font-semibold text-white">
      Location verified ✓ 11:42 AM
    </div>
  </div>
);

const miniRoute = (
  <svg viewBox="0 0 200 90" className="w-full">
    <rect width="200" height="90" rx="10" fill="var(--color-brand-soft)" />
    <path
      d="M24 70 L70 46 L118 60 L164 22"
      fill="none"
      stroke="var(--color-brand)"
      strokeWidth="3"
    />
    {[
      [24, 70],
      [70, 46],
      [118, 60],
      [164, 22],
    ].map(([x, y], i) => (
      <g key={i}>
        <circle cx={x} cy={y} r="8" fill="white" stroke="var(--color-brand)" strokeWidth="2" />
        <text x={x} y={y + 3} fontSize="8" textAnchor="middle" fill="var(--color-navy)">
          {i + 1}
        </text>
      </g>
    ))}
  </svg>
);

const miniZones = (
  <svg viewBox="0 0 200 90" className="w-full">
    <rect width="200" height="90" rx="10" fill="var(--color-brand-soft)" />
    <rect x="8" y="8" width="88" height="34" rx="6" fill="var(--color-brand)" opacity="0.25" />
    <rect x="104" y="8" width="88" height="34" rx="6" fill="var(--color-success)" opacity="0.25" />
    <rect x="8" y="48" width="88" height="34" rx="6" fill="var(--color-zone-east)" opacity="0.25" />
    <rect x="104" y="48" width="88" height="34" rx="6" fill="var(--color-zone-west)" opacity="0.25" />
    <circle cx="120" cy="30" r="6" fill="var(--color-idle)" />
  </svg>
);

const miniChart = (
  <div className="flex h-[70px] items-end gap-1.5 rounded-xl bg-brand-soft p-3">
    {[40, 62, 48, 80, 58, 92, 70].map((h, i) => (
      <span
        key={i}
        className="flex-1 rounded-t bg-brand"
        style={{ height: `${h}%`, opacity: 0.35 + i * 0.09 }}
      />
    ))}
  </div>
);

const miniPayout = (
  <div className="space-y-1 rounded-xl bg-brand-soft p-3 text-[10px] font-semibold text-navy">
    <div className="flex justify-between">
      <span>Base</span>
      <span>₹18,000</span>
    </div>
    <div className="flex justify-between">
      <span>Commission</span>
      <span>₹9,000</span>
    </div>
    <div className="flex justify-between text-success">
      <span>Total</span>
      <span>₹34,520</span>
    </div>
  </div>
);

const FEATURES: Feature[] = [
  {
    icon: MapPin,
    title: "Live GPS Tracking",
    line: "See every salesperson on the map in real time.",
    href: "#feature-01",
    preview: miniMap,
  },
  {
    icon: ClipboardCheck,
    title: "Client Check-In & Notes",
    line: "GPS-verified visits with notes and photos.",
    href: "#feature-02",
    preview: miniCheckIn,
  },
  {
    icon: Route,
    title: "Smart Route Planning",
    line: "The best route for every day, less fuel.",
    href: "#feature-03",
    preview: miniRoute,
  },
  {
    icon: ShieldAlert,
    title: "Territory Alerts",
    line: "Know when someone leaves their zone for 30+ min.",
    href: "#feature-04",
    preview: miniZones,
  },
  {
    icon: BarChart3,
    title: "Performance Dashboard",
    line: "Visits, deals, revenue and targets per rep.",
    href: "#feature-05",
    preview: miniChart,
  },
  {
    icon: Wallet,
    title: "Salary & Incentives",
    line: "Base, commission, travel allowance — auto-calculated.",
    href: "#feature-06",
    preview: miniPayout,
  },
];

export function FeaturesGrid() {
  return (
    <section id="features" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Features">
          Everything You Need to Run a{" "}
          <span className="text-brand">Field Sales Team</span>
        </SectionHeader>

        {/* Desktop / tablet grid */}
        <div className="mt-12 hidden gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
              <div className="card-soft h-full p-4">
                <div className="overflow-hidden rounded-xl">{f.preview}</div>
                <span className="mt-4 grid h-10 w-10 place-items-center rounded-xl bg-brand-tint">
                  <f.icon className="h-5 w-5 text-brand" />
                </span>
                <p className="mt-3 font-display text-lg font-bold text-navy">{f.title}</p>
                <p className="mt-1 text-sm text-body">{f.line}</p>
                <a
                  href={f.href}
                  className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand"
                >
                  See how it works <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Mobile thumbnail list */}
        <div className="mt-10 grid gap-3 sm:hidden">
          {FEATURES.map((f) => (
            <a
              key={f.title}
              href={f.href}
              className="card-soft grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 p-3"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-tint">
                <f.icon className="h-5 w-5 text-brand" />
              </span>
              <span className="min-w-0">
                <span className="block truncate font-display text-[15px] font-bold text-navy">
                  {f.title}
                </span>
                <span className="block text-xs text-body">{f.line}</span>
              </span>
              <ChevronRight className="h-5 w-5 shrink-0 text-brand" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
