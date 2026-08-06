"use client";

import { FadeInSection } from "@/components/FadeIn";

const industries = [
  "Restaurants",
  "Real Estate",
  "Salons",
  "Fitness",
  "Education",
  "Boutiques",
  "Studios",
  "Coaching",
];

export default function LogoMarquee() {
  const repeated = [...industries, ...industries];

  return (
    <section className="bg-cream py-12">
      <FadeInSection>
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <p className="text-center text-xs font-medium uppercase tracking-wider text-ink-300">
            Built for businesses like yours
          </p>

          <div className="mt-6 space-y-2 overflow-hidden">
            <div className="marquee-pause marquee-left flex w-max gap-6">
              {repeated.map((item, i) => (
                <span
                  key={`row1-${item}-${i}`}
                  className="rounded-full bg-white px-4 py-1.5 text-sm font-medium text-ink shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="marquee-pause marquee-right flex w-max justify-end gap-6">
              {repeated.map((item, i) => (
                <span
                  key={`row2-${item}-${i}`}
                  className="rounded-full bg-[#e9ece6] px-4 py-1.5 text-sm font-medium text-ink-300 shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
