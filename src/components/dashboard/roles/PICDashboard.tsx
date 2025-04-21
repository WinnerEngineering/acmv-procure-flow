
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { StatCard } from "@/components/dashboard/StatCard";
import { FileText, Users, Plus, Upload, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function PICDashboard() {
  // Sample pending approvals data
  const myRequests = [
    { id: "PR-2023-089", type: "PO", project: "Changi Airport T5", amount: "$12,800.00", status: "Pending Approval", lastUpdate: "3 hours ago" },
    { id: "PR-2023-078", type: "WO", project: "Marina Bay Sands", amount: "$5,450.00", status: "Revision Needed", lastUpdate: "1 day ago" },
    { id: "PR-2023-065", type: "LOA", project: "Jurong East Mall", amount: "$85,000.00", status: "Approved", lastUpdate: "3 days ago" },
    { id: "PR-2023-052", type: "PO", project: "Tampines Hub", amount: "$3,200.00", status: "Draft", lastUpdate: "5 days ago" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Project In-Charge Dashboard</h2>
        <p className="text-muted-foreground">Initiate and manage your purchase requests here.</p>
      </div>
      
      {/* Quick Action Cards */}
      <div className="grid gap-4 md:grid-cols-2">
        <DashboardCard
          title="Create New Purchase Request"
          description="Start a new PO, WO, or LOA request"
          variant="purple"
          icon={<Plus className="h-5 w-5 text-acmv-purple" />}
        >
          <div className="space-y-3 mt-2">
            <Button asChild className="w-full">
              <Link to="/requests/new">New Purchase Order (PO)</Link>
            </Button>
            <Button asChild className="w-full" variant="outline">
              <Link to="/requests/new?type=wo">New Work Order (WO)</Link>
            </Button>
            <Button asChild className="w-full" variant="outline">
              <Link to="/requests/new?type=loa">New Letter of Award (LOA)</Link>
            </Button>
          </div>
        </DashboardCard>
        
        <DashboardCard
          title="Upload Documents"
          description="Add quotations or supporting documents"
          variant="gray"
          icon={<Upload className="h-5 w-5 text-acmv-gray" />}
        >
          <div className="space-y-3 mt-2">
            <Button asChild className="w-full" variant="outline">
              <Link to="/documents/upload">Upload Quotation</Link>
            </Button>
            <Button asChild className="w-full" variant="outline">
              <Link to="/documents/upload">Upload Supporting Document</Link>
            </Button>
            <Button asChild className="w-full" variant="outline">
              <Link to="/vendors">Manage Vendors</Link>
            </Button>
          </div>
        </DashboardCard>
      </div>
      
      {/* My Requests Table */}
      <DashboardCard
        title="My Requests"
        description="Track status of your purchase requests"
        variant="gray"
      >
        <div className="overflow-hidden rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Request ID</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Project</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Update</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {myRequests.map((request) => (
                <TableRow key={request.id} className="hover:bg-muted/50">
                  <TableCell className="font-medium">{request.id}</TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${
                      request.type === 'PO' 
                        ? 'bg-blue-50 text-blue-700' 
                        : request.type === 'WO'
                        ? 'bg-purple-50 text-purple-700'
                        : 'bg-orange-50 text-orange-700'
                    }`}>
                      {request.type}
                    </span>
                  </TableCell>
                  <TableCell>{request.project}</TableCell>
                  <TableCell>{request.amount}</TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${
                      request.status === 'Approved' 
                        ? 'bg-green-50 text-green-700' 
                        : request.status === 'Pending Approval'
                        ? 'bg-yellow-50 text-yellow-700'
                        : request.status === 'Revision Needed'
                        ? 'bg-red-50 text-red-700'
                        : 'bg-gray-50 text-gray-700'
                    }`}>
                      {request.status}
                    </span>
                  </TableCell>
                  <TableCell>{request.lastUpdate}</TableCell>
                  <TableCell>
                    <Button asChild size="sm">
                      <Link to={`/requests/${request.id}`}>View</Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="mt-4 text-center">
          <Button asChild variant="outline">
            <Link to="/requests">View All My Requests</Link>
          </Button>
        </div>
      </DashboardCard>
      
      {/* Notifications Panel */}
      <DashboardCard
        title="Notifications"
        variant="yellow"
        icon={<AlertCircle className="h-5 w-5 text-yellow-500" />}
      >
        <ul className="space-y-3">
          <li className="flex items-start space-x-2 p-2 rounded-md bg-yellow-50">
            <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5" />
            <div>
              <p className="font-medium">Request PR-2023-078 needs revision</p>
              <p className="text-sm text-muted-foreground">QS Coordinator has requested changes to cost coding</p>
              <Button asChild size="sm" className="mt-1">
                <Link to="/requests/PR-2023-078">View Request</Link>
              </Button>
            </div>
          </li>
          <li className="flex items-start space-x-2 p-2 rounded-md bg-green-50">
            <AlertCircle className="h-5 w-5 text-green-500 mt-0.5" />
            <div>
              <p className="font-medium">Request PR-2023-065 has been approved</p>
              <p className="text-sm text-muted-foreground">Director approved your request for Jurong East Mall</p>
              <Button asChild size="sm" variant="outline" className="mt-1">
                <Link to="/requests/PR-2023-065">View Details</Link>
              </Button>
            </div>
          </li>
          <li className="flex items-start space-x-2 p-2 rounded-md bg-blue-50">
            <AlertCircle className="h-5 w-5 text-blue-500 mt-0.5" />
            <div>
              <p className="font-medium">Don't forget to complete your draft</p>
              <p className="text-sm text-muted-foreground">Draft PR-2023-052 has been waiting for 5 days</p>
              <Button asChild size="sm" variant="outline" className="mt-1">
                <Link to="/requests/PR-2023-052">Continue Draft</Link>
              </Button>
            </div>
          </li>
        </ul>
      </DashboardCard>
    </div>
  );
}
