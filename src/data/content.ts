import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Briefcase,
  Building2,
  CreditCard,
  Dumbbell,
  Flame,
  GraduationCap,
  Inbox,
  MessageCircle,
  Music,
  Newspaper,
  Plug,
  Scissors,
  Send,
  ShoppingBag,
  Star,
  Target,
  UtensilsCrossed,
} from "lucide-react";

export const navLinks = [
  { label: "Product", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export type Industry = {
  name: string;
  icon: LucideIcon;
};

export const industries: Industry[] = [
  { name: "Restaurants", icon: UtensilsCrossed },
  { name: "Real Estate", icon: Building2 },
  { name: "Salons", icon: Scissors },
  { name: "Fitness", icon: Dumbbell },
  { name: "Education", icon: GraduationCap },
  { name: "Boutiques", icon: ShoppingBag },
  { name: "Studios", icon: Music },
  { name: "Coaching", icon: Target },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote: "NimbusCRM cut our response time from hours to minutes.",
    name: "Rohit S.",
    role: "Founder, Craftline Furniture",
  },
  {
    quote: "We finally stopped losing leads in random WhatsApp chats.",
    name: "Anita K.",
    role: "Anita's Bakehouse",
  },
  {
    quote: "The smart replies alone save my team hours every single week.",
    name: "Vikram M.",
    role: "Owner, UrbanGym",
  },
];

export type StoryCard = {
  eyebrow: string;
  icon: LucideIcon;
  title: string;
  description: string;
  bullets: string[];
};

export const storyCards: StoryCard[] = [
  {
    eyebrow: "Unified Inbox",
    icon: Inbox,
    title: "Every chat. One thread. No tab-switching.",
    description:
      "WhatsApp, Instagram, and email conversations land in a single inbox — one thread per customer, so your team always has the full picture.",
    bullets: [
      "One thread per customer across channels",
      "Shared team inbox with assigned owners",
      "No more leads lost in personal phones",
    ],
  },
  {
    eyebrow: "Smart Lead Scoring",
    icon: Flame,
    title: "Know exactly who to call first.",
    description:
      "NimbusCRM reads intent and urgency from every conversation, flagging your hottest leads before they go cold.",
    bullets: [
      "Auto-tagged by intent and urgency",
      "Heat scores on every conversation",
      "Never guess who to follow up with",
    ],
  },
  {
    eyebrow: "AI Follow-Ups",
    icon: Send,
    title: "Follow-ups on autopilot.",
    description:
      "Pre-built, on-brand reply templates send in one tap — with smart nudges for customers who went quiet.",
    bullets: [
      "One-tap personalized replies",
      "Auto-reminders for stalled conversations",
      "Wins back leads you'd have lost",
    ],
  },
];

export type Stat = {
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
};

export const stats: Stat[] = [
  { value: 500, suffix: "+", label: "Active Businesses" },
  { value: 10, suffix: "M+", label: "Messages Tracked" },
  { value: 4.9, suffix: "/5", label: "Average Rating", decimals: 1 },
];

export type Partner = {
  icon: LucideIcon;
  title: string;
  detail: string;
};

export const partners: Partner[] = [
  {
    icon: MessageCircle,
    title: "Meta Business Partner",
    detail: "WhatsApp · Instagram · Messenger",
  },
  {
    icon: CreditCard,
    title: "Payments Partner",
    detail: "Secure in-chat payments",
  },
  {
    icon: Plug,
    title: "CRM Sync",
    detail: "Works with your existing tools",
  },
];

export type Plan = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

export const plans: Plan[] = [
  {
    name: "Starter",
    price: "₹1,999",
    period: "/mo",
    description: "For solo founders getting organized",
    features: [
      "Up to 500 leads / month",
      "1 user",
      "Unified inbox & follow-ups",
    ],
    cta: "Start Free Trial",
  },
  {
    name: "Growth",
    price: "₹4,999",
    period: "/mo",
    description: "For teams that live on WhatsApp",
    features: [
      "Up to 5,000 leads / month",
      "5 users",
      "WhatsApp automation",
      "Smart lead scoring",
    ],
    cta: "Start Free Trial",
    featured: true,
  },
  {
    name: "Pro",
    price: "₹9,999",
    period: "/mo",
    description: "For businesses scaling fast",
    features: [
      "Unlimited leads",
      "Unlimited users",
      "Priority support",
      "Real-time analytics",
    ],
    cta: "Start Free Trial",
  },
];

export type FooterColumn = {
  title: string;
  links: { label: string; href: string }[];
};

export const footerColumns: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
];

export type MegaMenuItem = {
  icon: LucideIcon;
  label: string;
  description: string;
  href: string;
};

export type MegaMenuGroup = {
  title: string;
  items: MegaMenuItem[];
};

