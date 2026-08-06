"use client";

import { motion } from "framer-motion";
import { FadeInSection, Stagger } from "@/components/FadeIn";
import { revealItem } from "@/lib/animations";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "NimbusCRM cut our response time from hours to minutes.",
    name: "Rohit S.",
    title: "Founder, Craftline Furniture",
  },
  {
    quote: "We finally stopped losing leads in random WhatsApp chats.",
    name: "Anita K.",
    title: "Anita's Bakehouse",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-charcoal py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <FadeInSection>
          <h2 className="text-center text-3xl font-bold tracking-tight text-smoke md:text-4xl">
            Loved by small business owners
          </h2>
        </FadeInSection>

        <Stagger className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={revealItem}
              className="flex h-full flex-col gap-4 rounded-2xl bg-charcoal-850 p-6"
            >
              <div className="flex text-lg text-brand">{"★".repeat(5)}</div>
              <p className="flex-1 text-base italic text-smoke">
                {`"${t.quote}"`}
              </p>
              <div>
                <p className="font-medium text-smoke">{t.name}</p>
                <p className="text-sm text-smoke-300">{t.title}</p>
              </div>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
