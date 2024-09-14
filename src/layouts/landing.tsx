import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const LandingLayout = () => {
  return (
    <div className="min-h-screen antialiased flex flex-col">
      <Header />
      <Outlet />
    </div>
  );
};

export default LandingLayout;
