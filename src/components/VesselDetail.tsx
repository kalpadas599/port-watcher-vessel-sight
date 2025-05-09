
import { Vessel } from "@/lib/types";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Ship,
  Flag,
  Navigation,
  Compass,
  MapPin,
  Clock,
  Target,
  Ruler,
  Route,
} from "lucide-react";

interface VesselDetailProps {
  vessel: Vessel;
}

const VesselDetail = ({ vessel }: VesselDetailProps) => {
  const formatDate = (dateStr: string) => {
    if (!dateStr) return "N/A";
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  const formatCoordinates = (lat: number, lng: number) => {
    const latDir = lat >= 0 ? "N" : "S";
    const lngDir = lng >= 0 ? "E" : "W";
    return `${Math.abs(lat).toFixed(4)}° ${latDir}, ${Math.abs(lng).toFixed(
      4
    )}° ${lngDir}`;
  };

  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{vessel.name}</CardTitle>
          <Badge className="bg-primary">{vessel.type}</Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Ship className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Vessel Info</span>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
              <div className="text-muted-foreground">IMO:</div>
              <div>{vessel.imo}</div>
              <div className="text-muted-foreground">MMSI:</div>
              <div>{vessel.mmsi}</div>
              <div className="text-muted-foreground">Call Sign:</div>
              <div>{vessel.callSign}</div>
              <div className="text-muted-foreground">Dimensions:</div>
              <div>
                {vessel.length}m x {vessel.width}m
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Flag className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Flag & Status</span>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
              <div className="text-muted-foreground">Flag:</div>
              <div>{vessel.flag}</div>
              <div className="text-muted-foreground">Status:</div>
              <div>{vessel.status}</div>
            </div>
          </div>
        </div>

        <Separator />

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Navigation className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">Navigation Data</span>
          </div>
          <div className="grid grid-cols-3 gap-x-4 gap-y-2 text-sm">
            <div>
              <div className="text-muted-foreground mb-1">Speed</div>
              <div className="flex items-center gap-1">
                <span className="text-lg font-semibold">
                  {vessel.speed.toFixed(1)}
                </span>
                <span>knots</span>
              </div>
            </div>
            <div>
              <div className="text-muted-foreground mb-1">Course</div>
              <div className="flex items-center gap-1">
                <span className="text-lg font-semibold">
                  {vessel.course.toFixed(0)}°
                </span>
              </div>
            </div>
            <div>
              <div className="text-muted-foreground mb-1">Heading</div>
              <div className="flex items-center gap-1">
                <span className="text-lg font-semibold">
                  {vessel.heading.toFixed(0)}°
                </span>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Position</span>
            </div>
            <div className="text-sm">
              {formatCoordinates(vessel.position.lat, vessel.position.lng)}
            </div>
            <div className="text-xs text-muted-foreground flex items-center gap-1">
              <Clock className="h-3 w-3" />
              Last report: {formatDate(vessel.lastReport)}
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Destination</span>
            </div>
            <div className="text-sm">{vessel.destination || "Not specified"}</div>
            {vessel.eta && (
              <div className="text-xs text-muted-foreground flex items-center gap-1">
                <Route className="h-3 w-3" />
                ETA: {formatDate(vessel.eta)}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VesselDetail;
