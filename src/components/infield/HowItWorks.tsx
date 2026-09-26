import { Users, Map, Navigation, BarChart3 } from "lucide-react";
import { Reveal, SectionHeader } from "./primitives";

const steps = [
  {
    icon: Users,
    title: "1. Sign Up & Add Team",
    description:
      "Create your admin account and invite your sales representatives. They simply download the InField app on their phones.",
  },
  {
    icon: Map,
    title: "2. Assign Territories & Routes",
    description:
      "Map out territories for each rep and plan their daily client visits directly from the web dashboard.",
  },
  {
    icon: Navigation,
    title: "3. Track & Verify in Real-Time",
    description:
      "See live GPS locations. Reps check-in at client locations, and visits are automatically verified with geo-fencing.",
  },
  {
    icon: BarChart3,
    title: "4. Analyze & Grow",
    description:
      "Review daily performance, track target completions, and calculate accurate payouts based on verified data.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Setup in minutes"
          sub="No complex IT setup. If you can use WhatsApp, you can use InField."
        >
          How It Works
        </SectionHeader>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.title} delay={index * 0.1} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-soft text-secondary shadow-sm">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-headline">{step.title}</h3>
                  <p className="text-body leading-relaxed">{step.description}</p>
                </div>
                {/* Connecting Line for desktop */}
                {index < steps.length - 1 && (
                  <div className="absolute top-8 left-[60%] hidden w-full lg:block">
                    <div className="h-[2px] w-full border-t-2 border-dashed border-border" />
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
