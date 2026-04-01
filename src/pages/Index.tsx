import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import SolutionSection from "@/components/SolutionSection";
import FeaturesSection from "@/components/FeaturesSection";
import ModulesCarousel from "@/components/ModulesCarousel";
import TestimonialsSection from "@/components/TestimonialsSection";
import BonusSection from "@/components/BonusSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import FooterCTA from "@/components/FooterCTA";
import SocialProofPopup from "@/components/SocialProofPopup";

const Index = () => {
  return (
    <div className="gradient-bg min-h-screen relative">
      <SocialProofPopup />
      <Navbar />
      <HeroSection />
      <PainSection />
      <SolutionSection />
      <FeaturesSection />
      <ModulesCarousel />
      <TestimonialsSection />
      <BonusSection />
      <PricingSection />
      <FAQSection />
      <FooterCTA />
    </div>
  );
};

export default Index;
