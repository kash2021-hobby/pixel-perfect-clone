import { ArrowRight, Check, FileText, Image as ImageIcon } from "lucide-react";
import { motion } from "motion/react";
import type { ReactNode } from "react";
import { CityMap, DEFAULT_PINS } from "./CityMap";
import { Reveal } from "./primitives";

function Block({
  id,
  index,
  headline,
  sub,
  benefits,
  mockup,
  flip = false,
  tone = "light",
}: {
  id: string;
  index: string;
  headline: ReactNode;
  sub: string;
  benefits: string[];
  mockup: ReactNode;
  flip?: boolean;
  tone?: "light" | "soft" | "navy";
}) {
  const bg =
    tone === "navy" ? "bg-navy" : tone === "soft" ? "bg-brand-soft" : "bg-white";
  const dark = tone === "navy";
  return (
    <section id={id} className={`${bg} scroll-mt-20 py-16 sm:py-20`}>
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <Reveal className={flip ? "lg:order-2" : ""}>
          <span
            className={`inline-flex h-9 items-center rounded-full px-4 font-display text-sm font-bold ${
              dark ? "bg-white/10 text-white" : "bg-brand-tint text-brand"
            }`}
          >
            {index}
          </span>
          <h3
            className={`mt-4 text-[clamp(1.4rem,4.2vw,2.2rem)] font-bold leading-tight ${
              dark ? "text-white" : ""
            }`}
          >
            {headline}
          </h3>
          <p className={`mt-3 text-base ${dark ? "text-on-dark" : "text-body"}`}>{sub}</p>
          <ul className="mt-5 space-y-3">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-success">
                  <Check className="h-3 w-3 text-white" />
                </span>
                <span className={`text-sm ${dark ? "text-on-dark" : "text-body"}`}>{b}</span>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className={`mt-6 inline-flex items-center gap-1.5 text-sm font-semibold ${
              dark ? "text-white" : "text-brand"
            }`}
          >
            Book a Free Demo <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>

        <Reveal delay={0.1} className={flip ? "lg:order-1" : ""}>
          {mockup}
        </Reveal>
      </div>
    </section>
  );
}

function Phone({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`w-[230px] shrink-0 rounded-[28px] border-[8px] border-navy bg-white p-3 shadow-card-lg ${className}`}
    >
      {children}
    </div>
  );
}

