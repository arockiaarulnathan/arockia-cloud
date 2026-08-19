"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
  index = 0,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  index?: number;
  id?: string;
}) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      whileHover={{ y: -6 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border/60 bg-surface/60 p-6 shadow-lg shadow-black/5 backdrop-blur-xl transition-colors duration-300 hover:border-accent/50",
        id && "scroll-mt-28",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
