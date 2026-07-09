import { forwardRef, type HTMLAttributes } from "react";

import { cn } from "../../shared/lib/cn";

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "common" | "rare" | "epic" | "legendary";
}

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = "common", ...props }, ref) => {
    const variants = {
      common: `
        border-zinc-700
        bg-zinc-900
        text-zinc-200
      `,

      rare: `
        border-sky-500/30
        bg-sky-500/10
        text-sky-300
      `,

      epic: `
        border-violet-500/30
        bg-violet-500/10
        text-violet-300
      `,

      legendary: `
        border-orange-500/30
        bg-orange-500/10
        text-orange-300
      `,
    };

    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center",
          "rounded-full",
          "border",
          "px-3 py-1",
          "text-xs font-semibold uppercase tracking-wider",
          "transition-colors",
          variants[variant],
          className,
        )}
        {...props}
      />
    );
  },
);

Badge.displayName = "Badge";
