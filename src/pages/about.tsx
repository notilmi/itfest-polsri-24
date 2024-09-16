import {AboutUsSection} from "@/components/sections/about-us";
import ContactSection from "@/components/sections/contact";

const AboutPage = () => {
  return (
    <div className="flex flex-col gap-2">
      <AboutUsSection />
      <ContactSection />
    </div>
  );
};

export default AboutPage;
