import { Gauge } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

type GoToDashboardButtonProps = {
  isRounded?: boolean;
  className?: string;
};

const GoToDashboardButton: React.FC<GoToDashboardButtonProps> = ({
  isRounded,
  className,
}) => {
  return (
    <Link to="/dashboard">
      <Button className={cn(isRounded && "rounded-full", className)}>
        <Gauge className="size-4 mr-2" />
        Pergi Ke-Dashboard
      </Button>
    </Link>
  );
};

export default GoToDashboardButton;
