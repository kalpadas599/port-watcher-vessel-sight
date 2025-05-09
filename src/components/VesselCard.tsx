
import { Vessel, VesselType } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Ship, Anchor, Route, Navigation } from "lucide-react";
import { cn } from "@/lib/utils";

interface VesselCardProps {
  vessel: Vessel;
  isSelected?: boolean;
  onClick?: () => void;
}

const getVesselStatusColor = (status: string): string => {
  switch (status) {
    case "Underway Using Engine":
      return "bg-green-500";
    case "At Anchor":
      return "bg-amber-500";
    case "Moored":
      return "bg-blue-500";
    case "Aground":
      return "bg-red-500";
    case "Restricted Maneuverability":
      return "bg-purple-500";
    case "Not Under Command":
      return "bg-red-500";
    case "Engaged in Fishing":
      return "bg-teal-500";
    default:
      return "bg-gray-500";
  }
};

const getVesselTypeIcon = (type: VesselType) => {
  switch (type) {
    case VesselType.CARGO:
      return <Ship className="h-4 w-4" />;
    case VesselType.TANKER:
      return <Ship className="h-4 w-4" />;
    case VesselType.PASSENGER:
      return <Ship className="h-4 w-4" />;
    case VesselType.FISHING:
      return <Anchor className="h-4 w-4" />;
    case VesselType.TUGBOAT:
      return <Anchor className="h-4 w-4" />;
    default:
      return <Ship className="h-4 w-4" />;
  }
};

const VesselCard = ({ vessel, isSelected = false, onClick }: VesselCardProps) => {
  const formatDate = (dateStr: string) => {
    if (!dateStr) return "N/A";
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "short",
      hour: "2-digit",
      minute: "2-digit"
    }).format(date);
  };

  const statusColor = getVesselStatusColor(vessel.status);
  const vesselIcon = getVesselTypeIcon(vessel.type);

  return (
    <Card 
      className={cn(
        "transition-all border hover:border-secondary cursor-pointer", 
        isSelected ? "border-primary bg-accent shadow-md" : ""
      )}
      onClick={onClick}
    >
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold">{vessel.name}</h3>
              <Badge variant="outline" className="flex gap-1 items-center">
                {vesselIcon}
                {vessel.type}
              </Badge>
            </div>
            
            <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
              <div className={cn("w-2 h-2 rounded-full", statusColor)}></div>
              <span>{vessel.status}</span>
            </div>
          </div>
          
          <div className="text-right">
            <div className="text-xs text-muted-foreground">
              {vessel.flag}
            </div>
            <div className="text-xs font-mono mt-1">
              {vessel.mmsi}
            </div>
          </div>
        </div>
        
        <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-center gap-1">
            <Navigation className="h-3 w-3 text-muted-foreground" />
            <span>{vessel.speed > 0 ? `${vessel.speed} kn` : "Stopped"}</span>
          </div>
          <div className="flex items-center gap-1">
            <Route className="h-3 w-3 text-muted-foreground" />
            <span>{vessel.destination || "N/A"}</span>
          </div>
        </div>
        
        {vessel.eta && (
          <div className="mt-2 text-xs">
            <span className="text-muted-foreground">ETA:</span> {formatDate(vessel.eta)}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default VesselCard;
