<<<<<<< Updated upstream
=======
import Footer from "@/components/footer";
import Header from "@/components/header";
>>>>>>> Stashed changes
import { Outlet } from "react-router-dom";

const LandingLayout = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Outlet />
      <Footer />
    </div>
  );
};

export default LandingLayout;
