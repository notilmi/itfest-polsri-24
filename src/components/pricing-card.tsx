import { PricingSchema } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { DoorOpen, Ghost } from "lucide-react";

const PricingCard = ({
  currency,
  feature,
  harga,
  type,
  className,
}: PricingSchema & { className: string }) => {
  return (
    <div className="flex flex-wrap flex-row-reverse items-center justify-center bg-gray-100 rounded-xl shadow-lg hover:scale-105 cursor-pointer border transition-transform">
      <div className={cn("mx-auto w-1/2  p-8", className)}>
        <h2 className="text-2xl font-bold mb-4">{type}</h2>

        <p className="text-5xl font-extrabold mb-2">
          {currency}{harga}/mo
        </p>
        <p className="text-neutral-800">Fixed price<br />No minimum commitment.<br />Pause or cancel anytime.</p>
        
        <ul className="mt-4 space-y-2">
          {feature.map((item, index) => (
            <li key={index} className="flex items-center space-x-2 text-neutral-800">
              <span className="text-red-500">✔</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex space-x-4">
            <Button variant={"default"}>
              Get Started
            </Button>
            <Button variant={"link"}>
              Book a Call
            </Button>
        </div>
      </div>
      <div className="overflow-hidden w-1/2 ">
        <img src="/pricing-img.png" alt="Gambar" />
      </div>
    </div>
  );
};

export default PricingCard;
