
import { StatCard } from "@/components/dashboard/StatCard";
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { FileText, Users, ClipboardCheck, FileOutput, Activity, Bell, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BudgetVsSpendChart } from "@/components/dashboard/BudgetVsSpendChart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function AdministratorDashboard() {
  const recentRequests = [
    { id: "PR-2023-001", project: "Changi Airport T5", type: "PO", status: "Pending", date: "2023-04-15" },
    { id: "PR-2023-002", project: "Marina Bay Sands", type: "WO", status: "Approved", date: "2023-04-12" },
    { id: "PR-2023-003", project: "Jurong East Mall", type: "LOA", status: "Rejected", date: "2023-04-10" },
    { id: "PR-2023-004", project: "Tampines Hub", type: "PO", status: "Draft", date: "2023-04-08" },
  ];

  const requestVersions: Record<string, string> = {
    "PR-2023-001": "v1",
    "PR-2023-002": "v2",
    "PR-2023-003": "v1",
    "PR-2023-004": "v1",
  };
  
  const systemHealth = [
    { title: "Total Users", value: "48", icon: <Users className="h-5 w-5 text-acmv-purple" />, trend: { value: 5, isPositive: true } },
    { title: "Active Sessions", value: "24", icon: <Activity className="h-5 w-5 text-green-500" />, trend: { value: 12, isPositive: true } },
    { title: "API Errors", value: "3", icon: <Bell className="h-5 w-5 text-red-500" />, trend: { value: 15, isPositive: false } },
    { title: "Database Size", value: "1.2 GB", icon: <Database className="h-5 w-5 text-blue-500" /> },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Administrator Dashboard</h2>
        <p className="text-muted-foreground">System overview and management tools.</p>
      </div>
      
      {/* System Health Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {systemHealth.map((stat, index) => (
          <StatCard 
            key={index}
            title={stat.title} 
            value={stat.value} 
            icon={stat.icon}
            trend={stat.trend}
            variant={index === 0 ? "purple" : index === 1 ? "green" : index === 2 ? "yellow" : "gray"}
          />
        ))}
      </div>
      
      {/* Quick Actions and Charts */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <DashboardCard
          title="Administrative Actions"
          className="lg:col-span-1"
          variant="purple"
        >
          <div className="flex flex-col gap-2">
            <Button asChild className="w-full justify-start">
              <Link to="/users">
                <Users className="mr-2 h-4 w-4" />
                Manage Users & Roles
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full justify-start">
              <Link to="/settings">
                <FileText className="mr-2 h-4 w-4" />
                Templates & Thresholds
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full justify-start">
              <Link to="/audit-logs">
                <ClipboardCheck className="mr-2 h-4 w-4" />
                View Audit Logs
              </Link>
            </Button>
          </div>
        </DashboardCard>
        
        <DashboardCard
          title="Key Metrics: Requests by Type"
          className="lg:col-span-2"
          description="Distribution of purchase request types"
          variant="gray"
          icon={<span className="inline-block bg-green-100 rounded-full px-2 py-1 text-green-800 font-semibold text-xs">Analytics</span>}
        >
          <BudgetVsSpendChart />
        </DashboardCard>
      </div>
      
      {/* Recent Activity Feed */}
      <div className="grid gap-4 md:grid-cols-1">
        <DashboardCard
          title="Recent System Activity"
          variant="gray"
        >
          <Tabs defaultValue="all">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">All Activity</TabsTrigger>
              <TabsTrigger value="users">User Actions</TabsTrigger>
              <TabsTrigger value="requests">Requests</TabsTrigger>
              <TabsTrigger value="system">System Events</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-4">
              <div className="space-y-4">
                <div className="rounded-md border">
                  <div className="relative w-full overflow-auto">
                    <table className="w-full caption-bottom text-sm">
                      <thead className="border-b bg-muted/50">
                        <tr>
                          <th className="h-10 px-2 text-left font-medium">Event</th>
                          <th className="h-10 px-2 text-left font-medium">User</th>
                          <th className="h-10 px-2 text-left font-medium">Action</th>
                          <th className="h-10 px-2 text-left font-medium">Resource</th>
                          <th className="h-10 px-2 text-left font-medium">Time</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b transition-colors hover:bg-muted/50">
                          <td className="p-2 font-medium">User Login</td>
                          <td className="p-2">John Doe</td>
                          <td className="p-2">Authentication</td>
                          <td className="p-2">User Account</td>
                          <td className="p-2">5 minutes ago</td>
                        </tr>
                        <tr className="border-b transition-colors hover:bg-muted/50">
                          <td className="p-2 font-medium">Request Created</td>
                          <td className="p-2">Sarah Chen</td>
                          <td className="p-2">Create</td>
                          <td className="p-2">PR-2023-018</td>
                          <td className="p-2">25 minutes ago</td>
                        </tr>
                        <tr className="border-b transition-colors hover:bg-muted/50">
                          <td className="p-2 font-medium">Role Updated</td>
                          <td className="p-2">Admin</td>
                          <td className="p-2">Update</td>
                          <td className="p-2">User #042</td>
                          <td className="p-2">1 hour ago</td>
                        </tr>
                        <tr className="border-b transition-colors hover:bg-muted/50">
                          <td className="p-2 font-medium">Threshold Changed</td>
                          <td className="p-2">Admin</td>
                          <td className="p-2">Update</td>
                          <td className="p-2">System Settings</td>
                          <td className="p-2">2 hours ago</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="text-center">
                  <Button asChild variant="link">
                    <Link to="/audit-logs">View All System Activity</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="users" className="mt-4">
              <div className="text-center text-sm text-muted-foreground p-4">
                Filter to show only user-related activity
              </div>
            </TabsContent>
            <TabsContent value="requests" className="mt-4">
              <div className="text-center text-sm text-muted-foreground p-4">
                Filter to show only request-related activity
              </div>
            </TabsContent>
            <TabsContent value="system" className="mt-4">
              <div className="text-center text-sm text-muted-foreground p-4">
                Filter to show only system events
              </div>
            </TabsContent>
          </Tabs>
        </DashboardCard>
      </div>
    </div>
  );
}
