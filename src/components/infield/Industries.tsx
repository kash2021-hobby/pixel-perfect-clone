import { SectionHeader, Reveal } from "./primitives";

const industries = [
  {
    name: "FMCG & Distribution",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&auto=format&fit=crop&q=80",
  },
  {
    name: "Pharma & Medical Reps",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&auto=format&fit=crop&q=80",
  },
  {
    name: "Real Estate Agents",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&auto=format&fit=crop&q=80",
  },
  {
    name: "Service Technicians",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600&auto=format&fit=crop&q=80",
  },
  {
    name: "Financial & Loan Sales",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&auto=format&fit=crop&q=80",
  },
  {
    name: "B2B Hardware",
    image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=600&auto=format&fit=crop&q=80",
  },
];

export function Industries() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeader eyebrow="Who is this for?" dark={false}>
          Built for Any Team on the Move
        </SectionHeader>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {industries.map((ind, i) => (
            <Reveal key={ind.name} delay={i * 0.1}>
              <div className="group relative h-64 w-full overflow-hidden rounded-[2rem] shadow-sm transition-all hover:-translate-y-1 hover:shadow-card-lg">
                <img
                  src={ind.image}
                  alt={ind.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-left">
                  <h3 className="text-xl font-bold text-white">{ind.name}</h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
