import { ChartLine, Gauge, UserPlus } from "lucide-react";

export type RouteIconsType = {
  icon: React.ReactNode;
  name: string;
  route: string;
};

export type RouteType = {
  name: string;
  route: string;
};

export const LandingRoutes: RouteType[] = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "About Us",
    route: "#about-us",
  },
  {
    name: "Pricing",
    route: "#pricing",
  },
];

export const DashboardRoutes: RouteIconsType[] = [
  {
    name: "Dashboard",
    route: "/dashboard",
    icon: <Gauge />,
  },

  {
    name: "Sewa Influencer",
    route: "/dashboard/hire",
    icon: <UserPlus />,
  },
  {
    name: "Analisis",
    route: "/dashboard/analytics",
    icon: <ChartLine />,
  },
];
