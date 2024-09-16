import { DashboardRoutes, RouteIconsType } from "@/data/routes";
import { Link, useLocation } from "react-router-dom";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { cn } from "@/lib/utils";
import { Clapperboard, Settings } from "lucide-react";

const SidebarIcons = ({ name, icon, route }: RouteIconsType) => {
  const location = useLocation();

  const sameRoute = location.pathname === route;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link to={route}>
          <div
            className={cn(
              "p-2 hover:cursor-pointer hover:text-black rounded-md",
              "text-muted-foreground",
              sameRoute && "bg-muted hover:bg-muted-foreground/20 text-black"
            )}
          >
            {icon}
          </div>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right">
        <p>{name}</p>
      </TooltipContent>
    </Tooltip>
  );
};

const DashboardSidebar = () => {
  return (
    <nav className="flex flex-col items-center p-2 justify-between h-full">
      <div className="flex flex-col gap-2 items-center">
        <Link to="/">
          <div className="group bg-primary rounded-full p-2 text-white mb-2 hover:cursor-pointer">
            <Clapperboard className="group-hover:scale-110 transition ease-in-out -rotate-12" />
          </div>
        </Link>
        {DashboardRoutes.map((r, idx) => (
          <SidebarIcons {...r} key={idx} />
        ))}
      </div>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            className={cn(
              "p-2 hover:cursor-pointer hover:text-black rounded-md",
              "text-muted-foreground"
            )}
          >
            <Settings />
          </div>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>Settings</p>
        </TooltipContent>
      </Tooltip>
    </nav>
  );
};

export default DashboardSidebar;
