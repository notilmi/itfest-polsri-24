import DashboardHeader from "@/components/dashboard-header";
import DashboardSidebar from "@/components/dashboard-sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <TooltipProvider delayDuration={0}>
      <div className="min-h-screen antialiased flex flex-col bg-muted/40">
        <aside className="fixed inset-y-0 left-0 z-30 hidden w-14 flex-col border-r bg-background md:flex">
          <DashboardSidebar />
        </aside>
        <main className="flex flex-col ml-0 md:ml-14 min-h-screen p-4">
          <div className="flex flex-col gap-4 max-w-screen-lg w-full mx-auto">
            <DashboardHeader />
            <Outlet />
          </div>
        </main>
      </div>
    </TooltipProvider>
  );
};

export default DashboardLayout;
