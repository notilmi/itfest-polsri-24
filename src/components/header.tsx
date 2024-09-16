import { LandingRoutes } from "@/data/routes";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import GoToDashboardButton from "./go-to-dashboad-button";
import React from "react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import LandingSidebarSheet from "./landing-sidebar-sheet";

const Header = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <header className="w-full fixed top-2 px-2 z-50 ">
      <div
        className={cn(
          "max-w-screen-md mx-auto p-2 rounded-full",
          "flex flex-row justify-between",
          "bg-white backdrop-blur-md border"
        )}
      >
        <div className="flex flex-row items-center gap-1">
          <img
            src="/influencify-squared.svg"
            className="rounded-full size-10"
          />
          <h1 className="text-2xl font-bold">Influencify.</h1>
        </div>
        <div className="hidden lg:flex flex-row gap-4 text-muted-foreground items-center">
          {LandingRoutes.map((r, idx) => (
            <Link to={r.route} key={idx} className="hover:text-black">
              {r.name}
            </Link>
          ))}
        </div>
        <GoToDashboardButton className="hidden lg:flex" isRounded />
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="flex lg:hidden rounded-full"
            >
              <Menu className="size-6" />
            </Button>
          </SheetTrigger>
          <VisuallyHidden>
            <SheetTitle>Influencify</SheetTitle>
          </VisuallyHidden>
          <SheetContent side="right" className="sm:max-w-xs">
            <LandingSidebarSheet onOpenChange={setOpen} />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
