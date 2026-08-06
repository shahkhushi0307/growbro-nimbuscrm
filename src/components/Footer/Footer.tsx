import { footerColumns } from "@/data/content";

const socials = [
  {
    label: "LinkedIn",
    href: "#",
    path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9.5h4V11a6 6 0 0 1 2-3zM6 9.5H2V21h4zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
  },
  {
    label: "X",
    href: "#",
    path: "M4 4l16 16M20 4L4 20",
  },
  {
    label: "Instagram",
    href: "#",
    path: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zM16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01",
  },
];

export default function Footer() {
  return (
    <footer className="bg-kale-darker text-white">
      <div className="container-x py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" className="text-xl font-semibold tracking-tight text-white">
              Nimbus<span className="text-emerald-light">CRM</span>
            </a>
            <p className="mt-5 max-w-xs text-[15px] text-light-green-black">
              The CRM built for small business owners who live on WhatsApp.
            </p>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h4 className="font-sans text-sm font-medium text-light-green-black">
                {column.title}
              </h4>
              <ul className="mt-5 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[15px] text-white/80 transition-colors duration-200 hover:text-emerald-light"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-10 sm:flex-row">
          <p className="text-sm text-light-green-black">
            © 2026 NimbusCRM. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socials.map(({ label, href, path }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-light-green-black transition-colors duration-200 hover:border-emerald-light/50 hover:text-emerald-light"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d={path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
