"use client";

import { Check } from "lucide-react";
import { FadeInSection } from "@/components/FadeIn";

interface Partner {
  name: string;
  sub: string;
  meta?: boolean;
}

const partners: Partner[] = [
  {
    name: "Meta Business Partner",
    sub: "WhatsApp · Instagram · Messenger",
    meta: true,
  },
  { name: "Payments Partner", sub: "Secure in-chat payments" },
  { name: "CRM Sync", sub: "Works with your existing tools" },
];

export default function PartnerStrip() {
  return (
    <section className="bg-cream py-12 md:py-20">
      <FadeInSection>
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <p className="text-center text-xs font-medium uppercase tracking-wider text-ink-300">
            Built on the platforms your customers already trust
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {partners.map((p, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-2 rounded-full border border-ink-300/15 bg-white px-4 py-2 text-sm font-medium text-ink shadow-sm"
              >
                {p.meta && <span className="h-2.5 w-2.5 rounded-full bg-[#0862d7]" />}
                <Check className="h-4 w-4 text-brand" />
                <span className="font-semibold">Verified</span>
                <span className="text-ink-300/60">—</span>
                <span className="text-ink-300">{p.name}</span>
                <span className="text-ink-300/60">· {p.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
