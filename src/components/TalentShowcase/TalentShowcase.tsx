"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { talent } from "@/data/content";

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

export default function TalentShowcase() {
  return (
    <section
      id="talent"
      className="bg-gradient-to-b from-emerald-lightest to-white py-20 lg:py-32"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="container-x"
      >
        <motion.div
          variants={fadeUp}
          className="mx-auto flex max-w-2xl flex-col items-center text-center"
        >
          <span className="eyebrow">Built by you</span>
          <h2 className="mt-5 text-[2.5rem] lg:text-[3.375rem]">
            The owners behind the{" "}
            <span className="text-emerald">
              <em>results</em>
            </span>
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {talent.map((person) => (
            <motion.article
              key={person.name}
              variants={fadeUp}
              className="group flex flex-col rounded-[21px] border border-lighter-green-black bg-white p-6 transition-shadow duration-200 hover:shadow-[0_24px_40px_-24px_rgba(19,33,40,0.18)]"
            >
              <div className="flex items-start justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-lightest text-sm font-semibold text-emerald">
                  {person.initials}
                </span>
                <ArrowUpRight
                  size={18}
                  className="text-light-green-black opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100 group-hover:text-emerald"
                />
              </div>

              <blockquote className="mt-5 text-lg font-medium leading-snug text-ink">
                &ldquo;{person.skill}&rdquo;
              </blockquote>

              <footer className="mt-auto pt-6">
                <p className="text-[15px] font-semibold text-ink">
                  {person.name}
                </p>
                <p className="text-sm text-green-black">{person.role}</p>
                <p className="mt-3 inline-block rounded-full bg-emerald-lightest px-3 py-1 text-xs font-medium text-emerald">
                  {person.formerly}
                </p>
              </footer>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
