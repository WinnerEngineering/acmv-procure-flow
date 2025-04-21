
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { FileOutput, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function FinanceOfficerDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Finance Officer Dashboard</h2>
        <p className="text-muted-foreground">Process payments, export documents, and manage vendor finances.</p>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <DashboardCard
          title="Approved Documents"
          description="View and export documents for financial processing"
          variant="green"
          icon={<FileOutput className="h-5 w-5 text-green-600" />}
        >
          <Button asChild className="w-full">
            <Link to="/documents">Browse Approved Documents</Link>
          </Button>
        </DashboardCard>
        <DashboardCard
          title="Vendors"
          description="Manage vendors for payments"
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
