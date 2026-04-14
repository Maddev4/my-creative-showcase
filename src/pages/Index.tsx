import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HealthcareSaaSSection from "@/components/HealthcareSaaSSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

/** Landing page composition. */
const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <HealthcareSaaSSection />
    <SkillsSection />
    <ExperienceSection />
    <PortfolioSection />
    <ContactSection />
    <FooterSection />
  </div>
);

export default Index;
