import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import LogoMarquee from "@/components/LogoMarquee/LogoMarquee";
import Features from "@/components/Features/Features";
import StatBlock from "@/components/StatBlock/StatBlock";
import Testimonials from "@/components/Testimonials/Testimonials";
import CaseStudies from "@/components/CaseStudies/CaseStudies";
import TalentShowcase from "@/components/TalentShowcase/TalentShowcase";
import Pricing from "@/components/Pricing/Pricing";
import Insights from "@/components/Insights/Insights";
import ClosingCTA from "@/components/ClosingCTA/ClosingCTA";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoMarquee />
        <Features />
        <StatBlock />
        <Testimonials />
        <CaseStudies />
        <TalentShowcase />
        <Pricing />
        <Insights />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
}
