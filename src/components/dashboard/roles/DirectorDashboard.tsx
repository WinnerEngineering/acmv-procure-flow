
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { StatCard } from "@/components/dashboard/StatCard";
import { ClipboardCheck, FileText, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function DirectorDashboard() {
  // Sample pending approvals data
  const pendingApprovals = [
    { id: "PR-2023-112", project: "Changi Airport T5", type: "PO", amount: "$28,500.00", submittedOn: "2023-04-18" },
    { id: "PR-2023-115", project: "Marina Bay Sands", type: "WO", amount: "$15,750.00", submittedOn: "2023-04-20" },
    { id: "PR-2023-118", project: "Jurong East Mall", type: "LOA", amount: "$120,000.00", submittedOn: "2023-04-21" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Director Dashboard</h2>
        <p className="text-muted-foreground">Overview for purchase request approvals and spending.</p>
      </div>
      
      {/* Approval Summary Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <StatCard 
          title="Pending Approvals" 
          value="8" 
          icon={<ClipboardCheck className="h-5 w-5 text-yellow-500" />} 
          variant="yellow"
        />
        <StatCard 
          title="Needs Revision" 
          value="3" 
          icon={<FileText className="h-5 w-5 text-red-500" />} 
          variant="orange"
        />
        <StatCard 
          title="Recently Approved" 
          value="12" 
          icon={<ClipboardCheck className="h-5 w-5 text-green-500" />} 
          variant="green"
        />
      </div>

      {/* Pending Approvals Table */}
      <DashboardCard
        title="My Pending Approvals"
        description="Purchase requests awaiting your review and approval"
        variant="purple"
      >
        <div className="overflow-hidden rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Request ID</TableHead>
                <TableHead>Project</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Submitted On</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pendingApprovals.map((request) => (
                <TableRow key={request.id} className="cursor-pointer hover:bg-muted/50">
                  <TableCell className="font-medium">{request.id}</TableCell>
                  <TableCell>{request.project}</TableCell>
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
                  <TableCell>{request.amount}</TableCell>
                  <TableCell>{request.submittedOn}</TableCell>
                  <TableCell>
                    <Button asChild size="sm" className="mr-2">
                      <Link to={`/reviews/${request.id}`}>Review</Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="mt-4 text-center">
          <Button asChild variant="outline">
            <Link to="/reviews">View All Pending Approvals</Link>
          </Button>
        </div>
      </DashboardCard>

      {/* Spend Snapshot */}
      <div className="grid gap-4 md:grid-cols-2">
        <DashboardCard
          title="YTD Total Spend"
          description="Current year-to-date procurement spend"
          variant="green"
          icon={<TrendingUp className="h-5 w-5 text-green-600" />}
        >
          <div className="mt-4 flex flex-col items-center justify-center">
            <span className="text-4xl font-bold">$1,245,800</span>
            <span className="mt-2 text-sm text-muted-foreground">Against annual budget of $3.2M</span>
            
            <div className="mt-4 h-2 w-full rounded-full bg-gray-200">
              <div className="h-2 w-[39%] rounded-full bg-green-500"></div>
            </div>
            <span className="mt-1 text-sm text-muted-foreground">39% of annual budget utilized</span>
          </div>
        </DashboardCard>

        <DashboardCard
          title="Top 5 Projects by Spend"
          description="Highest spending projects year-to-date"
          variant="gray"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Changi Airport T5</span>
              <span className="text-sm">$458,250</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-gray-100">
              <div className="h-1.5 w-[80%] rounded-full bg-acmv-purple"></div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Marina Bay Sands</span>
              <span className="text-sm">$312,400</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-gray-100">
              <div className="h-1.5 w-[60%] rounded-full bg-acmv-purple-light"></div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Jurong East Mall</span>
              <span className="text-sm">$210,800</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-gray-100">
              <div className="h-1.5 w-[40%] rounded-full bg-acmv-purple-light"></div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Tampines Hub</span>
              <span className="text-sm">$145,200</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-gray-100">
              <div className="h-1.5 w-[25%] rounded-full bg-acmv-purple-light"></div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Pasir Ris Mall</span>
              <span className="text-sm">$119,150</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-gray-100">
              <div className="h-1.5 w-[20%] rounded-full bg-acmv-purple-light"></div>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <Button asChild variant="outline">
              <Link to="/spend-overview">View Full Spend Report</Link>
            </Button>
          </div>
        </DashboardCard>
      </div>
    </div>
  );
}
