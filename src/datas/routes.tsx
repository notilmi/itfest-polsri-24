import {
  CalendarDays,
  Home,
  LayoutDashboard,
  Users,
  UserSearch,
} from "lucide-react";

export type RouteIconsType = {
  icon: React.ReactNode;
  name: string;
  route: string;
};

export const AppRoutesIcon: RouteIconsType[] = [
  {
    icon: <Home />,
    name: "Home",
    route: "/",
  },
  {
    icon: <Users />,
    name: "Tentang Kami",
    route: "/about-us",
  },
  {
    icon: <CalendarDays />,
    name: "Events",
    route: "/event",
  },
  {
    icon: <UserSearch />,
    name: "Cari Influencer",
    route: "/hire",
  },
  {
    icon: <LayoutDashboard />,
    name: "Dasbor",
    route: "/dashboard",
  },
];
