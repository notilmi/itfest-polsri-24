import { FeaturesSection } from "@/components/sections/feature-section";
import FindInfluencerSection from "@/components/sections/find-influencer";
import HeroSection from "@/components/sections/hero";
import PricingSection from "@/components/sections/pricing-section";

const LandingPage = () => {
  return (
    <div className="flex flex-col gap-2">
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <FindInfluencerSection />
    </div>
  );
};

export default LandingPage;
