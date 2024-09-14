import { cn } from "@/lib/utils";

const Header = () => {
  return (
    <div
      className={cn(
        "flex flex-row justify-between",
        "p-4",
        "bg-primary text-primary-foreground rounded-lg"
      )}
    >
      Header
    </div>
  );
};

export default Header;
