"use client";

import { motion } from "framer-motion";
import { stats, type Stat } from "@/data/content";
import { useCountUp } from "@/lib/useCountUp";

const fadeUp = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function StatBlock() {
  return (
    <section className="bg-kale-darker text-white">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="container-x py-20 lg:py-28"
      >
        <motion.h2
          variants={fadeUp}
          className="mx-auto max-w-2xl text-center text-[2rem] leading-[1.2] text-white lg:text-[2.75rem]"
        >
          Numbers your bottom line will{" "}
          <span className="text-emerald-light">
            <em>recognize</em>
          </span>
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 gap-12 text-center sm:grid-cols-3 lg:gap-16">
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp}>
              <StatItem stat={stat} />
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          className="mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#pricing"
            className="btn btn--emerald"
            style={{ paddingRight: "1.5rem" }}
          >
            Start Free Trial
          </a>
          <a
            href="#contact"
            className="btn-link btn-link--light"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Talk to sales
            <ArrowSmall />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

function ArrowSmall() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <path
        d="M9 3L7.9425 4.0575L12.1275 8.25H2V9.75H12.1275L7.9425 13.9425L9 15L15 9L9 3Z"
        fill="currentColor"
      />
    </svg>
  );
}

function StatItem({ stat }: { stat: Stat }) {
  const { ref, display } = useCountUp(stat.value, stat.decimals ?? 0);

  return (
    <div>
      <span
        ref={ref}
        className="font-serif text-[3.5rem] leading-none tracking-[-0.01em] text-emerald-light lg:text-[4.125rem]"
      >
        {display}
        {stat.suffix}
      </span>
      <p className="mt-4 text-[15px] font-medium text-light-green-black">
        {stat.label}
      </p>
    </div>
  );
}
