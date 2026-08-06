"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  revealItem,
  staggerContainer,
} from "@/lib/animations";

type FadeInSectionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
};

/* Fade + slide-up for a whole section, revealed once when scrolled into view. */
export function FadeInSection({
  children,
  className,
  delay = 0,
  amount = 0.2,
}: FadeInSectionProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={{
        hidden: revealItem.hidden,
        visible: {
          ...revealItem.visible,
          transition: {
            duration: 0.5,
            ease: "easeOut",
            delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

type StaggerProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

/* Staggers direct motion-children that use the `revealItem` variant. */
export function Stagger({ children, className, delay = 0 }: StaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: staggerContainer.hidden,
        visible: {
          transition: {
            staggerChildren: 0.06,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

type CountUpProps = {
  to: number;
  suffix?: string;
  decimals?: number;
  className?: string;
};

/* Numeric stat that counts up when scrolled into view. */
export function CountUp({ to, suffix = "", decimals = 0, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const startTime = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      setVal(progress * to);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, to]);

  return (
    <span ref={ref} className={className}>
      {val.toFixed(decimals)}
      {suffix}
    </span>
  );
}

/* Re-exported for components that need the raw variant objects. */
export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};
