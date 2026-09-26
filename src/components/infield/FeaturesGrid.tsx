import { ArrowRight } from "lucide-react";
import { SectionHeader, Reveal } from "./primitives";
import { CityMap, DEFAULT_PINS } from "./CityMap";
import { motion } from "motion/react";

export function FeaturesGrid() {
  return (
    <section id="features" className="bg-[#F0FDF4] py-24 sm:py-32 map-dots">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Features">
          Everything You Need to Run a Field Sales Team
        </SectionHeader>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          
          {/* Tile 1: Live GPS (2x2) */}
          <Reveal delay={0.1} className="lg:col-span-2 lg:row-span-2">
            <div className="flex h-full flex-col rounded-[2rem] border border-border bg-white p-2 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-lg">
              <div className="relative h-48 w-full overflow-hidden rounded-[1.5rem] bg-brand-soft sm:h-64 lg:h-[320px]">
                <CityMap pins={DEFAULT_PINS} className="absolute inset-0 h-full w-full object-cover" />
              </div>
              <div className="flex flex-1 flex-col p-6 pt-8">
                <h3 className="text-2xl font-bold text-navy">Live GPS Tracking</h3>
                <p className="mt-2 flex-1 text-base text-body">See your entire team on one map in real-time. Know who is at a client, traveling, or idle.</p>
                <a href="#timeline-tracking" className="mt-6 inline-flex items-center gap-2 font-semibold text-secondary hover:text-brand-dark">
                  See it in action <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Tile 2: Client Check-In (1x1) */}
          <Reveal delay={0.2} className="lg:col-span-1 lg:row-span-1">
            <div className="flex h-full flex-col rounded-[2rem] border border-border bg-white p-2 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-lg">
              <div className="flex h-32 w-full items-center justify-center rounded-[1.5rem] bg-muted p-4">
                <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm border border-success-soft text-success">
                  <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
                  <span className="text-xs font-bold">Location verified ✓</span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-4 pt-6">
                <h3 className="text-[17px] font-bold text-navy leading-tight">Client Check-In & Notes</h3>
                <p className="mt-2 flex-1 text-sm text-body leading-relaxed">Verified by GPS radius and timestamped.</p>
                <a href="#timeline-checkin" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary hover:text-brand-dark">
                  See it in action <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Tile 3: Smart Route (1x1) */}
          <Reveal delay={0.3} className="lg:col-span-1 lg:row-span-1">
            <div className="flex h-full flex-col rounded-[2rem] border border-border bg-white p-2 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-lg">
              <div className="flex h-32 w-full items-center justify-center rounded-[1.5rem] bg-brand-soft p-4 relative overflow-hidden">
                <svg viewBox="0 0 100 60" className="w-full h-full opacity-60 text-secondary">
                  <path d="M10 50 Q30 10 50 30 T90 10" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                  <circle cx="10" cy="50" r="4" fill="var(--color-navy)" />
                  <circle cx="50" cy="30" r="4" fill="var(--color-navy)" />
                  <circle cx="90" cy="10" r="4" fill="var(--color-navy)" />
                </svg>
              </div>
              <div className="flex flex-1 flex-col p-4 pt-6">
                <h3 className="text-[17px] font-bold text-navy leading-tight">Smart Route Planning</h3>
                <p className="mt-2 flex-1 text-sm text-body leading-relaxed">Optimize travel to save fuel and time.</p>
                <a href="#timeline-route" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary hover:text-brand-dark">
                  See it in action <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Tile 4: Territory Alerts (2x1 wide) */}
          <Reveal delay={0.4} className="lg:col-span-2 lg:row-span-1">
            <div className="flex h-full flex-col rounded-[2rem] border border-border bg-white p-2 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-lg sm:flex-row">
              <div className="flex h-40 w-full items-center justify-center rounded-[1.5rem] bg-navy-soft p-4 sm:w-1/2 sm:h-full relative overflow-hidden">
                <div className="grid grid-cols-2 grid-rows-2 gap-1 w-full h-full p-2 opacity-80">
                  <div className="rounded border-2 border-brand/50 bg-brand/20 flex items-center justify-center text-[10px] text-white/50">North</div>
                  <div className="rounded border-2 border-success/50 bg-success/20 flex items-center justify-center text-[10px] text-white/50">South</div>
                  <div className="rounded border-2 border-orange-500/50 bg-orange-500/20 flex items-center justify-center text-[10px] text-white/50">East</div>
                  <div className="rounded border-2 border-destructive bg-destructive/30 animate-pulse-ring flex items-center justify-center text-[10px] text-white">West</div>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6 sm:w-1/2 sm:justify-center">
                <h3 className="text-[17px] font-bold text-navy leading-tight">Territory Alerts</h3>
                <p className="mt-2 flex-1 text-sm text-body leading-relaxed">Get notified instantly if a rep leaves their assigned zone.</p>
                <a href="#timeline-territory" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary hover:text-brand-dark">
                  See it in action <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          </Reveal>

        </div>
        
        {/* Mobile: the other two 1x1 cards */}
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:hidden">
          {/* Dashboard */}
          <Reveal delay={0.5}>
            <div className="flex flex-col rounded-[2rem] border border-border bg-white p-2 shadow-card">
              <div className="flex h-32 w-full items-end justify-center gap-2 rounded-[1.5rem] bg-muted p-4">
                 <div className="w-4 bg-brand rounded-t-sm h-1/3" />
                 <div className="w-4 bg-brand rounded-t-sm h-2/3" />
                 <div className="w-4 bg-brand rounded-t-sm h-1/2" />
                 <div className="w-4 bg-success rounded-t-sm h-[90%]" />
              </div>
              <div className="flex flex-col p-4 pt-6">
                <h3 className="text-[17px] font-bold text-navy leading-tight">Performance Dashboard</h3>
                <p className="mt-2 text-sm text-body leading-relaxed">Real-time stats and leaderboards.</p>
              </div>
            </div>
          </Reveal>
          
          {/* Salary */}
          <Reveal delay={0.6}>
            <div className="flex flex-col rounded-[2rem] border border-border bg-white p-2 shadow-card">
              <div className="flex h-32 w-full items-center justify-center rounded-[1.5rem] bg-[#FEF3C7] p-4">
                 <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm border border-border">
                  <span className="text-sm font-bold text-navy">₹34,520</span>
                  <span className="text-xs font-bold text-success bg-success-soft px-2 py-0.5 rounded">Paid ✓</span>
                </div>
              </div>
              <div className="flex flex-col p-4 pt-6">
                <h3 className="text-[17px] font-bold text-navy leading-tight">Salary & Incentives</h3>
                <p className="mt-2 text-sm text-body leading-relaxed">Auto-calculate commissions.</p>
              </div>
            </div>
          </Reveal>
        </div>
        
        {/* Desktop: the other two 1x1 cards (hidden on mobile since they break the nice 4 col layout if we don't position them carefully. Let's make the 2x1 territory tile span 2 cols, so the grid is full. 4 columns: 2 cols x 2 rows = 4 slots for Map. 1+1 slots for checkin/route. 2 slots for territory. We need 2 more slots. Let's adjust the grid layout for desktop.) */}
        <div className="mt-4 hidden lg:grid lg:grid-cols-4 gap-4">
           {/* We use an offset row for the last two tiles */}
           <div className="col-span-2"></div>
           {/* Dashboard */}
           <Reveal delay={0.5} className="col-span-1">
            <div className="flex h-full flex-col rounded-[2rem] border border-border bg-white p-2 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-lg">
              <div className="flex h-32 w-full items-end justify-center gap-3 rounded-[1.5rem] bg-muted p-4">
                 <div className="w-6 bg-brand/40 rounded-t h-1/3" />
                 <div className="w-6 bg-brand/60 rounded-t h-2/3" />
                 <div className="w-6 bg-brand/80 rounded-t h-1/2" />
                 <div className="w-6 bg-success rounded-t h-[90%]" />
              </div>
              <div className="flex flex-1 flex-col p-4 pt-6">
                <h3 className="text-[17px] font-bold text-navy leading-tight">Performance Dashboard</h3>
                <p className="mt-2 flex-1 text-sm text-body leading-relaxed">Real-time stats and leaderboards.</p>
                <a href="#timeline-dashboard" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary hover:text-brand-dark">
                  See it in action <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          </Reveal>
          
          {/* Salary */}
          <Reveal delay={0.6} className="col-span-1">
            <div className="flex h-full flex-col rounded-[2rem] border border-border bg-white p-2 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-lg">
              <div className="flex h-32 w-full items-center justify-center rounded-[1.5rem] bg-warn/20 p-4">
                 <div className="flex flex-col items-center gap-1 rounded-xl bg-white px-4 py-3 shadow-sm border border-border">
                  <span className="text-lg font-bold text-navy">₹34,520</span>
                  <span className="text-[10px] font-bold text-success bg-success-soft px-2 py-0.5 rounded uppercase tracking-wider">Paid ✓</span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-4 pt-6">
                <h3 className="text-[17px] font-bold text-navy leading-tight">Salary & Incentives</h3>
                <p className="mt-2 flex-1 text-sm text-body leading-relaxed">Auto-calculate commissions.</p>
                <a href="#timeline-salary" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary hover:text-brand-dark">
                  See it in action <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
