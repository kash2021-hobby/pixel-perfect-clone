import { Reveal, Eyebrow } from "./primitives";
import { Quote } from "lucide-react";

export function Testimonial() {
  return (
    <section className="bg-white py-24 sm:py-32 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <Eyebrow>
              <span className="text-brand px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-soft">
                Customer Success
              </span>
            </Eyebrow>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center max-w-6xl mx-auto">
          {/* Image */}
          <Reveal delay={0.1}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=80" 
                alt="Amit Sharma - Business Owner" 
                className="w-full h-[450px] sm:h-[550px] object-cover grayscale-[50%] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="font-bold text-white text-3xl">Amit Sharma</div>
                <div className="text-brand font-bold text-lg mt-1 uppercase tracking-wide">Director of Sales</div>
                <div className="text-gray-300 font-medium text-sm">PharmaPlus India</div>
              </div>
            </div>
          </Reveal>

          {/* Quote */}
          <Reveal delay={0.2}>
            <div className="flex flex-col bg-gray-50 p-10 rounded-3xl border border-gray-100 shadow-sm relative">
              <Quote className="absolute top-6 left-6 h-24 w-24 text-brand opacity-5 pointer-events-none" />
              <div className="relative z-10">
                <blockquote className="text-2xl sm:text-3xl font-extrabold text-[#111111] leading-tight tracking-tight">
                  "Before InField, tracking our 40+ medical reps was a nightmare of WhatsApp messages and fake reports. 
                  <br /><br />
                  Since we switched, our verified visits have gone up by <span className="text-brand">30%</span>, and calculating month-end incentives takes me 5 minutes instead of 3 days."
                </blockquote>
                <div className="mt-10 flex items-center gap-4">
                  <div className="h-1.5 w-16 bg-brand rounded-full" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
