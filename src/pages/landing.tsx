import FAQSection from "@/components/sections/faq-section";
import { FeaturesSection } from "@/components/sections/feature-section";
import FindInfluencerSection from "@/components/sections/find-influencer";
import HeroSection from "@/components/sections/hero";
import PricingSection from "@/components/sections/pricing-section";
import TestimonialSection from "@/components/sections/testimonial-section";

const LandingPage = () => {
  return (
    <div className="flex flex-col gap-2">
      <HeroSection />
      <FeaturesSection />
      <FindInfluencerSection />
      <PricingSection />
      <TestimonialSection />
      <FAQSection />
    </div>
  );
};

export default LandingPage;
