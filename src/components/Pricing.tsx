"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { FadeInSection, Stagger } from "@/components/FadeIn";
import { revealItem } from "@/lib/animations";

interface Plan {
  name: string;
  price: string;
  sub: string;
  features: string[];
  popular?: boolean;
}

const plans: Plan[] = [
  {
    name: "Starter",
    price: "₹1,999/mo",
    sub: "up to 500 leads/mo, 1 user",
    features: ["500 leads per month", "1 user", "WhatsApp + Instagram"],
  },
  {
    name: "Growth",
    price: "₹4,999/mo",
    sub: "up to 5,000 leads/mo, 5 users",
    features: ["5,000 leads per month", "5 users", "WhatsApp automation", "Smart lead scoring"],
    popular: true,
  },
  {
    name: "Pro",
    price: "₹9,999/mo",
    sub: "unlimited leads, unlimited users",
    features: ["Unlimited leads", "Unlimited users", "Priority support", "Custom integrations"],
  },
];

export default function Pricing() {
  return (
    <section className="bg-charcoal py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <FadeInSection>
          <h2 className="text-center text-3xl font-bold tracking-tight text-smoke md:text-4xl">
            Simple pricing. No surprises.
          </h2>
        </FadeInSection>

        <Stagger className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              variants={revealItem}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className={`relative flex flex-col gap-6 rounded-2xl bg-charcoal-850 p-6 ${
                plan.popular
                  ? "ring-2 ring-brand shadow-lg shadow-brand/20"
                  : "border border-smoke/10"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-3 py-0.5 text-[10px] font-black uppercase text-charcoal-850">
                  Most Popular
                </span>
              )}

              <div>
                <h3 className="text-xl font-semibold text-smoke">{plan.name}</h3>
                <p className="mt-1 text-sm text-smoke-300">{plan.sub}</p>
              </div>

              <div className="text-4xl font-extrabold text-smoke">{plan.price}</div>

              <ul className="space-y-2 text-sm text-smoke-300">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-brand" />
                    {f}
                  </li>
                ))}
              </ul>

              <motion.a
                href="#demo"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className={`mt-auto rounded-full px-5 py-2.5 text-center text-sm font-medium transition-all hover:brightness-110 ${
                  plan.popular
                    ? "bg-brand text-charcoal-850 hover:bg-brand/90"
                    : "border border-smoke/30 text-smoke hover:border-brand hover:text-brand"
                }`}
              >
                {plan.popular ? "Get Started" : "Start Free Trial"}
              </motion.a>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
