"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/data/content";
import { ArrowIcon } from "@/components/ui/Button";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((cur) => (cur + 1) % count), 5000);
    return () => clearInterval(id);
  }, [paused, count]);

  const prev = () => setIndex((cur) => (cur - 1 + count) % count);
  const next = () => setIndex((cur) => (cur + 1) % count);
  const t = testimonials[index];

  return (
    <section id="testimonials" className="bg-almost-white py-20 lg:py-32">
      <div className="container-x flex flex-col items-center text-center">
        <span className="eyebrow">Testimonials</span>
        <h2 className="mt-5 max-w-2xl text-[2.5rem] lg:text-[3.375rem]">
          Loved by small business{" "}
          <span className="text-emerald">
            <em>owners</em>
          </span>
        </h2>

        <div
          className="mt-16 w-full max-w-2xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative min-h-[300px] sm:min-h-[260px]">
            <AnimatePresence mode="wait">
              <motion.article
                key={t.name}
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex h-full flex-col items-center rounded-[21px] border border-lighter-green-black bg-white p-8 text-center shadow-[0_58px_35px_rgba(0,0,0,0.03)] sm:p-12"
              >
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-emerald text-emerald"
                    />
                  ))}
                </div>
                <blockquote className="mt-7 max-w-xl text-xl leading-relaxed text-ink sm:text-2xl">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <footer className="mt-9 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-lightest text-sm font-semibold text-emerald">
                    {t.name.charAt(0)}
                  </span>
                  <div className="text-left">
                    <p className="text-[15px] font-semibold text-ink">
                      {t.name}
                    </p>
                    <p className="text-sm text-green-black">{t.role}</p>
                  </div>
                </footer>
              </motion.article>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-lighter-green-black text-ink transition-colors hover:border-emerald hover:text-emerald"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((item, i) => (
                <button
                  key={item.name}
                  type="button"
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index
                      ? "w-6 bg-emerald"
                      : "w-2 bg-lighter-green-black hover:bg-green-black"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              aria-label="Next testimonial"
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-lighter-green-black text-ink transition-colors hover:border-emerald hover:text-emerald"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="mt-8">
            <a
              href="#case-studies"
              className="btn-link"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Read their full stories
              <span className="inline-flex">
                <ArrowIcon />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
