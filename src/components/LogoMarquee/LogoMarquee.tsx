import { industries } from "@/data/content";

export default function LogoMarquee() {
  return (
    <section className="overflow-hidden bg-white py-10">
      <div className="container-x">
        <p className="text-center text-[13px] font-medium uppercase tracking-[0.08em] text-light-green-black">
          Built for businesses like yours
        </p>
      </div>

      <div className="relative mt-10">
        <div className="marquee" aria-hidden>
          <div className="marquee-scrim" />
          <div className="marquee-scrim is-right" />
          <div className="marquee-track">
            {[...industries, ...industries].map(
              ({ name, icon: Icon }, i) => (
                <span
                  key={`${name}-${i}`}
                  className="flex items-center gap-2.5 whitespace-nowrap text-lg font-semibold text-green-black"
                >
                  <Icon size={20} className="text-emerald" />
                  {name}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
