"use client";

import Link from "next/link";
import { motion, type HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-burgundy text-paper hover:bg-burgundy-hover disabled:hover:bg-burgundy",
  secondary: "bg-paper text-ink hover:bg-paper-dim disabled:hover:bg-paper",
  ghost:
    "bg-transparent text-paper border border-ink-border hover:border-burgundy hover:text-burgundy-bright",
};

const base =
  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy-bright focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:cursor-not-allowed disabled:opacity-40";

type LinkButtonProps = {
  href: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

export function LinkButton({
  href,
  variant = "primary",
  className = "",
  children,
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={`${base} ${variantClasses[variant]} active:scale-[0.97] ${className}`}
    >
      {children}
    </Link>
  );
}

type ButtonProps = HTMLMotionProps<"button"> & {
  variant?: Variant;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", children, disabled, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileTap={disabled ? undefined : { scale: 0.97 }}
        transition={{ duration: 0.15 }}
        disabled={disabled}
        className={`${base} ${variantClasses[variant]} ${className}`}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
