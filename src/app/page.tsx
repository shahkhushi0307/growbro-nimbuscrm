import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import Testimonials from "@/components/Testimonials";
import Features from "@/components/Features";
import StatBlock from "@/components/StatBlock";
import PartnerStrip from "@/components/PartnerStrip";
import Pricing from "@/components/Pricing";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <LogoMarquee />
      <Testimonials />
      <Features />
      <StatBlock />
      <PartnerStrip />
      <Pricing />
      <ClosingCTA />
      <Footer />
    </>
  );
}
