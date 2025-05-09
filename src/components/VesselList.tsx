
import { useState } from "react";
import { Vessel, VesselType, VesselStatus } from "@/lib/types";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SearchIcon, FilterIcon } from "lucide-react";
import VesselCard from "./VesselCard";

interface VesselListProps {
  vessels: Vessel[];
  selectedVesselId?: string;
  onSelectVessel: (id: string) => void;
}

const VesselList = ({ vessels, selectedVesselId, onSelectVessel }: VesselListProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("");
  const [showFilters, setShowFilters] = useState(false);

  const filteredVessels = vessels.filter((vessel) => {
    // Apply name search
    const matchesSearch = searchQuery 
      ? vessel.name.toLowerCase().includes(searchQuery.toLowerCase()) 
      : true;
    
    // Apply type filter
    const matchesType = typeFilter 
      ? vessel.type === typeFilter 
      : true;
    
    // Apply status filter
    const matchesStatus = statusFilter 
      ? vessel.status === statusFilter 
      : true;
    
    return matchesSearch && matchesType && matchesStatus;
  });

  return (
    <div className="flex flex-col h-full">
      <div className="pb-4">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search vessels..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-1 top-1"
            onClick={() => setShowFilters(!showFilters)}
          >
            <FilterIcon className="h-4 w-4" />
          </Button>
        </div>

        {showFilters && (
          <div className="grid grid-cols-2 gap-2 mt-2">
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Vessel Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Types</SelectItem>
                {Object.values(VesselType).map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Statuses</SelectItem>
                {Object.values(VesselStatus).map((status) => (
                  <SelectItem key={status} value={status}>
                    {status}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
      </div>

      <div className="flex-1 overflow-y-auto space-y-2">
        {filteredVessels.length > 0 ? (
          filteredVessels.map((vessel) => (
            <VesselCard
              key={vessel.id}
              vessel={vessel}
              isSelected={vessel.id === selectedVesselId}
              onClick={() => onSelectVessel(vessel.id)}
            />
          ))
        ) : (
          <div className="text-center py-8 text-muted-foreground">
            No vessels match the current filters
          </div>
        )}
      </div>
    </div>
  );
};

export default VesselList;
