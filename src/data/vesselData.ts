
import { Vessel, VesselType, VesselStatus } from "../lib/types";

export const vessels: Vessel[] = [
  {
    id: "v1",
    name: "OCEAN VOYAGER",
    type: VesselType.CARGO,
    mmsi: "123456789",
    imo: "IMO9876543",
    callSign: "ABC123",
    flag: "Panama",
    length: 294,
    width: 32,
    status: VesselStatus.UNDERWAY,
    speed: 14.5,
    course: 175,
    heading: 172,
    destination: "Rotterdam",
    eta: new Date(Date.now() + 3600000 * 24 * 2).toISOString(),
    lastReport: new Date().toISOString(),
    position: {
      lat: 51.9885,
      lng: 4.3765
    }
  },
  {
    id: "v2",
    name: "PACIFIC STAR",
    type: VesselType.TANKER,
    mmsi: "987654321",
    imo: "IMO1234567",
    callSign: "XYZ789",
    flag: "Liberia",
    length: 320,
    width: 58,
    status: VesselStatus.ANCHORED,
    speed: 0,
    course: 0,
    heading: 90,
    destination: "Singapore",
    eta: new Date(Date.now() + 3600000 * 24 * 5).toISOString(),
    lastReport: new Date().toISOString(),
    position: {
      lat: 51.9775,
      lng: 4.3900
    }
  },
  {
    id: "v3",
    name: "ATLANTIC LEGEND",
    type: VesselType.PASSENGER,
    mmsi: "567890123",
    imo: "IMO4567890",
    callSign: "DEF456",
    flag: "Bahamas",
    length: 348,
    width: 39,
    status: VesselStatus.MOORED,
    speed: 0,
    course: 0,
    heading: 180,
    destination: "Miami",
    eta: new Date(Date.now() + 3600000 * 24 * 3).toISOString(),
    lastReport: new Date().toISOString(),
    position: {
      lat: 51.9830,
      lng: 4.4000
    }
  },
  {
    id: "v4",
    name: "COASTAL TRADER",
    type: VesselType.CARGO,
    mmsi: "345678901",
    imo: "IMO7890123",
    callSign: "GHI789",
    flag: "Malta",
    length: 180,
    width: 28,
    status: VesselStatus.UNDERWAY,
    speed: 12.3,
    course: 260,
    heading: 258,
    destination: "Hamburg",
    eta: new Date(Date.now() + 3600000 * 24).toISOString(),
    lastReport: new Date().toISOString(),
    position: {
      lat: 51.9980,
      lng: 4.3950
    }
  },
  {
    id: "v5",
    name: "NORDIC FISHING",
    type: VesselType.FISHING,
    mmsi: "234567890",
    imo: "IMO5678901",
    callSign: "JKL321",
    flag: "Norway",
    length: 65,
    width: 14,
    status: VesselStatus.FISHING,
    speed: 5.2,
    course: 80,
    heading: 84,
    destination: "Fishing Grounds",
    eta: "",
    lastReport: new Date().toISOString(),
    position: {
      lat: 51.9700,
      lng: 4.3800
    }
  },
  {
    id: "v6",
    name: "HARBOR ASSIST",
    type: VesselType.TUGBOAT,
    mmsi: "678901234",
    imo: "IMO2345678",
    callSign: "MNO987",
    flag: "Netherlands",
    length: 32,
    width: 10,
    status: VesselStatus.RESTRICTED,
    speed: 6.8,
    course: 120,
    heading: 118,
    destination: "Port Operations",
    eta: "",
    lastReport: new Date().toISOString(),
    position: {
      lat: 51.9950,
      lng: 4.3850
    }
  }
];

export const portStatistics = {
  vesselsInPort: 42,
  vesselsExpected: 15,
  vesselsAnchored: 7,
  totalMovements: 38,
  cargoHandled: 158420,
  lastUpdated: new Date().toISOString()
};
