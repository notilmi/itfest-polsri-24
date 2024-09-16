import React from "react";
import { Menu, User } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import MobileSidebarSheet from "./mobile-sidebar-sheet";

const DashboardHeader = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <div className="flex flex-row items-center gap-2 justify-between bg-white rounded-lg p-4 border">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="flex lg:hidden">
            <Menu className="size-4" />
          </Button>
        </SheetTrigger>
        <VisuallyHidden>
          <SheetTitle>Influencify</SheetTitle>
        </VisuallyHidden>
        <SheetContent side="left" className="sm:max-w-xs">
          <MobileSidebarSheet onOpenChange={setOpen} />
        </SheetContent>
      </Sheet>
      <div className="flex-row hidden lg:flex items-center gap-2">
        <img src="/influencify-squared.svg" className="size-10 rounded-full" />
        <h2 className="text-xl font-bold">Influencify</h2>
      </div>
      <div className="flex items-center gap-2">
        <Input placeholder="Cari Sesuatu..." />
        <Avatar>
          <AvatarFallback>
            <User />
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default DashboardHeader;
