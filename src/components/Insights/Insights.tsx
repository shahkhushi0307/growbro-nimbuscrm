"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { posts } from "@/data/content";

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

export default function Insights() {
  return (
    <section
      id="insights"
      className="bg-gradient-to-b from-almost-white to-white py-20 lg:py-32"
    >
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
          <span className="eyebrow">Insights</span>
          <h2 className="mt-5 text-[2.5rem] lg:text-[3.375rem]">
            Grow your WhatsApp{" "}
            <span className="text-emerald">
              <em>business</em>
            </span>
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <motion.article
              key={post.title}
              variants={fadeUp}
              className="group flex cursor-pointer flex-col rounded-[21px] border border-lighter-green-black bg-white p-7 transition-shadow duration-200 hover:shadow-[0_24px_40px_-24px_rgba(19,33,40,0.18)]"
            >
              <span className="inline-flex w-fit rounded-full bg-emerald-lightest px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald">
                {post.category}
              </span>
              <h3 className="mt-5 text-[1.35rem] leading-snug text-ink transition-colors duration-200 group-hover:text-emerald">
                {post.title}
              </h3>
              <div className="mt-auto flex items-center justify-between pt-7 text-[13px] text-green-black">
                <span>{post.date}</span>
                <span className="flex items-center gap-1 font-medium text-emerald">
                  {post.readTime}
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        <NewsletterForm />
      </motion.div>
    </section>
  );
}

function NewsletterForm() {
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
    <motion.div
      variants={fadeUp}
      className="mx-auto mt-20 flex max-w-xl flex-col items-center text-center"
    >
      <p className="text-xl text-ink">
        Get one WhatsApp growth tip,{" "}
        <span className="text-emerald">
          <em>weekly.</em>
        </span>
      </p>

      {state === "done" ? (
        <div className="mt-7 flex items-center gap-2 rounded-full bg-emerald-lightest px-5 py-3 text-[15px] font-medium text-emerald">
          <CheckCircle2 size={18} />
          You&apos;re in. Check your inbox for the first tip.
        </div>
      ) : (
        <form
          onSubmit={onSubmit}
          className="mt-7 flex w-full max-w-lg flex-col gap-3 sm:flex-row"
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
            className="h-12 flex-1 rounded-full border border-lighter-green-black bg-white px-5 text-[15px] text-ink placeholder:text-light-green-black focus:border-emerald focus:outline-none"
          />
          <button
            type="submit"
            className="btn btn--emerald btn--small w-full sm:w-auto"
          >
            Subscribe
          </button>
        </form>
      )}

      {state === "error" && (
        <p className="mt-3 text-sm text-[#9e2d33]">
          Please enter a valid email address.
        </p>
      )}
    </motion.div>
  );
}
