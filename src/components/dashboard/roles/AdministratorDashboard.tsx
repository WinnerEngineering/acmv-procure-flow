
import { StatCard } from "@/components/dashboard/StatCard";
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { FileText, Users, ClipboardCheck, FileOutput } from "lucide-react";
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

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">Welcome back to your procurement dashboard.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard 
          title="Total Requests" 
          value="126" 
          icon={<FileText className="h-5 w-5 text-acmv-purple" />} 
          trend={{ value: 12, isPositive: true }}
          variant="purple"
        />
        <StatCard 
          title="Vendors" 
          value="84" 
          icon={<Users className="h-5 w-5 text-acmv-gray" />} 
          variant="gray"
        />
        <StatCard 
          title="Pending Review" 
          value="8" 
          icon={<ClipboardCheck className="h-5 w-5 text-yellow-500" />} 
          variant="yellow"
        />
        <StatCard 
          title="Approved" 
          value="94" 
          icon={<FileOutput className="h-5 w-5 text-green-500" />} 
          variant="green"
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <DashboardCard
          title="Quick Actions"
          className="lg:col-span-1"
          variant="purple"
        >
          <div className="flex flex-col gap-2">
            <Button asChild className="w-full justify-start">
              <Link to="/requests/new">
                <FileText className="mr-2 h-4 w-4" />
                New Purchase Request
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full justify-start">
              <Link to="/vendors/new">
                <Users className="mr-2 h-4 w-4" />
                Add New Vendor
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full justify-start">
              <Link to="/reviews">
                <ClipboardCheck className="mr-2 h-4 w-4" />
                Review Pending Requests
              </Link>
            </Button>
          </div>
        </DashboardCard>
        <DashboardCard
          title="Reporting: Budget vs. Spend"
          className="lg:col-span-2"
          description="Visual comparison of planned budget vs. issued spend by project"
          variant="gray"
          icon={<span className="inline-block bg-green-100 rounded-full px-2 py-1 text-green-800 font-semibold text-xs">Analytics</span>}
        >
          <BudgetVsSpendChart />
        </DashboardCard>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <DashboardCard
          title="Recent Activity"
          className="lg:col-span-3"
          variant="gray"
        >
          <Tabs defaultValue="all">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="po">PO</TabsTrigger>
              <TabsTrigger value="wo">WO</TabsTrigger>
              <TabsTrigger value="loa">LOA</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-4">
              <div className="space-y-4">
                <div className="rounded-md border">
                  <div className="relative w-full overflow-auto">
                    <table className="w-full caption-bottom text-sm">
                      <thead className="border-b bg-muted/50">
                        <tr>
                          <th className="h-10 px-2 text-left font-medium">ID</th>
                          <th className="h-10 px-2 text-left font-medium">Project</th>
                          <th className="h-10 px-2 text-left font-medium">Type</th>
                          <th className="h-10 px-2 text-left font-medium">Status</th>
                          <th className="h-10 px-2 text-left font-medium">Version</th>
                          <th className="h-10 px-2 text-left font-medium">Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentRequests.map((request) => (
                          <tr 
                            key={request.id} 
                            className="border-b transition-colors hover:bg-muted/50"
                          >
                            <td className="p-2 font-medium">{request.id}</td>
                            <td className="p-2">{request.project}</td>
                            <td className="p-2">{request.type}</td>
                            <td className="p-2">
                              <span 
                                className={`inline-block rounded-full px-2 py-1 text-xs font-semibold ${
                                  request.status === 'Approved' 
                                    ? 'bg-green-100 text-green-800' 
                                    : request.status === 'Rejected'
                                    ? 'bg-red-100 text-red-800'
                                    : request.status === 'Pending'
                                    ? 'bg-yellow-100 text-yellow-800'
                                    : 'bg-gray-100 text-gray-800'
                                }`}
                              >
                                {request.status}
                              </span>
                            </td>
                            <td className="p-2">
                              <span className="inline-block px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-800 font-semibold">
                                {requestVersions[request.id] || "v1"}
                              </span>
                            </td>
                            <td className="p-2">{request.date}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="text-center">
                  <Button asChild variant="link">
                    <Link to="/requests">View All Requests</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="po" className="mt-4">
              <div className="text-center text-sm text-muted-foreground p-4">
                Filter to show only Purchase Orders
              </div>
            </TabsContent>
            <TabsContent value="wo" className="mt-4">
              <div className="text-center text-sm text-muted-foreground p-4">
                Filter to show only Work Orders
              </div>
            </TabsContent>
            <TabsContent value="loa" className="mt-4">
              <div className="text-center text-sm text-muted-foreground p-4">
                Filter to show only Letters of Award
              </div>
            </TabsContent>
          </Tabs>
        </DashboardCard>
      </div>
    </div>
  );
}
