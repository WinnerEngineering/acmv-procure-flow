
import { MainLayout } from "@/components/layout/MainLayout";
import { useUser } from "@/contexts/UserContext";

// Role-specific dashboards
import { AdministratorDashboard } from "@/components/dashboard/roles/AdministratorDashboard";
import { DirectorDashboard } from "@/components/dashboard/roles/DirectorDashboard";
import { HODDashboard } from "@/components/dashboard/roles/HODDashboard";
import { PICDashboard } from "@/components/dashboard/roles/PICDashboard";
import { QSCoordinatorDashboard } from "@/components/dashboard/roles/QSCoordinatorDashboard";
import { FinanceOfficerDashboard } from "@/components/dashboard/roles/FinanceOfficerDashboard";

export default function Dashboard() {
  const { user } = useUser();

  let DashboardView = null;
  switch (user?.role) {
    case "administrator":
      DashboardView = <AdministratorDashboard />;
      break;
    case "director":
      DashboardView = <DirectorDashboard />;
      break;
    case "hod":
      DashboardView = <HODDashboard />;
      break;
    case "pic":
      DashboardView = <PICDashboard />;
      break;
    case "qs_coordinator":
      DashboardView = <QSCoordinatorDashboard />;
      break;
    case "finance_officer":
      DashboardView = <FinanceOfficerDashboard />;
      break;
    default:
      DashboardView = (
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground">Welcome! Your role does not have a customized dashboard.</p>
        </div>
      );
  }

  return (
    <MainLayout>
      {DashboardView}
    </MainLayout>
  );
}
