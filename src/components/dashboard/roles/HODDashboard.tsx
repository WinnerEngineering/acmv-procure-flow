
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function HODDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">HOD Dashboard</h2>
        <p className="text-muted-foreground">Monitor overall procurement and budgets. View only access.</p>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <DashboardCard
          title="Procurement Overview"
          description="You have view-only access to procurement records and spend reports."
          variant="gray"
          icon={<FileText className="h-5 w-5 text-acmv-purple" />}
        >
          <Button asChild className="w-full" variant="outline">
            <Link to="/project-master">
              Project Master List
            </Link>
          </Button>
        </DashboardCard>
      </div>
    </div>
  );
}
