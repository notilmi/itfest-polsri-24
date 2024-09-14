import { cn } from "@/lib/utils";
import React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Link, useLocation } from "react-router-dom";
import { AppRoutesIcon } from "@/datas/routes";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const SidebarIconRoutes: React.FC<{
  icon: React.ReactNode;
  name: string;
  route: string;
}> = ({ icon, name, route }) => {
  const location = useLocation();
  const isCurrentRoute = location.pathname === route;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          to={route}
          className={cn(
            "p-2 text-black rounded-lg",
            "hover:bg-muted-foreground/20 hover:cursor-pointer",
            isCurrentRoute && "bg-red-500 text-white hover:bg-red-600"
          )}
        >
          {icon}
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right">
        <p>{name}</p>
      </TooltipContent>
    </Tooltip>
  );
};

const Sidebar: React.FC<{ className: string }> = ({ className }) => {
  return (
    <div
      className={cn(
        "h-screen bg-slate-50 border-r flex flex-col justify-between p-2",
        className
      )}
    >
      <div aria-label="pages" className="flex flex-col gap-2">
        {AppRoutesIcon.map((route, idx) => (
          <SidebarIconRoutes {...route} key={idx} />
        ))}
      </div>
      <Tooltip>
        <TooltipTrigger asChild>
          <Avatar>
            <AvatarImage src={"https://ui.shadcn.com/avatars/02.png"} />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </TooltipTrigger>
        <TooltipContent side="right">
          <div className="flex flex-col">
            <p className="font-semibold text-base">Yanto Pedro</p>
            <p className="text-sm">yantopedro@polsri.ac.id</p>
          </div>
        </TooltipContent>
      </Tooltip>
    </div>
  );
};

export default Sidebar;
