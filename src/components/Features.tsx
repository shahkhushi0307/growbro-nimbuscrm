"use client";

import { Inbox, Target, Zap, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import { FadeInSection, Stagger } from "@/components/FadeIn";
import { revealItem } from "@/lib/animations";

interface Feature {
  title: string;
  description: string;
  bullets: string[];
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: "Unified Inbox",
    description: "Every WhatsApp, Instagram, and email chat in one place.",
    bullets: ["One thread per customer, across channels", "No more switching apps"],
    icon: <Inbox className="h-7 w-7 text-brand" />,
  },
  {
    title: "Smart Lead Scoring",
    description: "Automatically flags your hottest leads.",
    bullets: ["Auto-tagged by intent and urgency", "Never guess who to call first"],
    icon: <Target className="h-7 w-7 text-brand" />,
  },
  {
    title: "One-Click Follow-Ups",
    description: "Pre-built templates so no lead goes cold.",
    bullets: ["Send in one tap", "Personalized, not generic"],
    icon: <Zap className="h-7 w-7 text-brand" />,
  },
  {
    title: "Real-Time Analytics",
    description: "See what's converting and what isn't.",
    bullets: ["Channel-by-channel breakdown", "Live, not end-of-month"],
    icon: <BarChart3 className="h-7 w-7 text-brand" />,
  },
];

export default function Features() {
  return (
    <section className="bg-charcoal py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <FadeInSection>
          <h2 className="text-center text-3xl font-bold tracking-tight text-smoke md:text-4xl">
            One inbox. Every channel. Zero missed leads.
          </h2>
        </FadeInSection>

        <Stagger className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={revealItem}
              className="group flex flex-col gap-4 rounded-2xl bg-charcoal-850 p-6"
            >
              {f.icon}
              <h3 className="text-xl font-semibold text-smoke group-hover:text-brand">
                {f.title}
              </h3>
              <p className="text-sm text-smoke-300">{f.description}</p>
              <ul className="mt-auto space-y-1.5 text-sm text-smoke-300">
                {f.bullets.map((b, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <span className="text-brand">✓</span>
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
