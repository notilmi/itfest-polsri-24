import { PricingSchema } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar, Handshake } from "lucide-react";

const PricingCard = ({
  currency,
  feature,
  harga,
  type,
  className,
}: PricingSchema & { className: string }) => {
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row flex-wrap items-center justify-center rounded-xl border",
        className
      )}
    >
      <div className={cn("mx-auto w-full md:w-1/2 p-8")}>
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

        <div className="mt-6 flex flex-col md:flex-row gap-2">
          <Button variant={"default"}>
            Mulai Bekerja Sama <Handshake className="ml-2 size-4" />
          </Button>
          <Button variant={"secondary"}>
            Jadwalkan Demo <Calendar className="ml-2 size-4" />
          </Button>
        </div>
      </div>
      <div className="overflow-hidden w-full md:w-1/2 ">
        <img src="/pricing-img.png" alt="Gambar" />
      </div>
    </div>
  );
};

export default PricingCard;
