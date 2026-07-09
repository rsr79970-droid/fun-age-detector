import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "destructive" | "outline" | "ghost";
  size?: "sm" | "default" | "lg" | "icon";
}

export function Button({
  variant = "default",
  size = "default",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const variants = {
    default: `
      bg-zinc-900
      text-white
      hover:bg-zinc-800
    `,
    secondary: `
      bg-zinc-100
      text-zinc-900
      hover:bg-zinc-200
    `,
    destructive: `
      bg-red-600
      text-white
      hover:bg-red-700
    `,
    outline: `
      border
      border-zinc-800
      bg-transparent
      text-zinc-100
      hover:bg-zinc-900
    `,
    ghost: `
      bg-transparent
      text-zinc-100
      hover:bg-zinc-900
    `,
  };

  const sizes = {
    sm: `
      h-8
      rounded-md
      px-3
      text-xs
    `,
    default: `
      h-10
      rounded-md
      px-4
      text-sm
    `,
    lg: `
      h-12
      rounded-lg
      px-8
      text-base
    `,
    icon: `
      h-10
      w-10
      rounded-md
      p-0
    `,
  };

  return (
    <button
      className={`
        inline-flex
        items-center
        justify-center
        whitespace-nowrap
        font-medium

        transition-all
        duration-200

        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-zinc-400
        focus-visible:ring-offset-2
        focus-visible:ring-offset-zinc-950

        disabled:pointer-events-none
        disabled:opacity-50

        active:scale-[0.98]

        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
