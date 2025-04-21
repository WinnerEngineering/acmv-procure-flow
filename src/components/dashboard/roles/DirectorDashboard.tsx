
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { ClipboardCheck, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function DirectorDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Director Dashboard</h2>
        <p className="text-muted-foreground">Overview for purchase request approvals and reporting.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <DashboardCard
          title="Requests Awaiting Your Approval"
          description="View & take action on pending purchase requests"
          variant="purple"
          icon={<ClipboardCheck className="h-5 w-5 text-yellow-500" />}
        >
          <Button asChild className="w-full" variant="outline">
            <Link to="/reviews">
              Go to Pending Requests
            </Link>
          </Button>
        </DashboardCard>
        <DashboardCard
          title="Reports"
          description="Access procurement and spending reports"
          variant="gray"
          icon={<FileText className="h-5 w-5 text-acmv-purple" />}
        >
          <Button asChild className="w-full" variant="outline">
            <Link to="/documents">
              View Approved Documents
            </Link>
          </Button>
        </DashboardCard>
      </div>
    </div>
  );
}
