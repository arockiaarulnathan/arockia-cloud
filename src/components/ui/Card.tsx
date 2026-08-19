"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
  index = 0,
}: {
  children: React.ReactNode;
  className?: string;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      whileHover={{ y: -6 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-colors duration-300 hover:border-accent/50",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
