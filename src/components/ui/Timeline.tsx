"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { ExperienceEntry } from "@/lib/types";
import { cn } from "@/lib/utils";

export function ExperienceTimeline({ items }: { items: ExperienceEntry[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="relative border-l border-border pl-6 sm:pl-8">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <motion.div
            key={`${item.company}-${item.start}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="relative mb-10 last:mb-0"
          >
            <span className="absolute -left-[calc(1.5rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-accent-soft sm:-left-[calc(2rem+5px)]" />
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full flex-col items-start gap-1 text-left sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {item.role}
                </h3>
                <p className="text-sm text-accent">
                  {item.company}
                  {item.location ? ` · ${item.location}` : ""}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-wide text-muted">
                  {item.start} — {item.end}
                </span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 text-muted transition-transform",
                    isOpen && "rotate-180"
                  )}
                />
              </div>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-3 space-y-2 overflow-hidden text-sm text-muted"
                >
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
