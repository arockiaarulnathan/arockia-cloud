"use client";

import { motion } from "framer-motion";

export function SkillTagGroup({
  category,
  items,
  index = 0,
}: {
  category: string;
  items: string[];
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="rounded-2xl border border-border bg-surface p-5"
    >
      <h3 className="mb-3 text-sm font-semibold text-accent">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full bg-surface-2 px-3 py-1 text-xs text-muted"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function SoftSkillRings({ items }: { items: string[] }) {
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <motion.div
          key={item}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, delay: i * 0.08 }}
          className="flex items-center gap-3"
        >
          <span
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/40 text-xs font-semibold text-accent"
            style={{ opacity: 1 - i * 0.12 }}
          >
            {i + 1}
          </span>
          <span className="text-sm font-medium text-foreground">{item}</span>
        </motion.div>
      ))}
    </div>
  );
}
