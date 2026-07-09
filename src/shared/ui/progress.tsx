import { forwardRef, type HTMLAttributes } from "react";

import { cn } from "../../shared/lib/cn";

interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  value: number;

  gradient?: string;
}

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  ({ value, gradient = "from-violet-500 to-cyan-500", className }, ref) => {
    const progress = Math.max(0, Math.min(value, 100));

    return (
      <div
        ref={ref}
        className={cn(
          "h-3 w-full overflow-hidden rounded-full bg-zinc-800",
          className,
        )}
      >
        <div
          className={cn(
            "h-full rounded-full bg-gradient-to-r transition-all duration-700",
            gradient,
          )}
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
    );
  },
);

Progress.displayName = "Progress";
