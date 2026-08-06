"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { partners } from "@/data/content";
import { fadeUp, stagger } from "@/lib/motion";

export default function PartnerStrip() {
  return (
    <section id="about" className="section-pad bg-cream">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="container-x"
      >
        <motion.div
          variants={fadeUp}
          className="flex flex-col items-center text-center"
        >
          <span className="eyebrow">Partners</span>
          <h2 className="mt-4 max-w-2xl text-[30px] font-bold leading-[1.15] tracking-[-0.02em] text-kale lg:text-[44px]">
            Built on the platforms your customers already trust
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {partners.map(({ icon: Icon, title, detail }) => (
            <motion.article
              key={title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="group flex flex-col rounded-2xl border border-line-light bg-white p-6 transition-colors duration-200 hover:border-emerald-deep/40"
            >
              <div className="flex items-start justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-deep/10 text-emerald-deep">
                  <Icon size={20} />
                </span>
                <BadgeCheck size={20} className="text-emerald-deep" />
              </div>
              <h3 className="mt-5 text-[18px] font-semibold tracking-tight text-kale">
                {title}
              </h3>
              <p className="mt-1.5 text-sm text-on-light-muted">{detail}</p>
              <p className="mt-3 text-xs font-medium uppercase tracking-wider text-emerald-deep">
                Verified
              </p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
