
import { useState } from "react";
import Layout from "@/components/Layout";
import Map from "@/components/Map";
import Dashboard from "@/components/Dashboard";
import VesselList from "@/components/VesselList";
import VesselDetail from "@/components/VesselDetail";
import { vessels, portStatistics } from "@/data/vesselData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Ship, BarChart2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const Index = () => {
  const [selectedVesselId, setSelectedVesselId] = useState<string | undefined>(
    vessels[0]?.id
  );
  
  const selectedVessel = vessels.find((v) => v.id === selectedVesselId);

  return (
    <Layout>
      <div className="grid grid-cols-12 gap-4 h-[calc(100vh-8.5rem)]">
        <div className="col-span-12 lg:col-span-8">
          <div className="h-full grid grid-rows-2 gap-4">
            <Card className="w-full row-span-1 overflow-hidden p-1">
              <Map
                vessels={vessels}
                selectedVesselId={selectedVesselId}
                onSelectVessel={setSelectedVesselId}
              />
            </Card>
            <div className="row-span-1">
              <Tabs defaultValue="dashboard">
                <TabsList className="mb-2">
                  <TabsTrigger value="dashboard" className="flex items-center gap-1">
                    <BarChart2 className="h-4 w-4" />
                    Dashboard
                  </TabsTrigger>
                  <TabsTrigger value="vessel" className="flex items-center gap-1">
                    <Ship className="h-4 w-4" />
                    Vessel Details
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="dashboard">
                  <Dashboard statistics={portStatistics} />
                </TabsContent>
                <TabsContent value="vessel">
                  {selectedVessel ? (
                    <VesselDetail vessel={selectedVessel} />
                  ) : (
                    <div className="flex items-center justify-center h-full bg-muted/30 rounded-lg">
                      <p className="text-muted-foreground">
                        Select a vessel to view details
                      </p>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 h-full">
          <Card className="h-full p-4">
            <h2 className="text-lg font-semibold mb-4">Vessels</h2>
            <VesselList
              vessels={vessels}
              selectedVesselId={selectedVesselId}
              onSelectVessel={setSelectedVesselId}
            />
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
