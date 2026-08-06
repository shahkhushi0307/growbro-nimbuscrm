"use client";

import { motion } from "framer-motion";
import { caseStudies, type CaseStudy } from "@/data/content";
import { ArrowIcon } from "@/components/ui/Button";

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

export default function CaseStudies() {
  const featured = caseStudies.find((c) => c.featured);
  const rest = caseStudies.filter((c) => !c.featured);

  return (
    <section
      id="case-studies"
      className="bg-gradient-to-b from-emerald-lightest to-almost-white py-20 lg:py-32"
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
          <span className="eyebrow">Case studies</span>
          <h2 className="mt-5 text-[2.5rem] lg:text-[3.375rem]">
            Real teams. Real WhatsApp.{" "}
            <span className="text-emerald">
              <em>Real growth.</em>
            </span>
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {featured && <FeaturedCard study={featured} />}
          <div className="grid gap-6">
            {rest.map((study) => (
              <StandardCard key={study.name} study={study} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function FeaturedCard({ study }: { study: CaseStudy }) {
  return (
    <motion.article
      variants={fadeUp}
      className="group flex flex-col justify-between overflow-hidden rounded-[21px] bg-white p-8 shadow-[0_58px_35px_rgba(0,0,0,0.05)] lg:p-10"
    >
      <div>
        <div className="flex items-center justify-between">
          <span className="eyebrow">{study.industry}</span>
          <span className="rounded-full bg-emerald-lightest px-3 py-1 text-xs font-semibold text-emerald">
            Featured
          </span>
        </div>

        <h3 className="mt-7 max-w-lg text-[1.9rem] leading-tight lg:text-[2.4rem]">
          {study.headline}
        </h3>
        <p className="mt-4 max-w-md text-lg text-green-black">
          {study.description}
        </p>
      </div>

      <div className="mt-9 flex flex-col gap-6 border-t border-lighter-green-black pt-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="font-serif text-6xl tracking-[-0.01em] text-emerald lg:text-7xl">
            {study.statValue}
          </span>
          <p className="mt-2 text-[13px] font-medium uppercase tracking-wider text-green-black">
            {study.statLabel}
          </p>
        </div>
        <a
          href="#contact"
          className="btn-link"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          Read case study
          <span className="inline-flex">
            <ArrowIcon />
          </span>
        </a>
      </div>
    </motion.article>
  );
}

function StandardCard({ study }: { study: CaseStudy }) {
  return (
    <motion.article
      variants={fadeUp}
      className="group flex flex-col justify-between rounded-[21px] border border-lighter-green-black bg-white p-8"
    >
      <div>
        <span className="eyebrow">{study.industry}</span>
        <h3 className="mt-5 text-xl leading-snug text-ink">{study.headline}</h3>
        <p className="mt-3 text-[15px] text-green-black">{study.description}</p>
      </div>

      <div className="mt-7 flex items-end justify-between border-t border-lighter-green-black pt-6">
        <div>
          <span className="font-serif text-[2.5rem] leading-none tracking-[-0.01em] text-emerald">
            {study.statValue}
          </span>
          <p className="mt-1.5 text-[12px] font-medium uppercase tracking-wider text-green-black">
            {study.statLabel}
          </p>
        </div>
        <a
          href="#contact"
          className="btn-link btn-link--sm"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          Read case study
          <span className="inline-flex">
            <ArrowIcon size={16} />
          </span>
        </a>
      </div>
    </motion.article>
  );
}
