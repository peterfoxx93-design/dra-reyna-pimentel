"use client";

import { clsx } from "clsx";
import { motion } from "motion/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({ children, className = "", hover = true }: Props) {
  return (
    <motion.div
      whileHover={hover ? { y: -6, scale: 1.02 } : undefined}
      transition={{ duration: 0.3 }}
      className={clsx(
        "bg-white rounded-2xl border border-brand-100 shadow-card p-6 transition-shadow",
        hover && "hover:shadow-lg",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
