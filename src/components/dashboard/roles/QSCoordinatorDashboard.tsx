
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { StatCard } from "@/components/dashboard/StatCard";
import { FileText, Users, ClipboardCheck, Database, CalendarClock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function QSCoordinatorDashboard() {
  // Sample pre-cost entries waiting
  const preCosting = [
    { project: "Changi Airport T5", costCode: "HVAC-2023-001", requestedBy: "John Chen", dueDate: "2023-04-25" },
    { project: "Marina Bay Sands", costCode: "DUCT-2023-015", requestedBy: "Sarah Lim", dueDate: "2023-04-26" },
    { project: "Jurong East Mall", costCode: "ELEC-2023-008", requestedBy: "Michael Tan", dueDate: "2023-04-28" },
  ];
  
  // Sample document uploads pending
  const pendingDocs = [
    { rfqId: "RFQ-2023-042", docType: "Technical Specifications", pic: "John Chen", status: "Waiting for Upload" },
    { rfqId: "RFQ-2023-045", docType: "Drawings", pic: "Sarah Lim", status: "Incomplete" },
    { rfqId: "RFQ-2023-048", docType: "BOQ", pic: "Michael Tan", status: "Version Update Needed" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">QS Coordinator Dashboard</h2>
        <p className="text-muted-foreground">Manage project budgets, validate requests, and oversee contract documents.</p>
      </div>
      
      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <StatCard 
          title="Pre-Cost Entries Pending" 
          value="12" 
          icon={<Database className="h-5 w-5 text-acmv-purple" />} 
          variant="purple"
        />
        <StatCard 
          title="Pre-Cost Completed" 
          value="48" 
          icon={<ClipboardCheck className="h-5 w-5 text-green-500" />} 
          variant="green"
        />
        <StatCard 
          title="Docs Versioned This Week" 
          value="15" 
          icon={<FileText className="h-5 w-5 text-acmv-gray" />} 
          variant="gray"
        />
      </div>
      
      {/* Awaiting Pre-Cost Table */}
      <DashboardCard
        title="Awaiting Pre-Cost Entries"
        description="Items requiring cost coding and validation"
        variant="purple"
      >
        <div className="overflow-hidden rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Project</TableHead>
                <TableHead>Cost Code</TableHead>
                <TableHead>Requested By</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {preCosting.map((item, index) => (
                <TableRow key={index} className="hover:bg-muted/50">
                  <TableCell>{item.project}</TableCell>
                  <TableCell className="font-mono text-sm">{item.costCode}</TableCell>
                  <TableCell>{item.requestedBy}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <CalendarClock className="mr-1 h-4 w-4 text-yellow-500" />
                      {item.dueDate}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Button asChild size="sm">
                      <Link to={`/pre-cost/${item.costCode}`}>Enter Pre-Cost</Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="mt-4 text-center">
          <Button asChild variant="outline">
            <Link to="/pre-cost">View All Pre-Cost Tasks</Link>
          </Button>
        </div>
      </DashboardCard>
      
      {/* Pending Document Uploads */}
      <DashboardCard
        title="Pending Document Uploads"
        description="Contract and purchase request documents awaiting processing"
        variant="gray"
      >
        <div className="overflow-hidden rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>RFQ ID</TableHead>
                <TableHead>Document Type</TableHead>
                <TableHead>PIC</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pendingDocs.map((doc, index) => (
                <TableRow key={index} className="hover:bg-muted/50">
                  <TableCell className="font-medium">{doc.rfqId}</TableCell>
                  <TableCell>{doc.docType}</TableCell>
                  <TableCell>{doc.pic}</TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${
                      doc.status === 'Waiting for Upload' 
                        ? 'bg-yellow-50 text-yellow-700' 
                        : doc.status === 'Incomplete'
                        ? 'bg-red-50 text-red-700'
                        : 'bg-blue-50 text-blue-700'
                    }`}>
                      {doc.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button asChild size="sm">
                      <Link to={`/document-library/${doc.rfqId}`}>Upload</Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="mt-4 text-center">
          <Button asChild variant="outline">
            <Link to="/document-library">View Document Library</Link>
          </Button>
        </div>
      </DashboardCard>
      
      {/* Validation Tasks */}
      <div className="grid gap-4 md:grid-cols-2">
        <DashboardCard
          title="Validate Purchase Requests"
          description="Review and validate cost coding for new requests"
          variant="purple"
          icon={<ClipboardCheck className="h-5 w-5 text-acmv-purple" />}
        >
          <Button asChild className="w-full mt-2">
            <Link to="/reviews">Go to Pending Validations</Link>
          </Button>
        </DashboardCard>
        
        <DashboardCard
          title="Vendors & Budgets"
          description="Manage vendors and project budgets"
          variant="gray"
          icon={<Users className="h-5 w-5 text-acmv-gray" />}
        >
          <div className="grid gap-2 mt-2">
            <Button asChild variant="outline">
              <Link to="/vendors">Vendor Management</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/budgets">Budget Management</Link>
            </Button>
          </div>
        </DashboardCard>
      </div>
    </div>
  );
}
