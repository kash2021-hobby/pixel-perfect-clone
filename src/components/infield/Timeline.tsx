import { Reveal, SectionHeader, PrimaryButton } from "./primitives";
import { CityMap, DEFAULT_PINS } from "./CityMap";
import { CheckCircle2, Clock, Navigation, MapPin } from "lucide-react";

export function Timeline() {
  return (
    <section id="how-it-works" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="How it works">
          Follow Rohit Through His Day.<br />
          <span className="text-secondary">See Everything InField Tracks.</span>
        </SectionHeader>

        <div className="mt-20 relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 top-0 bottom-16 w-1 bg-border sm:left-1/2 sm:-translate-x-1/2 rounded-full hidden sm:block">
            {/* The line fill would go here with motion.div for scroll progress, kept static for simplicity */}
            <div className="w-full h-1/3 bg-brand rounded-full" />
          </div>

          <div className="space-y-24 sm:space-y-32">
            <Scene930 />
            <Scene1142 />
            <Scene1300 />
            <Scene1510 />
            <Scene1900 />
            <SceneMonthEnd />
          </div>

          {/* End CTA Banner */}
          <Reveal className="mt-32">
            <div className="rounded-[2rem] bg-gradient-to-r from-brand to-success px-6 py-12 sm:px-12 sm:py-16 flex flex-col items-center text-center shadow-card-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://cdn.gpteng.co/noise.png')] opacity-10 mix-blend-overlay"></div>
              <h3 className="text-2xl sm:text-4xl font-bold text-white relative z-10">
                See InField tracking your sales team — live.
              </h3>
              <a
                href="#contact"
                className="mt-8 relative z-10 inline-flex min-h-[56px] items-center justify-center rounded-full bg-white px-8 text-lg font-bold text-secondary shadow-card transition-all hover:bg-brand-soft hover:-translate-y-1"
              >
                Book a Free Demo
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function TimelineLayout({ time, title, titleColor, sub, benefits, mockup, reverse = false }: any) {
  return (
    <div className={`relative flex flex-col gap-12 sm:items-center ${reverse ? 'sm:flex-row-reverse' : 'sm:flex-row'}`}>
      {/* Center Time Bubble (Desktop) */}
      <div className="absolute left-4 -translate-x-1/2 top-0 sm:left-1/2 sm:top-1/2 sm:-translate-y-1/2 z-10 hidden sm:flex">
        <div className="rounded-full border-4 border-white bg-brand px-3 py-1.5 text-xs font-bold text-white shadow-sm">
          {time}
        </div>
      </div>

      <Reveal className="sm:w-1/2 flex flex-col justify-center pl-10 sm:pl-0">
        {/* Mobile Time Bubble */}
        <div className="mb-4 sm:hidden">
           <div className="inline-flex rounded-full bg-brand-soft px-3 py-1 text-sm font-bold text-secondary">
             <Clock className="w-4 h-4 mr-1.5 inline" /> {time}
           </div>
        </div>

        <h3 className="text-3xl font-bold text-navy leading-tight">
          {title.split('—')[0]}—<br />
          <span className="text-secondary">{title.split('—')[1]}</span>
        </h3>
        {sub && <p className="mt-3 text-lg text-body">{sub}</p>}

        <ul className="mt-8 space-y-4">
          {benefits.map((b: string, i: number) => (
            <li key={i} className="flex gap-3 text-body text-[15px]">
              <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-success mt-0.5" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={0.2} className="sm:w-1/2 sm:px-8">
        <div className="rounded-3xl border border-border bg-muted p-2 sm:p-4 shadow-card">
           {mockup}
        </div>
      </Reveal>
    </div>
  );
}

function Scene930() {
  return (
    <div id="timeline-tracking">
    <TimelineLayout
      time="9:30 AM"
      title="See the Whole Team on One Map — Without Micromanaging."
      benefits={[
        "Real-time location of every salesperson",
        "Know who is at a client, traveling or idle",
        "Route history for any day"
      ]}
      mockup={
        <div className="relative h-[300px] w-full rounded-2xl bg-white overflow-hidden border border-border">
          <CityMap pins={DEFAULT_PINS} className="absolute inset-0 h-full w-full object-cover" />
          {/* Zoom Card */}
          <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-border bg-white p-3 shadow-card-lg sm:left-auto sm:right-4 sm:w-64">
             <div className="flex items-center gap-3">
               <div className="flex h-10 w-10 items-center justify-center rounded-full bg-success-soft text-success">
                 R
               </div>
               <div>
                 <p className="text-sm font-bold text-navy">Rohit M.</p>
                 <p className="text-xs font-semibold text-success">At ABC Corp</p>
               </div>
             </div>
             <div className="mt-2 text-[11px] text-body">
               In meeting · <span className="font-mono font-medium">00:24:10</span>
             </div>
          </div>
        </div>
      }
    />
    </div>
  );
}

function Scene1142() {
  return (
    <div id="timeline-checkin">
    <TimelineLayout
      time="11:42 AM"
      reverse
      title="Every Visit — GPS-Verified & Time-Stamped."
      benefits={[
        "Check-in only at the client's real location",
        "Notes, photos and documents saved with every visit",
        "Daily report built automatically"
      ]}
      mockup={
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x">
           {/* Phone 1 */}
           <div className="flex-shrink-0 w-[240px] h-[400px] rounded-[2rem] border-[6px] border-navy bg-white overflow-hidden flex flex-col snap-center shadow-sm relative">
             <div className="h-48 bg-muted relative">
               <CityMap pins={[{name: 'R', color: 'green', offset: [0,0], path: 'M200 130 L200 130'}]} compact className="w-full h-full object-cover" />
               <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white to-transparent h-16" />
             </div>
             <div className="p-4 flex-1 flex flex-col">
               <h4 className="font-bold text-navy text-lg">ABC Corp</h4>
               <p className="text-xs text-body mb-auto">Sector 62, Noida</p>
               
               <button className="w-full py-3 rounded-xl bg-brand text-white font-bold text-sm mb-2 shadow-sm relative overflow-hidden group">
                 <span className="relative z-10">Check-In at Client</span>
                 <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform rounded-xl" />
               </button>
               <div className="flex items-center justify-center gap-1 text-[11px] font-bold text-success bg-success-soft rounded-lg py-1.5">
                 <CheckCircle2 className="h-3 w-3" /> Location verified ✓ 11:42 AM
               </div>
             </div>
           </div>

           {/* Phone 2 */}
           <div className="flex-shrink-0 w-[240px] h-[400px] rounded-[2rem] border-[6px] border-navy bg-white overflow-hidden flex flex-col snap-center shadow-sm">
             <div className="bg-navy text-white p-3 text-center text-sm font-bold">Meeting Notes</div>
             <div className="p-4 flex flex-col gap-3 text-xs flex-1 bg-gray-50">
               <div>
                 <div className="text-body mb-1">Summary</div>
                 <div className="bg-white p-2 border border-border rounded shadow-sm">Discussed bulk order for Q4</div>
               </div>
               <div>
                 <div className="text-body mb-1">Requirement</div>
                 <div className="bg-white p-2 border border-border rounded shadow-sm">500 units</div>
               </div>
               <div>
                 <div className="text-body mb-1">Deal Value</div>
                 <div className="bg-white p-2 border border-success border-l-4 rounded shadow-sm font-bold text-navy">₹1,20,000</div>
               </div>
             </div>
           </div>
        </div>
      }
    />
    </div>
  );
}

function Scene1300() {
  return (
    <div id="timeline-route">
    <TimelineLayout
      time="1:00 PM"
      title="The Best Route Every Day — Less Petrol, More Clients."
      benefits={[
        "Visit order planned automatically",
        "Time and distance for every stop",
        "More clients covered per day"
      ]}
      mockup={
        <div className="relative h-[360px] w-full rounded-2xl bg-brand-soft overflow-hidden border border-border p-4">
          <svg viewBox="0 0 400 300" className="w-full h-full opacity-50">
             <path d="M50 250 L100 150 L200 100 L300 150 L350 50" fill="none" stroke="var(--color-brand)" strokeWidth="4" strokeDasharray="6 6" />
             <circle cx="50" cy="250" r="10" fill="var(--color-navy)" />
             <circle cx="100" cy="150" r="10" fill="var(--color-navy)" />
             <circle cx="200" cy="100" r="10" fill="var(--color-navy)" />
             <circle cx="300" cy="150" r="10" fill="var(--color-navy)" />
             <circle cx="350" cy="50" r="10" fill="var(--color-navy)" />
          </svg>
          
          <div className="absolute top-4 right-4 flex flex-col gap-2 w-48">
            <div className="bg-white rounded-xl p-3 shadow-sm border border-border">
              <span className="text-[10px] uppercase font-bold text-body tracking-wider">Example</span>
              <p className="text-xs text-body line-through mt-1">Old route: 85 km · 6 hrs</p>
              <p className="text-sm font-bold text-success mt-1">Planned: 52 km · 4 hrs</p>
            </div>
            <div className="flex gap-2">
              <div className="flex-1 bg-success-soft text-success text-[11px] font-bold text-center py-1.5 rounded-lg border border-success/20">33 km saved</div>
              <div className="flex-1 bg-success-soft text-success text-[11px] font-bold text-center py-1.5 rounded-lg border border-success/20">2 hrs saved</div>
            </div>
          </div>
        </div>
      }
    />
    </div>
  );
}

function Scene1510() {
  return (
    <div id="timeline-territory">
    <TimelineLayout
      time="3:10 PM"
      reverse
      title="Out of Territory for 30+ Minutes? — You'll Know Instantly."
      benefits={[
        "Assign a territory to each salesperson",
        "Alert only after 30 minutes without a reason",
        "Tracking only during working hours"
      ]}
      mockup={
        <div className="relative h-[400px] w-full rounded-3xl bg-navy overflow-hidden p-4 sm:p-6 flex flex-col items-center justify-center">
          {/* Territory Map */}
          <div className="w-[200px] h-[200px] relative">
             <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-2">
               <div className="rounded-xl border-4 border-brand bg-brand/20 flex items-center justify-center text-white/50 text-xs font-bold">North</div>
               <div className="rounded-xl border-4 border-success bg-success/20 flex items-center justify-center text-white/50 text-xs font-bold">South</div>
               <div className="rounded-xl border-4 border-orange-500 bg-orange-500/20 flex items-center justify-center text-white/50 text-xs font-bold">East</div>
               <div className="rounded-xl border-4 border-destructive bg-destructive/40 flex items-center justify-center text-white text-xs font-bold shadow-[0_0_15px_rgba(239,68,68,0.8)] animate-pulse-ring relative">West
                 <div className="absolute -top-2 -right-2 bg-white text-destructive text-[9px] font-bold px-1.5 py-0.5 rounded-full">35m</div>
               </div>
             </div>
          </div>
          
          <div className="mt-8 flex gap-4 w-full">
            {/* Phone Manager */}
             <div className="flex-1 bg-white rounded-xl p-3 shadow-lg relative border-l-4 border-destructive">
                <div className="text-[10px] text-body uppercase font-bold mb-1">Manager Alert</div>
                <div className="text-xs font-bold text-navy flex items-start gap-2">
                  <span className="text-destructive mt-0.5">⚠</span>
                  Vikas T. out of assigned territory — 35 mins
                </div>
             </div>
          </div>
        </div>
      }
    />
    </div>
  );
}

function Scene1900() {
  return (
    <div id="timeline-dashboard">
    <TimelineLayout
      time="7:00 PM"
      title="Judge Performance by Data — Not by Feelings."
      benefits={[
        "Visits, meetings, deals and revenue per salesperson",
        "Weekly and monthly trends",
        "Reward top performers, guide the rest"
      ]}
      mockup={
        <div className="relative w-full rounded-2xl bg-white border border-border shadow-sm p-4 sm:p-6">
          <div className="flex justify-between items-center mb-6">
            <h4 className="font-bold text-navy text-lg">Monthly Leaderboard</h4>
            <span className="text-[10px] uppercase font-bold bg-muted px-2 py-1 rounded text-body">Sample Data</span>
          </div>

          <div className="space-y-3">
            <LeaderboardRow rank="🥇" name="Rohit M." visits={142} deals={18} rev="8.4 L" trend="up" />
            <LeaderboardRow rank="🥈" name="Sneha R." visits={128} deals={15} rev="7.1 L" trend="up" />
            <LeaderboardRow rank="🥉" name="Anjali P." visits={119} deals={13} rev="6.2 L" trend="up" />
            <LeaderboardRow rank="4" name="Vikas T." visits={96} deals={9} rev="4.3 L" trend="down" />
          </div>
          
          <div className="mt-6 flex gap-2">
             <div className="bg-brand-soft text-secondary text-[10px] font-bold px-2 py-1 rounded-full border border-brand-tint">🏆 Star Performer</div>
             <div className="bg-success-soft text-success text-[10px] font-bold px-2 py-1 rounded-full border border-success/20">💼 Deal Closer</div>
          </div>
        </div>
      }
    />
    </div>
  );
}

function LeaderboardRow({ rank, name, visits, deals, rev, trend }: any) {
  return (
    <div className="flex items-center justify-between p-2 rounded-lg hover:bg-muted transition-colors border border-transparent hover:border-border">
      <div className="flex items-center gap-3 w-1/3">
        <span className="w-5 text-center font-bold text-body">{rank}</span>
        <span className="text-sm font-bold text-navy whitespace-nowrap">{name}</span>
      </div>
      <div className="flex items-center justify-end gap-4 w-2/3 text-[11px] sm:text-xs">
        <div className="hidden sm:block text-body"><span className="font-bold text-navy">{visits}</span> visits</div>
        <div className="text-body"><span className="font-bold text-navy">{deals}</span> deals</div>
        <div className="font-bold text-success w-12 text-right">₹{rev}</div>
        <div className={`w-4 text-center font-bold ${trend === 'up' ? 'text-success' : 'text-destructive'}`}>
          {trend === 'up' ? '▲' : '▼'}
        </div>
      </div>
    </div>
  );
}

function SceneMonthEnd() {
  return (
    <div id="timeline-salary">
    <TimelineLayout
      time="Month End"
      reverse
      title="Salary, Commission & Travel — Calculated Automatically."
      benefits={[
        "Incentives based on real visits and deals",
        "Travel allowance from actual distance",
        "No manual sheets, no disputes"
      ]}
      mockup={
        <div className="relative w-full rounded-2xl bg-white border border-border shadow-sm p-4 sm:p-6 max-w-sm mx-auto">
          {/* Toggle */}
          <div className="flex bg-muted rounded-lg p-1 mb-6 text-xs font-semibold">
            <div className="flex-1 text-center py-1.5 text-body">Weekly</div>
            <div className="flex-1 text-center py-1.5 bg-white rounded shadow-sm text-navy">Monthly</div>
            <div className="flex-1 text-center py-1.5 text-body">Quarterly</div>
          </div>

          <div className="border-b border-border pb-4 mb-4">
            <h4 className="font-bold text-navy text-base">Rohit M.</h4>
            <p className="text-xs text-body">October 2026 Payout</p>
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-body">Base Salary</span>
              <span className="font-semibold text-navy">₹18,000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-body">Visit Incentive <span className="text-[10px] opacity-70">(120 × ₹20)</span></span>
              <span className="font-semibold text-navy">₹2,400</span>
            </div>
            <div className="flex justify-between">
              <span className="text-body">Deal Commission <span className="text-[10px] opacity-70">(6 × ₹1.5k)</span></span>
              <span className="font-semibold text-navy">₹9,000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-body">Travel Allowance <span className="text-[10px] opacity-70">(1,040 km)</span></span>
              <span className="font-semibold text-navy">₹3,120</span>
            </div>
            <div className="flex justify-between">
              <span className="text-secondary font-semibold">Target Bonus</span>
              <span className="font-bold text-secondary">₹2,000</span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t-2 border-dashed border-border flex justify-between items-center relative">
             <div>
               <div className="text-[10px] text-body uppercase font-bold">Total Payable</div>
               <div className="text-2xl font-bold text-success">₹34,520</div>
             </div>
             
             {/* Stamp */}
             <div className="absolute right-0 top-2 rotate-[-12deg] border-2 border-success text-success font-bold text-lg px-3 py-1 rounded-lg opacity-80">
               PAID ✓
             </div>
          </div>
        </div>
      }
    />
    </div>
  );
}
