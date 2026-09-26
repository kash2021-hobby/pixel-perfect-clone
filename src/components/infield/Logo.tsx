export function Logo({
  className = "",
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg width="34" height="34" viewBox="0 0 40 40" aria-hidden="true">
        <rect width="40" height="40" rx="11" className="fill-brand" />
        <path
          d="M20 9c-4.2 0-7.6 3.3-7.6 7.4 0 5.4 6.6 12.3 6.9 12.6.4.4 1 .4 1.4 0 .3-.3 6.9-7.2 6.9-12.6C27.6 12.3 24.2 9 20 9Z"
          fill="white"
        />
        <circle cx="20" cy="16.5" r="2.9" className="fill-brand" />
        <path
          d="M11 31.5h18"
          stroke="white"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeDasharray="3 3"
        />
      </svg>
      <span
        className={`font-display text-xl font-extrabold tracking-tight ${
          onDark ? "text-white" : "text-navy"
        }`}
      >
        In<span className="text-brand">Field</span>
      </span>
    </span>
  );
}
