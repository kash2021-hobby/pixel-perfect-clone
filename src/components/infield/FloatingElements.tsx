import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

export function FloatingElements() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show after scrolling past the first 600px (roughly the hero)
      setShow(window.scrollY > 600);
    };
    
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-6 left-0 right-0 z-40 flex justify-center px-4 sm:hidden pointer-events-none">
      <a 
        href="#contact" 
        className="pointer-events-auto flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white shadow-[0_10px_25px_rgba(45,91,227,0.4)] transition-transform active:scale-95"
      >
        Book a Free Demo <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
}
