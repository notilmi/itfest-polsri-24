export type PricingSchema = {
  type: "Bulanan" | "Tahunan" | "Lifetime";
  harga: string;
  feature: string[];
  currency: string;
};
