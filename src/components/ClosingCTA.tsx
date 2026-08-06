"use client";

import { motion } from "framer-motion";
import { FadeInSection } from "@/components/FadeIn";

export default function ClosingCTA() {
  return (
    <section className="bg-gradient-to-r from-charcoal via-brand-950 to-charcoal py-16 md:py-20">
      <FadeInSection>
        <div className="mx-auto max-w-4xl px-6 text-center md:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-smoke md:text-4xl">
            Your competitor is already automating WhatsApp. Are you?
          </h2>
          <p className="mt-4 text-base text-smoke-300">
            Start free. Setup takes 5 minutes.
          </p>
          <motion.a
            href="#demo"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="mt-6 inline-flex items-center justify-center rounded-full bg-brand px-7 py-3 text-sm font-medium text-charcoal-850 shadow-lg shadow-brand/25 transition-all hover:brightness-110"
          >
            Start Free Trial
          </motion.a>
        </div>
      </FadeInSection>
    </section>
  );
}
