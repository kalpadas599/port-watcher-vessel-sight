
import Layout from "@/components/Layout";
import { vessels } from "@/data/vesselData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import VesselList from "@/components/VesselList";
import { Compass, Flag, Navigation } from "lucide-react";
import { useState } from "react";

const Tracking = () => {
  const [selectedVesselId, setSelectedVesselId] = useState<string | undefined>(
    vessels[0]?.id
  );

  const arrivingVessels = vessels.filter(v => 
    v.status === "Underway Using Engine" && v.destination.includes("Rotterdam")
  );
  
  const departingVessels = vessels.filter(v => 
    v.status === "Underway Using Engine" && !v.destination.includes("Rotterdam")
  );
  
  const anchoredVessels = vessels.filter(v => 
    v.status === "At Anchor" || v.status === "Moored"
  );

  return (
    <Layout>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Vessel Tracking</h1>
        
        <Tabs defaultValue="arriving">
          <TabsList>
            <TabsTrigger value="arriving" className="flex items-center gap-1">
              <Navigation className="h-4 w-4" />
              Arriving
            </TabsTrigger>
            <TabsTrigger value="departing" className="flex items-center gap-1">
              <Flag className="h-4 w-4" />
              Departing
            </TabsTrigger>
            <TabsTrigger value="anchored" className="flex items-center gap-1">
              <Compass className="h-4 w-4" />
              Anchored/Moored
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="arriving">
            <Card className="h-[600px]">
              <CardHeader>
                <CardTitle>Arriving Vessels</CardTitle>
              </CardHeader>
              <CardContent>
                <VesselList
                  vessels={arrivingVessels}
                  selectedVesselId={selectedVesselId}
                  onSelectVessel={setSelectedVesselId}
                />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="departing">
            <Card className="h-[600px]">
              <CardHeader>
                <CardTitle>Departing Vessels</CardTitle>
              </CardHeader>
              <CardContent>
                <VesselList
                  vessels={departingVessels}
                  selectedVesselId={selectedVesselId}
                  onSelectVessel={setSelectedVesselId}
                />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="anchored">
            <Card className="h-[600px]">
              <CardHeader>
                <CardTitle>Anchored/Moored Vessels</CardTitle>
              </CardHeader>
              <CardContent>
                <VesselList
                  vessels={anchoredVessels}
                  selectedVesselId={selectedVesselId}
                  onSelectVessel={setSelectedVesselId}
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Tracking;
