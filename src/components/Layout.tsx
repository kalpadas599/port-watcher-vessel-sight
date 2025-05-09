
import { useState } from "react";
import { cn } from "@/lib/utils";
import Header from "./Header";
import { Ship, Map, Compass, Flag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { NavLink } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex flex-1">
        <aside
          className={cn(
            "bg-sidebar text-sidebar-foreground transition-all duration-300 ease-in-out border-r border-sidebar-border flex flex-col",
            sidebarOpen ? "w-64" : "w-16"
          )}
        >
          <div className="flex-1">
            <nav className="px-2 py-4">
              <ul className="space-y-1">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      cn(
                        "flex items-center rounded-md px-3 py-2 transition-colors",
                        isActive
                          ? "bg-sidebar-accent text-sidebar-accent-foreground"
                          : "hover:bg-sidebar-accent/70 hover:text-sidebar-accent-foreground"
                      )
                    }
                  >
                    <Ship className="h-5 w-5" />
                    {sidebarOpen && <span className="ml-2">Dashboard</span>}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/vessels"
                    className={({ isActive }) =>
                      cn(
                        "flex items-center rounded-md px-3 py-2 transition-colors",
                        isActive
                          ? "bg-sidebar-accent text-sidebar-accent-foreground"
                          : "hover:bg-sidebar-accent/70 hover:text-sidebar-accent-foreground"
                      )
                    }
                  >
                    <Map className="h-5 w-5" />
                    {sidebarOpen && <span className="ml-2">Vessel Map</span>}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/tracking"
                    className={({ isActive }) =>
                      cn(
                        "flex items-center rounded-md px-3 py-2 transition-colors",
                        isActive
                          ? "bg-sidebar-accent text-sidebar-accent-foreground"
                          : "hover:bg-sidebar-accent/70 hover:text-sidebar-accent-foreground"
                      )
                    }
                  >
                    <Compass className="h-5 w-5" />
                    {sidebarOpen && <span className="ml-2">Tracking</span>}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/reports"
                    className={({ isActive }) =>
                      cn(
                        "flex items-center rounded-md px-3 py-2 transition-colors",
                        isActive
                          ? "bg-sidebar-accent text-sidebar-accent-foreground"
                          : "hover:bg-sidebar-accent/70 hover:text-sidebar-accent-foreground"
                      )
                    }
                  >
                    <Flag className="h-5 w-5" />
                    {sidebarOpen && <span className="ml-2">Reports</span>}
                  </NavLink>
                </li>
              </ul>
            </nav>

            {sidebarOpen && (
              <div className="px-4 py-2">
                <Separator className="bg-sidebar-border" />
                <div className="mt-4">
                  <h3 className="text-sm font-semibold mb-2">Recent Vessels</h3>
                  <ul className="text-sm space-y-2">
                    <li className="truncate">OCEAN VOYAGER</li>
                    <li className="truncate">PACIFIC STAR</li>
                    <li className="truncate">ATLANTIC LEGEND</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          <div className="p-4">
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              onClick={toggleSidebar}
            >
              <ArrowRight
                className={cn(
                  "h-4 w-4 transition-transform",
                  sidebarOpen ? "rotate-180" : ""
                )}
              />
              {sidebarOpen && <span className="ml-2">Collapse</span>}
            </Button>
          </div>
        </aside>

        <main className="flex-1 p-4 overflow-auto bg-background">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
