import { forwardRef, type InputHTMLAttributes } from "react";

import { cn } from "../../shared/lib/cn";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          "flex h-9 w-full min-w-0 rounded-md border border-zinc-800 bg-transparent px-3 py-1 text-base text-zinc-50 shadow-xs transition-[color,box-shadow,border-color]",
          "placeholder:text-zinc-500",
          "selection:bg-zinc-200 selection:text-zinc-900",
          "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium",
          "focus-visible:border-zinc-600",
          "focus-visible:outline-none",
          "focus-visible:ring-[3px] focus-visible:ring-zinc-700/50",
          "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
          "aria-invalid:border-red-500",
          "aria-invalid:ring-red-500/20",
          className,
        )}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";
