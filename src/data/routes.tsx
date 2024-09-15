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
    route: "/pricing",
  },
];
