"use client";

import { FadeInSection, CountUp } from "@/components/FadeIn";

interface StatProps {
  to: number;
  suffix?: string;
  decimals?: number;
  label: string;
}

function Stat({ to, suffix, decimals, label }: StatProps) {
  return (
    <div className="flex flex-col gap-1">
      <div className="text-4xl font-extrabold text-brand md:text-5xl">
        <CountUp to={to} suffix={suffix} decimals={decimals} />
      </div>
      <p className="text-sm text-smoke-300">{label}</p>
    </div>
  );
}

export default function StatBlock() {
  return (
    <section className="bg-charcoal py-12 md:py-20">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-6 text-center md:grid-cols-3 md:px-8">
        <FadeInSection>
          <Stat to={500} suffix="+" label="Active Businesses" />
        </FadeInSection>
        <FadeInSection delay={0.1}>
          <Stat to={10} suffix="M+" label="Messages Tracked" />
        </FadeInSection>
        <FadeInSection delay={0.2}>
          <Stat to={4.9} decimals={1} suffix="/5" label="Average Rating" />
        </FadeInSection>
      </div>
    </section>
  );
}
