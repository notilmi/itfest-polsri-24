import { Outlet } from "react-router-dom";

const LandingLayout = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Outlet />
    </div>
  );
};

export default LandingLayout;
