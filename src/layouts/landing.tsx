import Sidebar from "@/components/sidebar";
import { Outlet } from "react-router-dom";

const LandingLayout = () => {
  return (
    <div className="min-h-screen antialiased flex flex-row">
      <div className="hidden md:flex">
        <Sidebar className="relative" />
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default LandingLayout;
