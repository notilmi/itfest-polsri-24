import { PricingSchema } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const PricingCard = ({
  currency,
  feature,
  harga,
  type,
  className,
}: PricingSchema & { className: string }) => {
  return (
    <div className="flex flex-wrap flex-row-reverse items-center justify-center  rounded-xl border">
      <div className={cn("mx-auto w-1/2  p-8", className)}>
        <h2 className="text-2xl font-bold mb-4">{type}</h2>

        <p className="text-5xl font-extrabold mb-2">
          {currency}
          {harga}
        </p>

        <ul className="mt-4 space-y-2">
          {feature.map((item, index) => (
            <li
              key={index}
              className="flex items-center space-x-2 text-neutral-800"
            >
              <span className="text-red-500">✔</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex space-x-4">
          <Button variant={"default"}>Get Started</Button>
          <Button variant={"secondary"}>Book a Call</Button>
        </div>
      </div>
      <div className="overflow-hidden w-1/2 ">
        <img src="/pricing-img.png" alt="Gambar" />
      </div>
    </div>
  );
};

export default PricingCard;
