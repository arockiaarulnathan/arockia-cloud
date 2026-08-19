"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

export function StatCounter({
  value,
  suffix = "",
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const shouldReduceMotion = useReducedMotion();
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1.4, bounce: 0 });
  const displayRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (isInView) {
      motionValue.set(shouldReduceMotion ? value : value);
    }
  }, [isInView, motionValue, value, shouldReduceMotion]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      if (displayRef.current) {
        displayRef.current.textContent = `${Math.round(latest)}${suffix}`;
      }
    });
    return unsubscribe;
  }, [spring, suffix]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="font-display text-3xl font-semibold text-gradient sm:text-4xl">
        <span ref={displayRef}>0{suffix}</span>
      </div>
      <p className="mt-1 text-xs uppercase tracking-wide text-muted sm:text-sm">
        {label}
      </p>
    </motion.div>
  );
}
