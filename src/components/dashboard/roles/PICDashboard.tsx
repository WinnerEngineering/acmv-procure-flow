
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { FileText, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function PICDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Project In-Charge Dashboard</h2>
        <p className="text-muted-foreground">Initiate and manage your purchase requests here.</p>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <DashboardCard
          title="Create New Purchase Request"
          variant="purple"
          icon={<FileText className="h-5 w-5 text-acmv-purple" />}
        >
          <Button asChild className="w-full">
            <Link to="/requests/new">Start a Request</Link>
          </Button>
        </DashboardCard>
        <DashboardCard
          title="My Vendors"
          description="View project vendors"
          variant="gray"
          icon={<Users className="h-5 w-5 text-acmv-gray" />}
        >
          <Button asChild className="w-full" variant="outline">
            <Link to="/vendors">Vendor Management</Link>
          </Button>
        </DashboardCard>
      </div>
    </div>
  );
}
