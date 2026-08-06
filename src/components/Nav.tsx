"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navFade } from "@/lib/animations";

const navLinks = [
  { label: "Product", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navFade}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "bg-black/60 backdrop-blur-md border-white/8"
          : "border-transparent"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-8">
          <Link href="/" className="text-xl font-bold text-smoke">
            NimbusCRM
          </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-smoke transition-colors hover:text-brand"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="#demo"
            className="rounded-full border border-smoke/20 px-5 py-2 text-sm font-medium text-smoke transition-all hover:scale-105 hover:border-brand hover:text-brand"
          >
            Book a Demo
          </Link>
          <Link
            href="#demo"
            className="rounded-full bg-brand px-5 py-2 text-sm font-medium text-charcoal-850 transition-all hover:scale-105"
          >
            Start Free Trial
          </Link>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-smoke"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={`md:hidden border-t border-white/8 bg-charcoal/80 backdrop-blur-md transition-[max-height] duration-300 ${
          menuOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
        }`}
      >
        <nav className="flex flex-col gap-4 px-6 py-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-lg font-medium text-smoke transition-colors hover:text-brand"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-2">
            <Link
              href="#demo"
              onClick={() => setMenuOpen(false)}
              className="rounded-full border border-smoke/20 px-5 py-2 text-center text-sm font-medium text-smoke transition-all hover:scale-105 hover:border-brand hover:text-brand"
            >
              Book a Demo
            </Link>
            <Link
              href="#demo"
              onClick={() => setMenuOpen(false)}
              className="rounded-full bg-brand px-5 py-2 text-center text-sm font-medium text-charcoal-850 transition-all hover:scale-105"
            >
              Start Free Trial
            </Link>
          </div>
        </nav>
      </div>
    </motion.div>
    </motion.header>
  );
}
