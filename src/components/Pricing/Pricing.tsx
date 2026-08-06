"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { plans } from "@/data/content";
import Button from "@/components/ui/Button";

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

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-20 lg:py-32">
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
          <span className="eyebrow">Pricing</span>
          <h2 className="mt-5 text-[2.5rem] lg:text-[3.375rem]">
            Simple pricing.{" "}
            <span className="text-emerald">
              <em>No surprises.</em>
            </span>
          </h2>
        </motion.div>

        <div className="mt-16 grid items-stretch gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <motion.article
              key={plan.name}
              variants={fadeUp}
              className={`relative flex flex-col rounded-[21px] border p-8 lg:p-9 ${
                plan.featured
                  ? "border-emerald bg-emerald-lightest"
                  : "border-lighter-green-black bg-white"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-emerald px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                  Most Popular
                </span>
              )}

              <h3 className="font-sans text-lg font-medium text-ink">
                {plan.name}
              </h3>
              <p className="mt-1 text-sm text-green-black">
                {plan.description}
              </p>

              <p className="mt-7 flex items-baseline gap-1">
                <span className="font-serif text-[2.75rem] leading-none tracking-[-0.01em] text-ink">
                  {plan.price}
                </span>
                <span className="text-sm text-green-black">{plan.period}</span>
              </p>

              <ul className="mt-7 flex flex-col gap-3 border-t border-lighter-green-black pt-7">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-[15px] text-darker-green-black"
                  >
                    <Check size={18} className="mt-0.5 shrink-0 text-emerald" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-9">
                <Button
                  href="#contact"
                  variant={plan.featured ? "emerald" : "dark"}
                  full
                >
                  {plan.cta}
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