export const megaMenuGroups: MegaMenuGroup[] = [
  {
    title: "Product",
    items: [
      {
        icon: Inbox,
        label: "Unified Inbox",
        description: "Every chat, one thread per customer",
        href: "#features",
      },
      {
        icon: Flame,
        label: "Smart Lead Scoring",
        description: "Auto-flags your hottest leads",
        href: "#features",
      },
      {
        icon: Send,
        label: "One-Click Follow-Ups",
        description: "Pre-built templates, sent in a tap",
        href: "#features",
      },
      {
        icon: BarChart3,
        label: "Real-Time Analytics",
        description: "See what's converting, live",
        href: "#features",
      },
    ],
  },
  {
    title: "Solutions",
    items: [
      {
        icon: UtensilsCrossed,
        label: "Restaurants",
        description: "Reservations & order leads",
        href: "#pricing",
      },
      {
        icon: Scissors,
        label: "Salons & Studios",
        description: "Bookings without the back-and-forth",
        href: "#pricing",
      },
      {
        icon: Dumbbell,
        label: "Fitness & Coaching",
        description: "Membership follow-ups on autopilot",
        href: "#pricing",
      },
      {
        icon: ShoppingBag,
        label: "Boutiques",
        description: "Product inquiries that close",
        href: "#pricing",
      },
    ],
  },
  {
    title: "Company",
    items: [
      {
        icon: Star,
        label: "Testimonials",
        description: "What small business owners say",
        href: "#testimonials",
      },
      {
        icon: Briefcase,
        label: "Case Studies",
        description: "Real results from real teams",
        href: "#case-studies",
      },
      {
        icon: Newspaper,
        label: "Insights",
        description: "Guides for selling on WhatsApp",
        href: "#insights",
      },
      {
        icon: CreditCard,
        label: "Pricing",
        description: "Simple plans, no surprises",
        href: "#pricing",
      },
    ],
  },
];

export type CaseStudy = {
  name: string;
  industry: string;
  headline: string;
  description: string;
  statValue: string;
  statLabel: string;
  featured?: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    name: "Craftline Furniture",
    industry: "Home & Living",
    headline: "From one WhatsApp number to a 3-agent inbox",
    description:
      "Craftline was juggling orders across one personal phone number. NimbusCRM gave their team a shared inbox with lead scoring — and they stopped replying to 'is this available?' a day late.",
    statValue: "3.2x",
    statLabel: "faster lead response",
    featured: true,
  },
  {
    name: "Anita's Bakehouse",
    industry: "Food & Beverage",
    headline: "Cake orders on WhatsApp, never left on read",
    description:
      "One-click follow-ups turned stalled WhatsApp conversations into confirmed orders.",
    statValue: "41%",
    statLabel: "more booked orders",
  },
  {
    name: "UrbanGym",
    industry: "Fitness",
    headline: "Memberships renewing without the nagging",
    description:
      "Automated reminders brought expiring members back — no spreadsheets, no missed calls.",
    statValue: "2.6x",
    statLabel: "renewal rate",
  },
];

export type Talent = {
  skill: string;
  name: string;
  role: string;
  formerly: string;
  initials: string;
};

export const talent: Talent[] = [
  {
    skill: "Doubled a salon's online bookings in 90 days",
    name: "Meera S.",
    role: "Owner, Studio Bloom",
    formerly: "Formerly 2-person shop on Instagram DMs",
    initials: "MS",
  },
  {
    skill: "Built WhatsApp automations that reply in seconds",
    name: "Arjun P.",
    role: "Founder, FitFuel Meals",
    formerly: "Formerly answering chats himself at 1am",
    initials: "AP",
  },
  {
    skill: "Turned a group chat into a sales pipeline",
    name: "Divya R.",
    role: "Head of Sales, PetCare Co.",
    formerly: "Formerly tracking leads in a notebook",
    initials: "DR",
  },
  {
    skill: "Recovered 200+ lost leads in one month",
    name: "Karan V.",
    role: "Growth Lead, Verde Plants",
    formerly: "Formerly follow-ups that never happened",
    initials: "KV",
  },
];

export type Post = {
  category: string;
  title: string;
  date: string;
  readTime: string;
};

export const posts: Post[] = [
  {
    category: "Playbooks",
    title: "The 5-minute WhatsApp follow-up that closes more sales",
    date: "Jul 28, 2026",
    readTime: "6 min read",
  },
  {
    category: "Product",
    title: "How smart lead scoring reads intent before your customers type",
    date: "Jul 15, 2026",
    readTime: "4 min read",
  },
  {
    category: "Guides",
    title: "WhatsApp Business API for small teams: a plain-English intro",
    date: "Jul 02, 2026",
    readTime: "8 min read",
  },
];
