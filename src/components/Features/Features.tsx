"use client";

import { motion } from "framer-motion";
import { Check, MessageCircle, Star } from "lucide-react";
import { storyCards, type StoryCard } from "@/data/content";
import Button from "@/components/ui/Button";
import { fadeUp } from "@/lib/motion";

export default function Features() {
  return (
    <section id="features" className="bg-almost-white py-20 lg:py-32">
      <div className="container-x">
        <motion.header
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="eyebrow">One platform</span>
          <h2 className="mt-5 text-[2.5rem] lg:text-[3.375rem]">
            Everything you need to{" "}
            <span className="serif-em">sell on chat</span>
          </h2>
        </motion.header>

        <div
          className="mx-auto mt-20 flex max-w-6xl flex-col lg:mt-28"
          style={{ rowGap: "40vh" }}
        >
          {storyCards.map((card, i) => (
            <StoryCard key={card.title} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StoryCard({ card, index }: { card: StoryCard; index: number }) {
  return (
    <article className="sticky top-[15%] overflow-hidden rounded-[21px] border border-lighter-green-black bg-white shadow-[0_58px_35px_rgba(0,0,0,0.03)]">
      <div className="grid min-h-[37.5rem] lg:grid-cols-2">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col justify-center px-8 py-14 lg:px-16"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-lightest text-emerald">
            <card.icon size={22} />
          </span>
          <span className="eyebrow mt-8">{card.eyebrow}</span>
          <h3 className="mt-3 max-w-md text-[1.9rem] leading-tight lg:text-[2.4rem]">
            {card.title}
          </h3>
          <p className="mt-4 max-w-md text-lg text-green-black">
            {card.description}
          </p>

          <ul className="mt-8 flex max-w-md flex-col gap-3.5">
            {card.bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex items-start gap-3 text-[17px] text-ink"
              >
                <Check size={20} className="mt-0.5 shrink-0 text-emerald" />
                {bullet}
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Button href="#pricing" variant="outline" small>
              Learn more
            </Button>
          </div>
        </motion.div>

        <div className="relative flex items-center justify-center overflow-hidden border-l border-lighter-green-black bg-emerald-lightest/60 p-8 lg:p-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-lighter/50 blur-3xl"
          />
          <div className="relative w-full max-w-sm">
            {index === 0 && <InboxMock />}
            {index === 1 && <ScoreMock />}
            {index === 2 && <FollowUpMock />}
          </div>
        </div>
      </div>
    </article>
  );
}

function InboxMock() {
  const threads = [
    { name: "Anita K.", msg: "Yes! Can I pick it up tomorrow?", time: "2m", tag: "Hot", on: true },
    { name: "Rohit S.", msg: "Is the oak table still available?", time: "1h", tag: "Warm", on: true },
    { name: "Priya N.", msg: "Do you deliver to Baner?", time: "3h", tag: "New", on: false },
  ];
  return (
    <div className="overflow-hidden rounded-2xl border border-lighter-green-black bg-white shadow-[0_20px_40px_-20px_rgba(19,33,40,0.2)]">
      <div className="flex items-center justify-between border-b border-lighter-green-black px-5 py-4">
        <div className="flex items-center gap-2.5">
          <MessageCircle size={16} className="text-emerald" />
          <span className="text-[15px] font-semibold text-ink">
            Fresh Leads
          </span>
        </div>
        <span className="rounded-full bg-emerald-lightest px-2.5 py-1 text-[11px] font-semibold text-emerald">
          WhatsApp · Live
        </span>
      </div>
      {threads.map((t) => (
        <div
          key={t.name}
          className="flex items-center gap-3 border-b border-lighter-green-black px-5 py-3.5 last:border-0"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-kale-lightest text-xs font-semibold text-kale-dark">
            {t.name.charAt(0)}
          </span>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="truncate text-[14px] font-medium text-ink">
                {t.name}
              </span>
              <span className="text-[11px] text-light-green-black">{t.time}</span>
            </div>
            <p className="truncate text-[13px] text-green-black">{t.msg}</p>
          </div>
          <span
            className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${
              t.on
                ? "bg-emerald-lightest text-emerald"
                : "bg-almost-white text-green-black"
            }`}
          >
            {t.tag}
          </span>
        </div>
      ))}
    </div>
  );
}

function ScoreMock() {
  const leads = [
    { name: "Vikram M.", intent: "Buying now", score: 92 },
    { name: "Sneha D.", intent: "Price quote", score: 78 },
    { name: "Kabir T.", intent: "Just browsing", score: 34 },
  ];
  return (
    <div className="overflow-hidden rounded-2xl border border-lighter-green-black bg-white shadow-[0_20px_40px_-20px_rgba(19,33,40,0.2)]">
      <div className="border-b border-lighter-green-black px-5 py-4">
        <span className="text-[15px] font-semibold text-ink">
          Lead heat score
        </span>
        <p className="text-[12px] text-green-black">
          Auto-ranked by intent &amp; urgency
        </p>
      </div>
      {leads.map((l) => (
        <div
          key={l.name}
          className="flex items-center gap-3 border-b border-lighter-green-black px-5 py-3.5 last:border-0"
        >
          <span
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
              l.score > 80
                ? "bg-emerald-lightest text-emerald"
                : "bg-almost-white text-green-black"
            }`}
          >
            {l.name.charAt(0)}
          </span>
          <div className="min-w-0 flex-1">
            <span className="block truncate text-[14px] font-medium text-ink">
              {l.name}
            </span>
            <p className="text-[12px] text-green-black">{l.intent}</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-16 overflow-hidden rounded-full bg-almost-white">
              <div
                className="h-full rounded-full bg-emerald"
                style={{ width: `${l.score}%` }}
              />
            </div>
            <span className="w-7 text-right text-[13px] font-semibold text-ink">
              {l.score}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function FollowUpMock() {
  return (
    <div className="overflow-hidden rounded-2xl border border-lighter-green-black bg-white shadow-[0_20px_40px_-20px_rgba(19,33,40,0.2)]">
      <div className="border-b border-lighter-green-black px-5 py-4">
        <span className="text-[15px] font-semibold text-ink">
          Smart reply suggestions
        </span>
      </div>
      <div className="flex flex-col gap-3 px-5 py-4">
        <div className="max-w-[85%] self-start rounded-2xl rounded-bl-sm bg-almost-white px-4 py-2.5 text-[13px] text-ink">
          Hi, do you still have the dining table?
        </div>
        <div className="max-w-[85%] self-end rounded-2xl rounded-br-sm bg-emerald-lightest px-4 py-2.5 text-[13px] text-ink">
          Yes — on hold for you. Want me to reserve it?
        </div>
        <div className="mt-1 flex flex-col gap-2">
          {["Yes, reserve it for me", "Can I see more photos?", "Delivery time?"].map(
            (chip) => (
              <span
                key={chip}
                className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-lighter bg-white px-3.5 py-2 text-[13px] font-medium text-ink transition-colors hover:border-emerald"
              >
                <Star size={12} className="text-emerald" />
                {chip}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
}
