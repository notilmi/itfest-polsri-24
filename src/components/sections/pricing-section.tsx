import { PricingSchema } from "@/lib/types";
import PricingCard from "../pricing-card";

const pricing: PricingSchema = {
  feature: [
    "Peformance Analysis",
    "Endorsement Management Dashboard",
    "Influencer News Letter",
    "Our Event Membership Card",
  ],
  harga: "2.500.000",
  type: "Lifetime",
  currency: "Rp",
};

const PricingSection = () => {
  return (
    <div className="py-24 md:py-32 lg:py-48 max-w-screen-lg mx-auto">
      <div className="flex flex-col gap-2 mb-8">
        <h2 className="text-5xl font-bold text-center">
          Dibuat Khusus Untukmu!
        </h2>
        <p className="text-xl text-center text-neutral-600">
          Kami Menawarkan Fitur Yang Memudahkanmu Dalam Menjalankan Kampanye
          Endorsement
        </p>
      </div>
      <PricingCard className="mt-4" {...pricing} />
    </div>
  );
};

export default PricingSection;
