import { FeaturesSection } from "@/components/sections/feature-section";
import FindInfluencerSection from "@/components/sections/find-influencer";
import HeroSection from "@/components/sections/hero";

const LandingPage = () => {
  return (
    <div className="flex flex-col gap-2">
      <HeroSection />
      <FindInfluencerSection />
      <FeaturesSection />
    </div>
  );
};

export default LandingPage;
