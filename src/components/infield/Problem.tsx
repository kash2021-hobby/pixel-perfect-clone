import { HelpCircle, FileX, RouteOff, Coins } from "lucide-react";
import { SectionHeader, Reveal } from "./primitives";

const painPoints = [
  {
    icon: HelpCircle,
    title: "Kaun kahan hai?",
    desc: "No idea where anyone is during the day.",
  },
  {
    icon: FileX,
    title: "Reports you can't verify",
    desc: "\"Met 10 clients\" — but did they?",
  },
  {
    icon: RouteOff,
    title: "Long routes, high petrol bills",
    desc: "Random routes waste hours and fuel.",
  },
  {
    icon: Coins,
    title: "Incentive disputes",
    desc: "Manual commission sheets every month.",
  },
];

export function Problem() {
  return (
    <section id="problem" className="bg-muted py-24 sm:py-32 map-dots">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="The Field Sales Nightmare"
        >
          Have You Ever Felt Completely in the Dark <br />
          <span className="text-secondary">About Your Sales Team?</span>
        </SectionHeader>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: Chat Mockup */}
          <Reveal className="flex justify-center">
            <div className="relative w-full max-w-[340px] rounded-[2.5rem] border-[8px] border-white bg-gray-50 shadow-card-lg overflow-hidden h-[600px] flex flex-col">
              {/* Phone Header */}
              <div className="bg-[#075E54] text-white px-4 py-3 flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center font-bold">R</div>
                <div>
                  <div className="font-semibold text-sm">Rohit (Sales)</div>
                  <div className="text-[11px] opacity-80">online</div>
                </div>
              </div>

              {/* Chat Area */}
              <div className="flex-1 bg-[#E5DDD5] p-4 flex flex-col gap-4 relative overflow-hidden">
                {/* Chat bg pattern */}
                <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{ backgroundImage: "url('https://cdn.gpteng.co/whatsapp-bg.png')" }} />
                
                {/* Date bubble */}
                <div className="flex justify-center relative z-10">
                  <div className="bg-[#D1E1EF] text-[#4A5E6B] text-[11px] px-3 py-1 rounded-lg shadow-sm">TODAY</div>
                </div>

                {/* Salesperson bubble */}
                <div className="self-start relative z-10 max-w-[85%] mt-4">
                  <div className="bg-white rounded-lg rounded-tl-none p-3 shadow-sm relative">
                    <p className="text-[15px] text-[#303030] leading-snug">
                      Sir, met 8 clients today ✓<br />5 deals will close 👍
                    </p>
                    <span className="text-[10px] text-gray-400 float-right mt-1 ml-2">7:30 PM</span>
                    
                    {/* Unverified Badge (Appears via animation) */}
                    <div className="absolute -right-3 -top-3 rotate-12 animate-pulse-ring animation-delay-1000">
                      <div className="bg-idle text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm border border-white">
                        UNVERIFIED
                      </div>
                    </div>
                  </div>
                </div>

                {/* Manager bubble */}
                <div className="self-end relative z-10 max-w-[85%] mt-2">
                  <div className="bg-[#DCF8C6] rounded-lg rounded-tr-none p-3 shadow-sm">
                    <p className="text-[15px] text-[#303030] leading-snug">
                      Which clients? What time?
                    </p>
                    <span className="text-[10px] text-gray-500 float-right mt-1 ml-2">7:35 PM <span className="text-[#4FC3F7]">✓✓</span></span>
                  </div>
                </div>

                {/* Typing indicator */}
                <div className="self-start relative z-10 max-w-[85%] mt-2">
                  <div className="bg-white rounded-lg rounded-tl-none p-3 shadow-sm text-gray-500 text-sm flex items-center gap-1">
                    Rohit is typing
                    <span className="flex space-x-1 ml-1 mt-1">
                      <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                      <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                      <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: Pain Points */}
          <div className="flex flex-col justify-center">
            <div className="grid gap-8">
              {painPoints.map((pain, i) => {
                const Icon = pain.icon;
                return (
                  <Reveal key={pain.title} delay={i * 0.1} className="flex gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-white text-destructive shadow-sm">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-[18px] font-bold text-navy">{pain.title}</h3>
                      <p className="mt-1 text-base text-body">{pain.desc}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
            
            <Reveal delay={0.4} className="mt-12 text-center lg:text-left">
              <p className="text-xl font-bold text-navy border-t border-border pt-8">
                You can't grow what you can't see.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
