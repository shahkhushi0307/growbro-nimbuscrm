"use client";

import { motion } from "framer-motion";
import { Send, Smile, Paperclip, Mic } from "lucide-react";
import { heroStagger, heroItem } from "@/lib/animations";

const Stars = ({ className = "" }: { className?: string }) => (
  <span className={`text-brand ${className}`}>{"★".repeat(5)}</span>
);

function ChatMock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
      className="relative mx-auto h-[520px] w-[300px]"
    >
      <div className="absolute inset-0 rounded-[2.25rem] bg-[#171a1f] shadow-2xl ring-1 ring-charcoal-850">
        {/* Status bar */}
        <div className="flex h-6 items-center justify-between px-4 text-[10px] text-smoke-300">
          <span>9:41</span>
          <span>●●</span>
          <span>100%</span>
        </div>
        {/* App bar */}
        <div className="flex items-center gap-3 bg-[#0d1419] px-3 py-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-sm font-black text-charcoal-850">
            C
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-smoke">Craftline Furniture</p>
            <p className="text-xs text-smoke-300">Online</p>
          </div>
          <div className="flex items-center gap-3 text-smoke-300">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 12h.01M20.354 4.646A9 9 0 0 1 18.683 2.757 9 9 0 0 0 12 1v9a6 6 0 0 0 11.834 3.937 6.5 6.5 0 0 0 1.105-1.895" />
            </svg>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M1 12l5 5 12-12" />
            </svg>
          </div>
        </div>
        {/* Chat area */}
        <div className="relative h-[340px] overflow-y-auto bg-[#0b141a] px-2 py-3">
          <motion.div
            className="mb-2 max-w-[72%] rounded-bl-none rounded-2xl bg-[#253539] px-3 py-2 text-sm text-smoke"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.6 }}
          >
            Hi! Is the Premium Sofa still in stock? Looking for a 3-seater.
          </motion.div>
          <motion.div
            className="absolute top-2 right-2 rounded-full bg-yellow-300 px-2.5 py-0.5 text-[10px] font-black uppercase text-charcoal-850 shadow"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 1.8,
              type: "spring",
              stiffness: 400,
              damping: 20,
              opacity: { duration: 0.3 },
            }}
          >
            {"🔥 Hot Lead"}
          </motion.div>
          <motion.div
            className="ml-auto mb-2 max-w-[72%] rounded-br-none rounded-2xl bg-brand px-3 py-2 text-sm text-charcoal-850"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 1.2 }}
          >
            Yes! Available in 3 colours. Want me to hold one for you?
          </motion.div>
        </div>
        {/* Input bar */}
        <div className="flex items-center gap-2 bg-[#0d1419] p-2">
          <Mic size={18} className="text-smoke-300" />
          <input
            type="text"
            placeholder="Message..."
            className="flex-1 bg-transparent text-sm text-smoke outline-none placeholder:text-smoke-300/50"
          />
          <Paperclip size={18} className="text-smoke-300" />
          <button
            type="button"
            className="flex h-7 w-7 items-center justify-center rounded-full bg-brand text-charcoal-850"
          >
            <Send size={16} />
          </button>
          <Smile size={18} className="text-smoke-300" />
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative isolate pt-16">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 py-16 md:py-20 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroStagger}
          className="flex flex-col gap-6 text-center lg:text-left"
        >
          <motion.div variants={heroItem} className="inline-flex items-center justify-center gap-2 self-start rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand lg:justify-start">
            <Stars />{" "}
            <span className="text-smoke-300">· Official WhatsApp integration</span>
          </motion.div>

          <motion.h1
            variants={heroItem}
            className="text-[2.5rem] font-extrabold tracking-tight text-smoke md:text-7xl"
          >
            Turn WhatsApp chats into{" "}
            <motion.span
              variants={heroItem}
              className="italic text-brand"
              style={{ fontStyle: "italic" }}
            >
              paying customers
            </motion.span>
          </motion.h1>

          <motion.p
            variants={heroItem}
            className="mx-auto max-w-xl text-base text-smoke-300 md:text-lg lg:mx-0"
          >
            NimbusCRM tracks every lead across WhatsApp, Instagram, and email in
            one inbox, so nothing falls through the cracks.
          </motion.p>

          <motion.div variants={heroItem} className="flex flex-col items-center gap-3 sm:flex-row">
            <motion.a
              href="#demo"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="w-full rounded-full bg-brand px-6 py-3 text-center text-sm font-medium text-charcoal-850 shadow-lg shadow-brand/25 transition-all hover:brightness-110 hover:bg-brand/90"
            >
              Start Free Trial
            </motion.a>
            <motion.a
              href="#demo"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="w-full rounded-full border border-smoke/30 px-6 py-3 text-center text-sm font-medium text-smoke transition-all hover:brightness-110 hover:border-brand hover:text-brand"
            >
              Book a Demo
            </motion.a>
          </motion.div>

          <motion.p variants={heroItem} className="text-xs text-smoke-300">
            No credit card · Setup in 5 min · Cancel anytime
          </motion.p>

          <motion.div variants={heroItem} className="flex flex-wrap items-center justify-center gap-2 text-xs text-smoke-300 lg:justify-start">
            <span className="flex items-center gap-1">
              <Stars className="text-base" /> Rating
            </span>
            <span className="text-smoke-300">·</span>
            <span>✦ WhatsApp-first</span>
            <span className="text-smoke-300">·</span>
            <span>⚡ Live in 5 Mins</span>
          </motion.div>
        </motion.div>

        <ChatMock />
      </div>
    </section>
  );
}
