"use client";

import { clsx } from "clsx";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function CTAButton({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200";

  const variants = {
    primary:
      "bg-brand-500 text-white hover:bg-brand-600 shadow-soft hover:shadow-md active:scale-[0.98]",
    outline:
      "border-2 border-brand-500 text-brand-500 hover:bg-brand-50 active:scale-[0.98]",
    ghost: "text-brand-500 hover:bg-brand-50",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const classes = clsx(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
