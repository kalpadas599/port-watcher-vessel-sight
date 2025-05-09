
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { vessels } from "@/data/vesselData";
import { VesselType } from "@/lib/types";
import { ChartLineIcon, BarChart2, Navigation } from "lucide-react";
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";

const Reports = () => {
  // Calculate vessel type distribution data
  const vesselTypeCounts = Object.values(VesselType).reduce((acc, type) => {
    const count = vessels.filter(v => v.type === type).length;
    if (count > 0) {
      acc.push({ name: type, value: count });
    }
    return acc;
  }, [] as { name: string; value: number }[]);

  // Calculate vessel status data
  const statusData = vessels.reduce((acc, vessel) => {
    const statusEntry = acc.find(entry => entry.status === vessel.status);
    if (statusEntry) {
      statusEntry.count += 1;
    } else {
      acc.push({ status: vessel.status, count: 1 });
    }
    return acc;
  }, [] as { status: string; count: number }[]);

  // Calculate recent arrivals
  const recentArrivals = vessels
    .filter(v => v.status === "Moored")
    .sort((a, b) => new Date(b.lastReport).getTime() - new Date(a.lastReport).getTime())
    .slice(0, 5);

  // Colors for the pie chart
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Port Reports</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <ChartLineIcon className="h-5 w-5" />
                Vessel Type Distribution
              </CardTitle>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={vesselTypeCounts}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {vesselTypeCounts.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <BarChart2 className="h-5 w-5" />
                Vessel Status Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={statusData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="status" tick={{ fontSize: 12 }} />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" name="Vessels" fill="#0088FE" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Navigation className="h-5 w-5" />
              Recent Arrivals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Vessel Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Flag</TableHead>
                  <TableHead>Arrival Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentArrivals.map((vessel) => (
                  <TableRow key={vessel.id}>
                    <TableCell className="font-medium">{vessel.name}</TableCell>
                    <TableCell>{vessel.type}</TableCell>
                    <TableCell>{vessel.flag}</TableCell>
                    <TableCell>{new Date(vessel.lastReport).toLocaleString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Reports;
