export function Logo({
  className = "",
  onDark = false, // We might not need this anymore if the image handles it, or we just leave it for API compatibility
}: {
  className?: string;
  onDark?: boolean;
}) {
  return (
    <img 
      src="/infield7-logo.png" 
      alt="InField Logo" 
      className={`h-10 w-auto object-contain ${className}`}
    />
  );
}
