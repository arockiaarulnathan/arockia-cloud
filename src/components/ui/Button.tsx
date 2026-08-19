"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-accent text-accent-foreground hover:brightness-110 shadow-[0_0_0_1px_var(--border)]",
  secondary:
    "bg-surface-2 text-foreground hover:bg-border border border-border",
  ghost: "bg-transparent text-foreground hover:bg-surface-2",
};

type BaseProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = BaseProps & {
  href: string;
  onClick?: never;
  type?: never;
};

type ButtonAsButton = BaseProps & {
  href?: never;
  onClick?: () => void;
  type?: "button" | "submit";
};

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "primary", className, children } = props;
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
    variantClasses[variant],
    className
  );

  if ("href" in props && props.href) {
    return (
      <motion.span whileTap={{ scale: 0.96 }} className="inline-block">
        <Link href={props.href} className={classes}>
          {children}
        </Link>
      </motion.span>
    );
  }

  return (
    <motion.button
      whileTap={{ scale: 0.96 }}
      type={"type" in props ? props.type ?? "button" : "button"}
      onClick={"onClick" in props ? props.onClick : undefined}
      className={classes}
    >
      {children}
    </motion.button>
  );
}
