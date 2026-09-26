import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-brand-tint px-4 py-1.5 text-xs font-semibold tracking-wide text-secondary sm:text-sm">
      {children}
    </span>
  );
}

export function SectionHeader({
  eyebrow,
  children,
  sub,
  dark = false,
}: {
  eyebrow: string;
  children: ReactNode;
  sub?: string;
  dark?: boolean;
}) {
  return (
    <Reveal className="mx-auto max-w-3xl text-center">
      <span
        className={
          dark
            ? "inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-on-dark sm:text-sm"
            : "inline-flex items-center gap-2 rounded-full bg-brand-tint px-4 py-1.5 text-xs font-semibold tracking-wide text-secondary sm:text-sm"
        }
      >
        {eyebrow}
      </span>
      <h2
        className={`mt-4 text-[clamp(1.6rem,4.6vw,2.6rem)] font-bold leading-tight ${
          dark ? "text-white" : ""
        }`}
      >
        {children}
      </h2>
      {sub ? (
        <p className={`mt-4 text-base ${dark ? "text-on-dark" : "text-body"}`}>{sub}</p>
      ) : null}
    </Reveal>
  );
}

export function PrimaryButton({
  children,
  href,
  className = "",
  type,
  disabled,
}: {
  children: ReactNode;
  href?: string;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}) {
  const classes = `inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-brand px-8 text-base font-semibold text-white shadow-card transition-all hover:bg-brand-dark hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0 ${className}`;
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
        <ArrowRight className="h-5 w-5" />
      </a>
    );
  }
  return (
    <button type={type ?? "button"} disabled={disabled} className={classes}>
      {children}
      <ArrowRight className="h-5 w-5" />
    </button>
  );
}

export function SecondaryButton({
  children,
  href,
  className = "",
}: {
  children: ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border-2 border-brand bg-white px-8 text-base font-semibold text-secondary transition-all hover:bg-brand-soft hover:-translate-y-1 ${className}`}
    >
      {children}
    </a>
  );
}

export const PHONE = "+91 9164060961";
export const PHONE_RAW = "+919164060961";
export const WA_BASE = "https://wa.me/919164060961";
