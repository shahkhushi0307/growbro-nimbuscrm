"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
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

export default function ClosingCTA() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "done" | "error">("idle");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setState("error");
      return;
    }
    setState("done");
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-kale-darker">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_110%,rgba(127,200,124,0.14),transparent)]"
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="container-x relative flex flex-col items-center py-28 text-center lg:py-36"
      >
        <motion.h2
          variants={fadeUp}
          className="max-w-3xl text-[2.5rem] leading-[1.2] text-white lg:text-[4rem]"
        >
          Your competitor is already automating WhatsApp.{" "}
          <span className="text-emerald-light">
            <em>Are you?</em>
          </span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mt-7 max-w-md text-lg text-light-green-black lg:text-xl"
        >
          Start free. Setup takes 5 minutes.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10">
          <Button href="#pricing" variant="emerald">
            Start Free Trial
          </Button>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-16 w-full max-w-md border-t border-white/10 pt-12"
        >
          <p className="text-[13px] font-medium uppercase tracking-wider text-emerald-light">
            One growth tip, weekly
          </p>
          {state === "done" ? (
            <div className="mt-5 flex items-center justify-center gap-2 rounded-full bg-white/10 px-5 py-3 text-[15px] text-emerald-light">
              <CheckCircle2 size={18} />
              You&apos;re in. Talk soon.
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="mt-5 flex w-full flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (state === "error") setState("idle");
                }}
                placeholder="you@business.com"
                aria-label="Email address"
                className="h-12 flex-1 rounded-full border border-white/20 bg-white/5 px-5 text-[15px] text-white placeholder:text-light-green-black focus:border-emerald-light focus:outline-none"
              />
              <button
                type="submit"
                className="btn btn--white btn--small w-full sm:w-auto"
              >
                Subscribe
              </button>
            </form>
          )}
          {state === "error" && (
            <p className="mt-3 text-sm text-[#f6eaeb]">
              Please enter a valid email address.
            </p>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
