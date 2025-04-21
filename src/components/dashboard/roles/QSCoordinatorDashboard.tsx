
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { FileText, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function QSCoordinatorDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">QS Coordinator Dashboard</h2>
        <p className="text-muted-foreground">Manage project budgets, validate requests, and oversee contract documents.</p>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <DashboardCard
          title="Validate Purchase Requests"
          variant="purple"
          icon={<FileText className="h-5 w-5 text-acmv-purple" />}
        >
          <Button asChild className="w-full">
            <Link to="/reviews">Go to Pending Validations</Link>
          </Button>
        </DashboardCard>
        <DashboardCard
          title="Vendors & Budgets"
          description="Manage vendors and project budgets"
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
