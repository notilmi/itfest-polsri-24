import { PricingSchema } from "@/lib/types";
import { cn } from "@/lib/utils";

const PricingCard = ({
  currency,
  feature,
  harga,
  type,
  className,
}: PricingSchema & { className: string }) => {
  return <div className={cn("", className)}>PricingCard</div>;
};

export default PricingCard;
