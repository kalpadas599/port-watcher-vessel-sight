
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Map from "@/components/Map";
import { vessels } from "@/data/vesselData";
import { useState } from "react";
import VesselDetail from "@/components/VesselDetail";

const Vessels = () => {
  const [selectedVesselId, setSelectedVesselId] = useState<string | undefined>(
    vessels[0]?.id
  );
  
  const selectedVessel = vessels.find((v) => v.id === selectedVesselId);

  return (
    <Layout>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Vessel Map Overview</h1>
        
        <Card className="w-full h-[500px] overflow-hidden p-1">
          <Map
            vessels={vessels}
            selectedVesselId={selectedVesselId}
            onSelectVessel={setSelectedVesselId}
          />
        </Card>
        
        {selectedVessel && (
          <Card>
            <CardHeader>
              <CardTitle>Selected Vessel</CardTitle>
            </CardHeader>
            <CardContent>
              <VesselDetail vessel={selectedVessel} />
            </CardContent>
          </Card>
        )}
      </div>
    </Layout>
  );
};

export default Vessels;
