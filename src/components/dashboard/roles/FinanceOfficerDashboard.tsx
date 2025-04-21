
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { StatCard } from "@/components/dashboard/StatCard";
import { FileOutput, Users, AlertCircle, TrendingUp, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function FinanceOfficerDashboard() {
  // Sample payment queue data
  const paymentQueue = [
    { id: "PO-2023-042", vendor: "Singapore Cooling Systems Pte Ltd", amount: "$28,500.00", dueDate: "2023-04-25", status: "Ready for Payment" },
    { id: "WO-2023-025", vendor: "Elite HVAC Contractors", amount: "$12,450.00", dueDate: "2023-04-28", status: "Processing" },
    { id: "LOA-2023-008", vendor: "AirCon Pros (SG)", amount: "$5,780.00", dueDate: "2023-05-02", status: "Ready for Payment" },
    { id: "PO-2023-039", vendor: "Ventilation Experts Pte Ltd", amount: "$9,300.00", dueDate: "2023-05-05", status: "Pending Approval" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Finance Officer Dashboard</h2>
        <p className="text-muted-foreground">Process payments, export documents, and manage vendor finances.</p>
      </div>
      
      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <StatCard 
          title="Payments Due This Week" 
          value="8" 
          icon={<Wallet className="h-5 w-5 text-acmv-purple" />} 
          variant="purple"
          trend={{ value: 2, isPositive: false }}
        />
        <StatCard 
          title="Payments Overdue" 
          value="3" 
          icon={<AlertCircle className="h-5 w-5 text-red-500" />} 
          variant="orange"
        />
        <StatCard 
          title="Processed This Month" 
          value="32" 
          icon={<FileOutput className="h-5 w-5 text-green-600" />} 
          variant="green"
          trend={{ value: 12, isPositive: true }}
        />
      </div>
      
      {/* Payment Queue Table */}
      <DashboardCard
        title="Payment Queue"
        description="Upcoming vendor payments to be processed"
        variant="purple"
      >
        <div className="overflow-hidden rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Request ID</TableHead>
                <TableHead>Vendor</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paymentQueue.map((payment, index) => (
                <TableRow key={index} className="hover:bg-muted/50">
                  <TableCell className="font-medium">{payment.id}</TableCell>
                  <TableCell>{payment.vendor}</TableCell>
                  <TableCell>{payment.amount}</TableCell>
                  <TableCell>{payment.dueDate}</TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${
                      payment.status === 'Ready for Payment' 
                        ? 'bg-green-50 text-green-700' 
                        : payment.status === 'Processing'
                        ? 'bg-blue-50 text-blue-700'
                        : 'bg-yellow-50 text-yellow-700'
                    }`}>
                      {payment.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button asChild size="sm">
                      <Link to={`/payment-tracker/${payment.id}`}>Process</Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="mt-4 text-center">
          <Button asChild variant="outline">
            <Link to="/payment-tracker">View All Payments</Link>
          </Button>
        </div>
      </DashboardCard>
      
      {/* Overdue Alerts and Cash Flow */}
      <div className="grid gap-4 md:grid-cols-2">
        <DashboardCard
          title="Overdue Payment Alerts"
          description="Requires immediate attention"
          variant="orange"
          icon={<AlertCircle className="h-5 w-5 text-red-500" />}
        >
          <ul className="space-y-3 mt-2">
            <li className="flex items-start space-x-2 p-2 rounded-md bg-red-50">
              <AlertCircle className="h-5 w-5 text-red-500 mt-0.5" />
              <div>
                <p className="font-medium">PO-2023-035 is 5 days overdue</p>
                <p className="text-sm text-muted-foreground">Ventilation Experts Pte Ltd - $12,500.00</p>
                <Button asChild size="sm" className="mt-1">
                  <Link to="/payment-tracker/PO-2023-035">Process Now</Link>
                </Button>
              </div>
            </li>
            <li className="flex items-start space-x-2 p-2 rounded-md bg-red-50">
              <AlertCircle className="h-5 w-5 text-red-500 mt-0.5" />
              <div>
                <p className="font-medium">WO-2023-021 is 3 days overdue</p>
                <p className="text-sm text-muted-foreground">Singapore Cooling Systems Pte Ltd - $5,280.00</p>
                <Button asChild size="sm" className="mt-1">
                  <Link to="/payment-tracker/WO-2023-021">Process Now</Link>
                </Button>
              </div>
            </li>
            <li className="flex items-start space-x-2 p-2 rounded-md bg-red-50">
              <AlertCircle className="h-5 w-5 text-red-500 mt-0.5" />
              <div>
                <p className="font-medium">PO-2023-028 is 2 days overdue</p>
                <p className="text-sm text-muted-foreground">AirCon Pros (SG) - $8,720.00</p>
                <Button asChild size="sm" className="mt-1">
                  <Link to="/payment-tracker/PO-2023-028">Process Now</Link>
                </Button>
              </div>
            </li>
          </ul>
        </DashboardCard>
        
        <DashboardCard
          title="Cash Flow: Upcoming Outflows"
          description="Next 30 days payment projections"
          variant="green"
          icon={<TrendingUp className="h-5 w-5 text-green-600" />}
        >
          <div className="mt-2 h-40 w-full bg-gradient-to-r from-green-50 to-green-100 rounded-md flex items-end justify-around p-2 relative">
            {/* Simulated line chart */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-24 flex items-end">
                <div className="relative w-full h-full">
                  {/* Line drawing simulation */}
                  <div className="absolute bottom-0 left-0 w-full h-1/2 border-t border-green-500"></div>
                  <div className="absolute bottom-0 left-[10%] w-[90%] h-1/4 border-t border-green-500"></div>
                  <div className="absolute bottom-0 left-[20%] w-[80%] h-3/4 border-t border-green-500"></div>
                  <div className="absolute bottom-0 left-[30%] w-[70%] h-1/4 border-t border-green-500"></div>
                  <div className="absolute bottom-0 left-[40%] w-[60%] h-2/3 border-t border-green-500"></div>
                  <div className="absolute bottom-0 left-[50%] w-[50%] h-1/3 border-t border-green-500"></div>
                  
                  {/* Data points */}
                  <div className="absolute bottom-[50%] left-0 h-2 w-2 bg-green-600 rounded-full"></div>
                  <div className="absolute bottom-[25%] left-[10%] h-2 w-2 bg-green-600 rounded-full"></div>
                  <div className="absolute bottom-[75%] left-[20%] h-2 w-2 bg-green-600 rounded-full"></div>
                  <div className="absolute bottom-[25%] left-[30%] h-2 w-2 bg-green-600 rounded-full"></div>
                  <div className="absolute bottom-[66.7%] left-[40%] h-2 w-2 bg-green-600 rounded-full"></div>
                  <div className="absolute bottom-[33.3%] left-[50%] h-2 w-2 bg-green-600 rounded-full"></div>
                </div>
              </div>
            </div>
            
            {/* X-axis labels */}
            <div className="absolute bottom-0 w-full flex justify-between px-2 text-xs text-muted-foreground">
              <span>Today</span>
              <span>1 week</span>
              <span>2 weeks</span>
              <span>3 weeks</span>
              <span>4 weeks</span>
            </div>
            
            {/* Y-axis labels (amount ranges) */}
            <div className="absolute left-0 top-0 h-full flex flex-col justify-between py-2 text-xs text-muted-foreground">
              <span>$50k+</span>
              <span>$25k</span>
              <span>$0</span>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <Button asChild variant="outline">
              <Link to="/reporting">View Detailed Cash Flow Report</Link>
            </Button>
          </div>
        </DashboardCard>
      </div>
      
      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-2">
        <DashboardCard
          title="Approved Documents"
          description="View and export documents for financial processing"
          variant="green"
          icon={<FileOutput className="h-5 w-5 text-green-600" />}
        >
          <Button asChild className="w-full mt-2">
            <Link to="/documents">Browse Approved Documents</Link>
          </Button>
        </DashboardCard>
        
        <DashboardCard
          title="Vendors"
          description="Manage vendors for payments"
          variant="gray"
          icon={<Users className="h-5 w-5 text-acmv-gray" />}
        >
          <Button asChild className="w-full mt-2" variant="outline">
            <Link to="/vendors">Vendor Management</Link>
          </Button>
        </DashboardCard>
      </div>
    </div>
  );
}
