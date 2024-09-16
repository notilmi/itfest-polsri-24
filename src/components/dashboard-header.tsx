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
  console.log("setOpen", open);

  return (
    <div className="flex flex-row lg:flex-row-reverse items-center justify-between bg-white rounded-lg p-4 border">
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
