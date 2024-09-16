import { DashboardRoutes, RouteIconsType } from "@/data/routes";
import { cn } from "@/lib/utils";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const SheetRouteItems: React.FC<RouteIconsType & { onClick: Function }> = ({
  icon,
  name,
  route,
  onClick,
}) => {
  const location = useLocation();
  const sameRoute = location.pathname === route;

  return (
    <Link to={route} onClick={() => onClick()}>
      <div
        className={cn(
          "flex flex-row gap-2",
          sameRoute ? "text-black" : "text-muted-foreground"
        )}
      >
        {icon}
        <p>{name}</p>
      </div>
    </Link>
  );
};

const MobileSidebarSheet: React.FC<{
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ onOpenChange }) => {
  return (
    <>
      <div className="flex flex-row gap-2 items-center">
        <img src="/influencify-squared.svg" className="size-6 rounded-full" />
        <p className="text-xl font-bold">Influencify</p>
      </div>
      <nav className="flex flex-col gap-4 mt-8 text-lg font-medium">
        {DashboardRoutes.map((r, idx) => (
          <SheetRouteItems
            key={idx}
            onClick={() => onOpenChange(false)}
            {...r}
          />
        ))}
      </nav>
    </>
  );
};

export default MobileSidebarSheet;
