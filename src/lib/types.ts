
export interface Vessel {
  id: string;
  name: string;
  type: VesselType;
  mmsi: string;
  imo: string;
  callSign: string;
  flag: string;
  length: number;
  width: number;
  status: VesselStatus;
  speed: number; // in knots
  course: number; // in degrees
  heading: number; // in degrees
  destination: string;
  eta: string; // ISO date string
  lastReport: string; // ISO date string
  position: {
    lat: number;
    lng: number;
  };
}

export enum VesselType {
  CARGO = "Cargo",
  TANKER = "Tanker",
  PASSENGER = "Passenger",
  FISHING = "Fishing",
  TUGBOAT = "Tugboat",
  OTHER = "Other"
}

export enum VesselStatus {
  UNDERWAY = "Underway Using Engine",
  ANCHORED = "At Anchor",
  MOORED = "Moored",
  AGROUND = "Aground",
  RESTRICTED = "Restricted Maneuverability",
  NOT_COMMAND = "Not Under Command",
  FISHING = "Engaged in Fishing",
  RESERVED = "Reserved",
  SAILING = "Sailing"
}

export interface PortStatistics {
  vesselsInPort: number;
  vesselsExpected: number;
  vesselsAnchored: number;
  totalMovements: number;
  cargoHandled: number; // in tons
  lastUpdated: string; // ISO date string
}
