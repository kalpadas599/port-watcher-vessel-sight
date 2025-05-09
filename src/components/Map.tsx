
import { useEffect, useRef, useState } from "react";
import { Vessel } from "@/lib/types";
import { Map as MapIcon, Plus, Minus, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface MapProps {
  vessels: Vessel[];
  selectedVesselId?: string;
  onSelectVessel: (id: string) => void;
}

const Map = ({ vessels, selectedVesselId, onSelectVessel }: MapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState(14);
  const centerLat = 51.9850;
  const centerLng = 4.3900;

  // In a real app, this would use a mapping library like Mapbox, Leaflet, or Google Maps
  // For this demo, we'll create a simulated map view

  const zoomIn = () => setZoom(Math.min(zoom + 1, 20));
  const zoomOut = () => setZoom(Math.max(zoom - 1, 10));
  const resetView = () => setZoom(14);

  // Calculate simulated positions for vessel markers
  const getMarkerPosition = (vessel: Vessel) => {
    const latDiff = vessel.position.lat - centerLat;
    const lngDiff = vessel.position.lng - centerLng;
    
    const scale = Math.pow(1.2, zoom - 10);
    
    const x = 50 + (lngDiff * scale * 1000);
    const y = 50 - (latDiff * scale * 1000);
    
    return { x: `${x}%`, y: `${y}%` };
  };

  return (
    <div className="relative bg-accent h-full rounded-lg overflow-hidden border">
      <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
        <Button size="icon" variant="secondary" onClick={zoomIn} className="bg-white/80 backdrop-blur-sm hover:bg-white">
          <Plus className="h-4 w-4" />
        </Button>
        <Button size="icon" variant="secondary" onClick={zoomOut} className="bg-white/80 backdrop-blur-sm hover:bg-white">
          <Minus className="h-4 w-4" />
        </Button>
        <Button size="icon" variant="secondary" onClick={resetView} className="bg-white/80 backdrop-blur-sm hover:bg-white">
          <Compass className="h-4 w-4" />
        </Button>
      </div>

      <div className="absolute bottom-2 left-2 z-10">
        <Badge variant="outline" className="bg-white/80 backdrop-blur-sm">
          <MapIcon className="h-3 w-3 mr-1" /> Port of Rotterdam
        </Badge>
      </div>

      <div className="map-container">
        <div className="relative w-full h-full bg-[#e4f2fa]">
          {/* Water and land simulation */}
          <div className="absolute inset-0 bg-[#aad3df]"></div>
          <div className="absolute left-[25%] top-[30%] w-[60%] h-[60%] bg-[#e4f2fa] rounded-md"></div>
          
          {/* Port structures */}
          <div className="absolute left-[35%] top-[40%] w-[40%] h-[10%] bg-[#d0d0d0]"></div>
          <div className="absolute left-[30%] top-[50%] w-[10%] h-[30%] bg-[#d0d0d0]"></div>
          <div className="absolute left-[45%] top-[50%] w-[25%] h-[5%] bg-[#d0d0d0]"></div>
          
          {/* Vessel markers */}
          {vessels.map((vessel) => {
            const pos = getMarkerPosition(vessel);
            const isActive = vessel.id === selectedVesselId;
            
            return (
              <div
                key={vessel.id}
                className={cn(
                  "vessel-marker absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer",
                  isActive && "active"
                )}
                style={{ 
                  left: pos.x, 
                  top: pos.y,
                }}
                onClick={() => onSelectVessel(vessel.id)}
                title={vessel.name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Map;
