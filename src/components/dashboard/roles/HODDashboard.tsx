
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { StatCard } from "@/components/dashboard/StatCard";
import { FileText, TrendingDown, TrendingUp, BarChart4 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function HODDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">HOD Dashboard</h2>
        <p className="text-muted-foreground">Monitor overall procurement and budgets. Executive overview access.</p>
      </div>
      
      {/* Budget vs. Actual Cards */}
      <div className="grid gap-4 lg:grid-cols-2">
        <DashboardCard
          title="ACMV Department Budget"
          description="Current fiscal year performance"
          variant="purple"
          icon={<BarChart4 className="h-5 w-5 text-acmv-purple" />}
        >
          <div className="mt-2 space-y-4">
            <div>
              <div className="mb-1 flex items-center justify-between">
                <span className="text-sm font-medium">Total Budget</span>
                <span className="text-sm font-medium">$2,500,000</span>
              </div>
              <div className="h-2 w-full rounded-full bg-gray-100">
                <div className="h-2 w-[65%] rounded-full bg-acmv-purple"></div>
              </div>
              <div className="mt-1 flex items-center justify-between text-sm">
                <span>Utilized: $1,625,000 (65%)</span>
                <span className="text-green-600 flex items-center">
                  <TrendingDown className="mr-1 h-3 w-3" /> Under budget
                </span>
              </div>
            </div>
            
            <div>
              <div className="mb-1 flex items-center justify-between">
                <span className="text-sm font-medium">Equipment Procurement</span>
                <span className="text-sm font-medium">$1,200,000</span>
              </div>
              <div className="h-2 w-full rounded-full bg-gray-100">
                <div className="h-2 w-[70%] rounded-full bg-blue-500"></div>
              </div>
              <div className="mt-1 flex items-center justify-between text-sm">
                <span>Utilized: $840,000 (70%)</span>
                <span className="text-amber-600 flex items-center">
                  <TrendingUp className="mr-1 h-3 w-3" /> On target
                </span>
              </div>
            </div>
            
            <div>
              <div className="mb-1 flex items-center justify-between">
                <span className="text-sm font-medium">Maintenance Services</span>
                <span className="text-sm font-medium">$950,000</span>
              </div>
              <div className="h-2 w-full rounded-full bg-gray-100">
                <div className="h-2 w-[82%] rounded-full bg-amber-500"></div>
              </div>
              <div className="mt-1 flex items-center justify-between text-sm">
                <span>Utilized: $779,000 (82%)</span>
                <span className="text-red-600 flex items-center">
                  <TrendingUp className="mr-1 h-3 w-3" /> Attention needed
                </span>
              </div>
            </div>
            
            <Button asChild className="w-full mt-2" variant="outline">
              <Link to="/spend-dashboard">
                View Detailed Budget Report
              </Link>
            </Button>
          </div>
        </DashboardCard>
        
        {/* Requests Breakdown */}
        <div className="grid gap-4">
          <div className="grid gap-4 md:grid-cols-3">
            <StatCard 
              title="Pending Requests" 
              value="14" 
              icon={<FileText className="h-5 w-5 text-yellow-500" />} 
              variant="yellow"
            />
            <StatCard 
              title="Approved" 
              value="48" 
              icon={<FileText className="h-5 w-5 text-green-500" />} 
              variant="green"
            />
            <StatCard 
              title="Rejected" 
              value="7" 
              icon={<FileText className="h-5 w-5 text-red-500" />} 
              variant="orange"
            />
          </div>
          
          <DashboardCard
            title="Monthly Spend Trend"
            description="Last 6 months departmental expenditure"
            variant="gray"
          >
            <div className="mt-2 h-40 w-full bg-gradient-to-r from-acmv-purple-light/30 to-acmv-purple-light/10 rounded-md flex items-end justify-around p-2 relative">
              {/* Simulated bar chart */}
              <div className="w-1/6 flex flex-col items-center">
                <div className="h-20 w-4/5 bg-acmv-purple-light rounded-t-md"></div>
                <span className="text-xs mt-1">Jan</span>
              </div>
              <div className="w-1/6 flex flex-col items-center">
                <div className="h-16 w-4/5 bg-acmv-purple-light rounded-t-md"></div>
                <span className="text-xs mt-1">Feb</span>
              </div>
              <div className="w-1/6 flex flex-col items-center">
                <div className="h-24 w-4/5 bg-acmv-purple-light rounded-t-md"></div>
                <span className="text-xs mt-1">Mar</span>
              </div>
              <div className="w-1/6 flex flex-col items-center">
                <div className="h-32 w-4/5 bg-acmv-purple rounded-t-md"></div>
                <span className="text-xs mt-1">Apr</span>
              </div>
              <div className="w-1/6 flex flex-col items-center">
                <div className="h-28 w-4/5 bg-acmv-purple-light rounded-t-md"></div>
                <span className="text-xs mt-1">May</span>
              </div>
              <div className="w-1/6 flex flex-col items-center">
                <div className="h-20 w-4/5 bg-acmv-purple-light rounded-t-md"></div>
                <span className="text-xs mt-1">Jun</span>
              </div>
              
              {/* Y-axis labels (simplified) */}
              <div className="absolute left-0 top-0 h-full flex flex-col justify-between py-2 text-xs text-muted-foreground">
                <span>$300k</span>
                <span>$150k</span>
                <span>$0</span>
              </div>
            </div>
            
            <div className="mt-4 text-center">
              <Button asChild variant="outline">
                <Link to="/spend-dashboard">
                  View Full Trend Analysis
                </Link>
              </Button>
            </div>
          </DashboardCard>
        </div>
      </div>
      
      {/* Quick Links */}
      <DashboardCard
        title="Quick Actions"
        variant="gray"
        description="Common tasks and reports"
      >
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          <Button asChild variant="outline" className="flex items-center justify-center gap-2">
            <Link to="/reports/quarterly">
              <FileText className="h-4 w-4" />
              Export Quarterly Report
            </Link>
          </Button>
          <Button asChild variant="outline" className="flex items-center justify-center gap-2">
            <Link to="/department-requests">
              <FileText className="h-4 w-4" />
              View Department Requests
            </Link>
          </Button>
          <Button asChild variant="outline" className="flex items-center justify-center gap-2">
            <Link to="/project-master">
              <FileText className="h-4 w-4" />
              Project Master List
            </Link>
          </Button>
        </div>
      </DashboardCard>
    </div>
  );
}