/* ---------- 01 Live GPS tracking ---------- */
function TrackingMockup() {
  return (
    <div className="rounded-[26px] border border-brand-tint bg-white p-3 shadow-card-lg">
      <CityMap pins={DEFAULT_PINS} />
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl bg-brand-soft p-3">
          <p className="font-display text-sm font-bold text-navy">Zoom: Rajesh K.</p>
          <div className="mt-2 flex items-center gap-2 rounded-xl bg-white p-2">
            <span className="relative grid h-9 w-9 place-items-center rounded-lg bg-success/10">
              <span className="absolute h-9 w-9 rounded-lg bg-success/20 pulse-ring" />
              <span className="h-2.5 w-2.5 rounded-full bg-success" />
            </span>
            <div>
              <p className="text-xs font-semibold text-navy">ABC Corp · Office Tower B</p>
              <p className="text-[11px] text-success">In meeting · 00:24:10</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 text-[11px] font-semibold">
          {[
            ["Rajesh – At ABC Corp", "bg-success"],
            ["Priya – Traveling", "bg-warn"],
            ["Amit – At XYZ Ltd", "bg-success"],
            ["Neha – Traveling", "bg-warn"],
          ].map(([t, c]) => (
            <span
              key={t}
              className="flex items-center gap-1.5 rounded-lg border border-brand-tint px-2 py-1.5 text-navy"
            >
              <span className={`h-2 w-2 shrink-0 rounded-full ${c}`} />
              <span className="truncate">{t}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- 02 Check-in ---------- */
function CheckInMockup() {
  return (
    <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 lg:mx-0 lg:justify-center lg:overflow-visible lg:px-0">
      <Phone className="snap-center">
        <p className="font-display text-sm font-bold text-navy">ABC Corp</p>
        <p className="text-[11px] text-body">Sector 62, Noida</p>
        <div className="mt-3 rounded-xl bg-brand-soft p-3">
          <svg viewBox="0 0 160 80" className="w-full">
            <rect width="160" height="80" rx="8" fill="white" />
            <g stroke="var(--color-brand-tint)" strokeWidth="4">
              <path d="M0 30 H160" />
              <path d="M90 0 V80" />
            </g>
            <circle cx="70" cy="50" r="12" fill="var(--color-brand)" opacity="0.15" />
            <circle cx="70" cy="50" r="5" fill="var(--color-brand)" />
          </svg>
        </div>
        <button className="mt-3 w-full rounded-full bg-brand py-2.5 text-xs font-semibold text-white">
          Check-In at Client
        </button>
        <motion.div
          className="mt-3 rounded-xl bg-success/10 p-2 text-center text-[11px] font-semibold text-success"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          Location verified ✓ 11:42 AM
        </motion.div>
      </Phone>

      <Phone className="snap-center">
        <p className="font-display text-sm font-bold text-navy">Meeting notes</p>
        <div className="mt-3 space-y-2 text-[11px]">
          {[
            ["Summary", "Discussed bulk order for Q4"],
            ["Requirement", "500 units"],
            ["Deal Value", "₹1,20,000"],
            ["Next Follow-up", "02 Oct, 3:00 PM"],
          ].map(([l, v]) => (
            <div key={l} className="rounded-xl border border-brand-tint px-2.5 py-2">
              <p className="text-[10px] font-semibold text-body">{l}</p>
              <p className="font-semibold text-navy">{v}</p>
            </div>
          ))}
        </div>
      </Phone>

      <Phone className="snap-center">
        <p className="font-display text-sm font-bold text-navy">Attachments</p>
        <div className="mt-3 space-y-2">
          <div className="flex items-center gap-2 rounded-xl border border-brand-tint p-2">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand-tint">
              <ImageIcon className="h-4 w-4 text-brand" />
            </span>
            <span className="text-[11px] font-semibold text-navy">Business card.jpg</span>
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-brand-tint p-2">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand-tint">
              <FileText className="h-4 w-4 text-brand" />
            </span>
            <span className="text-[11px] font-semibold text-navy">Quotation.pdf</span>
          </div>
          <div className="rounded-xl bg-success px-2 py-2 text-center text-[11px] font-semibold text-white">
            Meeting Verified ✓
          </div>
        </div>
      </Phone>
    </div>
  );
}

/* ---------- 03 Route planning ---------- */
const STOPS: [number, number, string][] = [
  [40, 190, "ABC Corp"],
  [120, 132, "XYZ Ltd"],
  [200, 168, "Sharma Traders"],
  [280, 96, "Metro Distributors"],
  [356, 52, "Gupta Enterprises"],
];

function RouteMockup() {
  return (
    <div className="rounded-[26px] border border-brand-tint bg-white p-3 shadow-card-lg">
      <div className="mb-2 flex items-center justify-between px-1">
        <span className="font-display text-sm font-bold text-navy">Planned route · Today</span>
        <span className="rounded-full bg-brand-tint px-2 py-0.5 text-[10px] font-semibold text-brand">
          Example
        </span>
      </div>
      <svg viewBox="0 0 400 240" className="w-full">
        <rect width="400" height="240" rx="14" fill="var(--color-brand-soft)" />
        <g stroke="var(--color-brand-tint)" strokeWidth="5">
          <path d="M0 80 H400" />
          <path d="M0 160 H400" />
          <path d="M150 0 V240" />
          <path d="M300 0 V240" />
        </g>
        <motion.path
          d="M40 190 L120 132 L200 168 L280 96 L356 52"
          fill="none"
          stroke="var(--color-brand)"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6 }}
        />
        {STOPS.map(([x, y, name], i) => (
          <g key={name}>
            <circle cx={x} cy={y} r="13" fill="white" stroke="var(--color-brand)" strokeWidth="3" />
            <text x={x} y={y + 4.5} fontSize="12" fontWeight="700" textAnchor="middle" fill="var(--color-navy)">
              {i + 1}
            </text>
            <text x={x} y={y + 30} fontSize="10" textAnchor="middle" fill="var(--color-navy)">
              {name}
            </text>
          </g>
        ))}
        {[
          [80, 150, "9 km · 22 min"],
          [160, 165, "7 km · 16 min"],
          [240, 122, "11 km · 25 min"],
          [318, 62, "8 km · 18 min"],
        ].map(([x, y, t]) => (
          <g key={t as string}>
            <rect x={(x as number) - 34} y={(y as number) - 22} width="68" height="17" rx="8" fill="white" stroke="var(--color-brand-tint)" />
            <text x={x as number} y={(y as number) - 10} fontSize="9" textAnchor="middle" fill="var(--color-body)">
              {t}
            </text>
          </g>
        ))}
      </svg>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl bg-brand-soft p-3 text-sm">
          <p className="text-body line-through">Old route: 85 km · 6 hrs</p>
          <p className="mt-1 font-display font-bold text-success">Planned route: 52 km · 4 hrs</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-success/10 px-3 py-1.5 text-xs font-semibold text-success">
            33 km saved
          </span>
          <span className="rounded-full bg-success/10 px-3 py-1.5 text-xs font-semibold text-success">
            2 hrs saved
          </span>
        </div>
      </div>
    </div>
  );
}

/* ---------- 04 Territory alerts ---------- */
function TerritoryMockup() {
  return (
    <div className="rounded-[26px] border border-white/15 bg-white/5 p-3">
      <svg viewBox="0 0 400 240" className="w-full">
        <rect width="400" height="240" rx="14" fill="white" />
        <rect x="14" y="14" width="180" height="100" rx="10" fill="var(--color-brand)" opacity="0.14" />
        <rect x="206" y="14" width="180" height="100" rx="10" fill="var(--color-zone-east)" opacity="0.14" />
        <rect x="14" y="126" width="180" height="100" rx="10" fill="var(--color-success)" opacity="0.14" />
        <rect x="206" y="126" width="180" height="100" rx="10" fill="var(--color-zone-west)" opacity="0.14" />
        <motion.rect
          x="14"
          y="14"
          width="180"
          height="100"
          rx="10"
          fill="none"
          stroke="var(--color-idle)"
          strokeWidth="3"
          animate={{ opacity: [0.25, 1, 0.25] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <text x="30" y="34" fontSize="11" fontWeight="700" fill="var(--color-brand)">North Zone</text>
        <text x="222" y="34" fontSize="11" fontWeight="700" fill="var(--color-zone-east)">East Zone</text>
        <text x="30" y="146" fontSize="11" fontWeight="700" fill="var(--color-success)">South Zone</text>
        <text x="222" y="146" fontSize="11" fontWeight="700" fill="var(--color-zone-west)">West Zone</text>
        <motion.g
          animate={{ x: [0, 130], y: [0, 26] }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
        >
          <circle cx="120" cy="70" r="14" fill="var(--color-idle)" opacity="0.2" />
          <circle cx="120" cy="70" r="8" fill="var(--color-idle)" />
          <text x="120" y="73.5" fontSize="8" fontWeight="700" textAnchor="middle" fill="white">R</text>
        </motion.g>
        {["05", "15", "30"].map((t, i) => (
          <g key={t}>
            <rect x={40 + i * 54} y="196" width="44" height="20" rx="10" fill="var(--color-brand-soft)" />
            <text x={62 + i * 54} y="210" fontSize="10" textAnchor="middle" fill="var(--color-body)">
              {t} min
            </text>
          </g>
        ))}
        <rect x="202" y="196" width="52" height="20" rx="10" fill="var(--color-idle)" />
        <text x="228" y="210" fontSize="10" fontWeight="700" textAnchor="middle" fill="white">
          35 min
        </text>
      </svg>

      <div className="mt-4 flex flex-wrap justify-center gap-4">
        <Phone className="w-[200px]">
          <p className="text-[10px] font-semibold text-body">Manager</p>
          <div className="mt-2 rounded-xl bg-idle/10 p-2.5">
            <p className="text-[11px] font-semibold text-idle">
              ⚠ Rajesh K. out of assigned territory — 35 mins
            </p>
          </div>
        </Phone>
        <Phone className="w-[200px]">
          <p className="text-[10px] font-semibold text-body">Salesperson</p>
          <div className="mt-2 rounded-xl bg-brand-soft p-2.5">
            <p className="text-[11px] font-semibold text-navy">
              You're outside North Zone. Add a reason?
            </p>
            <div className="mt-2 flex gap-1.5">
              <span className="rounded-full bg-brand px-2 py-1 text-[10px] font-semibold text-white">
                Client meeting
              </span>
              <span className="rounded-full border border-brand px-2 py-1 text-[10px] font-semibold text-brand">
                Add reason
              </span>
            </div>
          </div>
        </Phone>
      </div>
    </div>
  );
}

/* ---------- 05 Performance dashboard ---------- */
const LEADERS = [
  ["🥇", "Rajesh K.", "142", "96", "18", "₹8.4 L", "112%", true],
  ["🥈", "Priya S.", "128", "88", "15", "₹7.1 L", "98%", true],
  ["🥉", "Neha M.", "119", "80", "13", "₹6.2 L", "91%", true],
  ["", "Amit V.", "96", "61", "9", "₹4.3 L", "72%", false],
  ["", "Karan P.", "84", "50", "7", "₹3.5 L", "64%", false],
] as const;

function DashboardMockup() {
  return (
    <div className="rounded-[26px] border border-brand-tint bg-white p-4 shadow-card-lg">
      <div className="flex items-center justify-between">
        <p className="font-display text-sm font-bold text-navy">Team performance · September</p>
        <span className="rounded-full bg-brand-tint px-2 py-0.5 text-[10px] font-semibold text-brand">
          Sample data
        </span>
      </div>

      <div className="mt-3 overflow-x-auto">
        <table className="w-full min-w-[420px] text-left text-xs">
          <thead>
            <tr className="text-[10px] uppercase tracking-wide text-body">
              <th className="py-2">Rep</th>
              <th>Visits</th>
              <th>Meetings</th>
              <th>Deals</th>
              <th>Revenue</th>
              <th>Target</th>
            </tr>
          </thead>
          <tbody>
            {LEADERS.map(([medal, name, v, m, d, r, t, up]) => (
              <tr key={name} className="border-t border-brand-tint">
                <td className="py-2">
                  <span className="flex items-center gap-2">
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-tint text-[10px] font-bold text-brand">
                      {name.slice(0, 1)}
                      {name.split(" ")[1]?.slice(0, 1)}
                    </span>
                    <span className="font-semibold text-navy">
                      {medal} {name}
                    </span>
                  </span>
                </td>
                <td className="font-semibold text-navy">{v}</td>
                <td className="text-body">{m}</td>
                <td className="text-body">{d}</td>
                <td className="font-semibold text-navy">{r}</td>
                <td className={up ? "font-semibold text-success" : "font-semibold text-idle"}>
                  {t} {up ? "▲" : "▼"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl bg-brand-soft p-3">
          <p className="text-[11px] font-semibold text-body">Visits this week</p>
          <div className="mt-2 flex h-24 items-end gap-2">
            {[52, 64, 48, 78, 70, 86, 40].map((h, i) => (
              <motion.span
                key={i}
                className="flex-1 rounded-t bg-brand"
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
              />
            ))}
          </div>
        </div>
        <div className="rounded-2xl bg-brand-soft p-3">
          <p className="text-[11px] font-semibold text-body">Monthly revenue</p>
          <svg viewBox="0 0 200 90" className="mt-2 w-full">
            <motion.path
              d="M6 76 L40 60 L74 66 L108 42 L142 30 L176 14"
              fill="none"
              stroke="var(--color-success)"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
            />
            {[
              [6, 76],
              [40, 60],
              [74, 66],
              [108, 42],
              [142, 30],
              [176, 14],
            ].map(([x, y]) => (
              <circle key={x} cx={x} cy={y} r="3.5" fill="var(--color-success)" />
            ))}
          </svg>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {["Star Performer", "Deal Closer", "Consistency King"].map((b, i) => (
          <motion.span
            key={b}
            className="rounded-full bg-success/10 px-3 py-1 text-[11px] font-semibold text-success"
            initial={{ scale: 0.7, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.15 }}
          >
            {b}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

/* ---------- 06 Salary & incentives ---------- */
function PayoutMockup() {
  return (
    <div className="rounded-[26px] border border-brand-tint bg-white p-4 shadow-card-lg">
      <div className="flex items-center justify-between">
        <div className="inline-flex rounded-full bg-brand-soft p-1 text-[11px] font-semibold">
          {["Weekly", "Monthly", "Quarterly"].map((t) => (
            <span
              key={t}
              className={`rounded-full px-3 py-1.5 ${
                t === "Monthly" ? "bg-brand text-white" : "text-body"
              }`}
            >
              {t}
            </span>
          ))}
        </div>
        <span className="rounded-full bg-brand-tint px-2 py-0.5 text-[10px] font-semibold text-brand">
          Sample data
        </span>
      </div>

      <div className="mt-4 rounded-2xl border border-brand-tint p-4">
        <p className="font-display text-sm font-bold text-navy">Payout slip · Rajesh K.</p>
        <div className="mt-3 space-y-2 text-sm">
          {[
            ["Base Salary", "₹18,000"],
            ["Visit Incentive · 120 visits × ₹20", "₹2,400"],
            ["Deal Commission · 6 deals × ₹1,500", "₹9,000"],
            ["Travel Allowance · 1,040 km × ₹3", "₹3,120"],
            ["Target Bonus", "₹2,000"],
          ].map(([l, v]) => (
            <div key={l} className="flex items-start justify-between gap-3 border-b border-brand-tint pb-2">
              <span className="text-body">{l}</span>
              <span className="shrink-0 font-semibold text-navy">{v}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="font-display text-sm font-bold text-navy">Total Payable</span>
          <span className="flex items-center gap-3">
            <motion.span
              className="font-display text-2xl font-extrabold text-success"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              ₹34,520
            </motion.span>
            <span className="-rotate-6 rounded-lg border-2 border-success px-2 py-0.5 text-[11px] font-extrabold uppercase text-success">
              Paid ✓
            </span>
          </span>
        </div>
      </div>

      <div className="mt-3 space-y-2">
        {[
          ["Priya S.", "₹31,180"],
          ["Neha M.", "₹28,640"],
          ["Amit V.", "₹24,300"],
        ].map(([n, v]) => (
          <div
            key={n}
            className="flex items-center justify-between rounded-xl bg-brand-soft px-3 py-2 text-sm"
          >
            <span className="font-semibold text-navy">{n}</span>
            <span className="font-semibold text-body">{v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function FeatureBlocks() {
  return (
    <>
      <Block
        id="feature-01"
        index="01"
        tone="light"
        headline={
          <>
            See Your Whole Team on One Map —
            <br />
            <span className="text-brand">Without Micromanaging.</span>
          </>
        }
        sub="Every salesperson, every route, on a single live screen."
        benefits={[
          "Real-time location of every salesperson",
          "Know who is at a client, traveling or idle",
          "Route history for any day",
        ]}
        mockup={<TrackingMockup />}
      />

      <Block
        id="feature-02"
        index="02"
        tone="soft"
        flip
        headline={
          <>
            Every Client Visit —
            <br />
            <span className="text-brand">
              <span className="underline-green">GPS-Verified</span> &amp; Time-Stamped.
            </span>
          </>
        }
        sub="Check-in, notes and documents captured at the client's real location."
        benefits={[
          "Check-in only at the client's real location",
          "Notes, photos and documents saved with every visit",
          "Reports built automatically — no manual typing",
        ]}
        mockup={<CheckInMockup />}
      />

      <Block
        id="feature-03"
        index="03"
        tone="light"
        headline={
          <>
            The Best Route Every Day —
            <br />
            <span className="text-brand">Less Petrol, More Clients.</span>
          </>
        }
        sub="Visit order, distance and timing planned before the day starts."
        benefits={[
          "Visit order planned automatically",
          "Time and distance for each stop",
          "More clients covered per day",
        ]}
        mockup={<RouteMockup />}
      />

      <Block
        id="feature-04"
        index="04"
        tone="navy"
        flip
        headline={
          <>
            Out of Territory for 30+ Minutes?
            <br />
            <span className="text-alert-soft">You'll Know Instantly.</span>
          </>
        }
        sub="Zones for every salesperson, with fair alerts instead of constant calls."
        benefits={[
          "Assign a territory to each salesperson",
          "Alert only after 30 minutes without a reason",
          "Tracking only during working hours",
        ]}
        mockup={<TerritoryMockup />}
      />

      <Block
        id="feature-05"
        index="05"
        tone="light"
        headline={
          <>
            Judge Performance by Data —
            <br />
            <span className="text-brand">Not by Feelings.</span>
          </>
        }
        sub="Visits, meetings, deals and revenue for every rep, updated daily."
        benefits={[
          "Visits, meetings, deals and revenue per salesperson",
          "Weekly and monthly trends",
          "Reward top performers, guide the rest",
        ]}
        mockup={<DashboardMockup />}
      />

      <Block
        id="feature-06"
        index="06"
        tone="soft"
        flip
        headline={
          <>
            Salary, Commission &amp; Travel Allowance —
            <br />
            <span className="text-brand">Calculated Automatically.</span>
          </>
        }
        sub="Payouts built from real visits, real deals and real distance."
        benefits={[
          "Incentives based on real visits and deals",
          "Travel allowance from actual distance",
          "No manual sheets, no disputes",
        ]}
        mockup={<PayoutMockup />}
      />

      <div className="bg-white pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col items-center gap-4 rounded-3xl bg-gradient-to-r from-brand to-success p-8 text-center sm:flex-row sm:justify-between sm:text-left">
              <p className="font-display text-xl font-bold text-white sm:text-2xl">
                See InField tracking your sales team — live.
              </p>
              <a
                href="#contact"
                className="inline-flex min-h-12 shrink-0 items-center rounded-full bg-white px-6 font-semibold text-brand"
              >
                Book a Free Demo
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
}
