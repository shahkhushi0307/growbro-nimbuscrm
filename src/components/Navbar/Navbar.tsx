"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { megaMenuGroups, navLinks } from "@/data/content";
import Button from "@/components/ui/Button";

const menuItem = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" as const },
  },
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMenu(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      onMouseLeave={() => setOpenMenu(null)}
      className="fixed inset-x-0 top-0 z-50 border-b border-lighter-green-black bg-white"
    >
      <nav
        className="container-x flex items-center justify-between"
        style={{ minHeight: "4.125rem" }}
      >
        <a href="#top" className="text-xl font-semibold tracking-tight text-ink">
          Nimbus<span className="text-emerald">CRM</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {megaMenuGroups.map((group) => (
            <div key={group.title} className="relative">
              <button
                type="button"
                onMouseEnter={() => setOpenMenu(group.title)}
                onClick={() =>
                  setOpenMenu((cur) => (cur === group.title ? null : group.title))
                }
                className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[15px] font-medium transition-colors duration-200 ${
                  openMenu === group.title
                    ? "text-ink"
                    : "text-dark-green-black hover:text-ink"
                }`}
              >
                {group.title}
                <ChevronDown
                  size={15}
                  className={`text-emerald transition-transform duration-200 ${
                    openMenu === group.title ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openMenu === group.title && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    onMouseEnter={() => setOpenMenu(group.title)}
                    className="absolute left-0 top-full hidden w-[560px] rounded-[21px] border border-lighter-green-black bg-white p-3 shadow-[0_58px_35px_rgba(0,0,0,0.08)] lg:block"
                  >
                    <div className="grid gap-1">
                      {group.items.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          onClick={() => setOpenMenu(null)}
                          className="group/item flex items-start gap-3 rounded-2xl px-3 py-2.5 transition-colors duration-150 hover:bg-almost-white"
                        >
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-lightest text-emerald">
                            <item.icon size={17} />
                          </span>
                          <span>
                            <span className="block text-[15px] font-medium text-ink group-hover/item:text-emerald">
                              {item.label}
                            </span>
                            <span className="block text-[13px] text-green-black">
                              {item.description}
                            </span>
                          </span>
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          {navLinks
            .filter((l) => l.label === "Pricing")
            .map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full px-4 py-2 text-[15px] font-medium text-dark-green-black transition-colors duration-200 hover:text-ink"
              >
                {link.label}
              </a>
            ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="#pricing" variant="dark" small>
            Start Free Trial
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-almost-white lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-[4.125rem] z-40 bg-white lg:hidden"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.06 } },
              }}
              className="flex h-full flex-col gap-1 overflow-y-auto px-6 pt-6"
            >
              {megaMenuGroups.map((group) => (
                <div key={group.title}>
                  <motion.p
                    variants={menuItem}
                    className="px-1 pt-3 text-xs font-semibold uppercase tracking-wider text-emerald"
                  >
                    {group.title}
                  </motion.p>
                  {group.items.map((item) => (
                    <motion.a
                      key={item.label}
                      variants={menuItem}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 border-b border-lighter-green-black py-3.5 text-lg font-medium text-ink"
                    >
                      <item.icon size={18} className="text-emerald" />
                      {item.label}
                    </motion.a>
                  ))}
                </div>
              ))}
              <motion.a
                variants={menuItem}
                href="#pricing"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 py-3.5 text-lg font-medium text-ink"
              >
                Pricing
              </motion.a>
              <motion.div variants={menuItem} className="mt-6 pb-10">
                <Button
                  href="#pricing"
                  variant="emerald"
                  full
                  onClick={() => setOpen(false)}
                >
                  Start Free Trial
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
