"use client";

import { motion } from "framer-motion";
import { MessageCircle, Star } from "lucide-react";
import Button, { ArrowIcon } from "@/components/ui/Button";

const checks = [
  "Every lead from every chat in one inbox",
  "Smart replies that never miss a customer",
  "Follow-ups on autopilot, not on your to-do list",
];

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

export default function Hero() {
  return (
    <section id="top" className="overflow-hidden bg-white pt-32 lg:pt-40">
      <div className="container-x">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="mx-auto flex max-w-4xl flex-col items-center text-center"
        >
          <motion.h1
            variants={fadeUp}
            className="max-w-3xl text-[3rem] leading-[1.2] lg:text-[4.5rem]"
          >
            Every WhatsApp chat, turned into{" "}
            <span className="text-emerald">
              <em>paying customers</em>
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-2xl text-lg text-dark-green-black lg:text-xl"
          >
            NimbusCRM gives small businesses the human layer behind modern
            sales — tracking every lead across WhatsApp, Instagram, and email
            in one inbox.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
          >
            {checks.map((check) => (
              <span
                key={check}
                className="inline-flex items-center gap-2 text-[15px] text-ink"
              >
                <CheckIcon />
                {check}
              </span>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <Button href="#pricing" variant="outline">
              Start Free Trial
            </Button>
            <a
              href="#contact"
              className="btn-link"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Book a discovery call
              <span className="inline-flex">
                <ArrowIcon />
              </span>
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-12 flex flex-wrap items-center justify-center gap-3"
          >
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} className="fill-emerald text-emerald" />
              ))}
            </div>
            <span className="text-lg tracking-[-0.01em] text-ink">
              4.7/5 from{" "}
              <span className="font-semibold">329 reviews</span> on G2
            </span>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-8 text-sm text-green-black"
          >
            No credit card · Setup in 5 min · Cancel anytime
          </motion.p>
        </motion.div>

        <ChatMock />
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M10.2003 14.8518L18.4731 6.57812L19.7466 7.85073L10.2003 17.397L4.47266 11.6694L5.74526 10.3968L10.2003 14.8518Z"
        fill="#338632"
      />
    </svg>
  );
}

function ChatMock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
      className="relative mx-auto mt-16 w-full max-w-2xl"
    >
      <div className="overflow-hidden rounded-[21px] border border-lighter-green-black bg-white shadow-[0_58px_35px_rgba(0,0,0,0.06)]">
        <div className="flex items-center gap-3 border-b border-lighter-green-black px-6 py-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-lightest text-emerald">
            <MessageCircle size={16} />
          </div>
          <div className="text-left">
            <p className="text-[15px] font-semibold text-ink">Fresh Leads</p>
            <p className="text-[13px] text-emerald">online · WhatsApp</p>
          </div>
          <span className="ml-auto h-2 w-2 rounded-full bg-emerald" />
        </div>

        <div className="flex flex-col gap-3 px-6 py-6">
          <div className="max-w-[75%] self-start rounded-2xl rounded-bl-sm bg-almost-white px-4 py-2.5 text-[15px] text-ink">
            Hi, is the oak dining table still available?
          </div>
          <div className="max-w-[75%] self-end rounded-2xl rounded-br-sm bg-emerald-lightest px-4 py-2.5 text-[15px] text-ink">
            Yes! It&apos;s on hold for you. Want me to reserve it? ✓
          </div>
        </div>
      </div>

      <div className="absolute -right-3 top-16 inline-flex items-center gap-1.5 rounded-full border border-emerald-lighter bg-white px-3.5 py-1.5 text-[13px] font-semibold text-emerald shadow-[0_12px_24px_-12px_rgba(51,134,50,0.5)]">
        <span className="text-emerald">⚡</span>
        Lead scored: Hot
      </div>
    </motion.div>
  );
}
