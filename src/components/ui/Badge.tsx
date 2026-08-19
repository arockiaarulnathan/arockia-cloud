import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border/60 bg-surface-2/60 px-3 py-1 text-xs font-medium text-muted backdrop-blur-md",
        className
      )}
    >
      {children}
    </span>
  );
}
