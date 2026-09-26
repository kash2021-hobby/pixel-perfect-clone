import { Reveal } from "./primitives";

export function Hero() {
  return (
    <section 
      id="top" 
      className="relative flex min-h-[90vh] items-center bg-cover bg-center bg-no-repeat pt-24 pb-32"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1600&auto=format&fit=crop&q=80')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold leading-[1.1] tracking-tight text-white">
              Know Where Your <br />
              Sales Team Is —<br />
              <span className="text-secondary">And Prove Every <br />Client Visit.</span>
            </h1>
            
            {/* Blue Divider */}
            <div className="my-8 h-1 w-24 bg-brand" />

            <p className="text-lg text-gray-300 sm:text-xl max-w-xl">
              Live GPS tracking, verified client check-ins, smart routes and automatic incentives — for your entire field sales team, in one app.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center rounded bg-brand px-8 py-4 text-base font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
            >
              Book a Free Demo
            </a>
            <a 
              href="#how-it-works" 
              className="inline-flex items-center justify-center rounded bg-secondary px-8 py-4 text-base font-bold uppercase tracking-wide text-white transition-colors hover:opacity-90"
            >
              See How It Works
            </a>
          </Reveal>

          <Reveal delay={0.3} className="mt-12 flex items-center gap-4">
            <div className="flex -space-x-3">
              <img className="inline-block h-12 w-12 rounded-full ring-2 ring-black object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=faces" alt="User" />
              <img className="inline-block h-12 w-12 rounded-full ring-2 ring-black object-cover" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=faces" alt="User" />
              <img className="inline-block h-12 w-12 rounded-full ring-2 ring-black object-cover" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=100&h=100&fit=crop&crop=faces" alt="User" />
              <div className="flex h-12 w-12 items-center justify-center rounded-full ring-2 ring-black bg-gray-800 text-xs font-bold text-white">
                500+
              </div>
            </div>
            <p className="text-sm font-medium text-gray-300">
              Trusted by 500+ sales teams across India
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
