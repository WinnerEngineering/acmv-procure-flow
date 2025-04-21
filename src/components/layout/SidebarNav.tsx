
import { cn } from "@/lib/utils";
import { 
  Home, 
  Users, 
  FileText, 
  ClipboardCheck, 
  FileOutput,
  Settings,
  Folder
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useUser } from "@/contexts/UserContext";
import { UserRole } from "@/lib/roles";
import { RoleSwitcher } from "@/components/auth/RoleSwitcher";

interface SidebarNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SidebarNav({ className, ...props }: SidebarNavProps) {
  const { user, hasPermission } = useUser();

  // Define navigation items with role-based visibility
  const getNavItems = () => {
    if (!user) return [];

    const allNavItems = [
      {
        title: "Dashboard",
        href: "/dashboard",
        icon: Home,
        visible: true, // Visible to all roles
      },
      {
        title: "Vendor Management",
        href: "/vendors",
        icon: Users,
        visible: hasPermission("view", "vendors"),
      },
      {
        title: "Project Master List",
        href: "/project-master",
        icon: Folder,
        visible: hasPermission("view", "projects"),
      },
      {
        title: "New Request",
        href: "/requests/new",
        icon: FileText,
        visible: hasPermission("create", "purchase_request"),
      },
      {
        title: "Pending Reviews",
        href: "/reviews",
        icon: ClipboardCheck,
        visible: hasPermission("view", "purchase_request") || 
                hasPermission("approve", "purchase_request"),
      },
      {
        title: "Approved Documents",
        href: "/documents",
        icon: FileOutput,
        visible: hasPermission("view", "approved_documents"),
      },
      {
        title: "Settings",
        href: "/settings",
        icon: Settings,
        visible: user.role === "administrator",
      },
    ];

    return allNavItems.filter(item => item.visible);
  };

  const navItems = getNavItems();

  return (
    <div className="hidden border-r bg-acmv-purple-light/30 lg:flex lg:flex-col lg:w-64">
      <div className="flex h-16 items-center border-b px-6">
        <h2 className="text-lg font-semibold">Procurement System</h2>
      </div>
      <nav className="flex-1 overflow-y-auto py-2 px-2">
        <div className="mb-4">
          {/* Role Switcher at the top of sidebar */}
          {user && <RoleSwitcher />}
        </div>
        <div className="grid gap-1">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium",
                  "transition-all hover:bg-acmv-purple-light hover:text-acmv-purple-dark",
                  isActive 
                    ? "bg-acmv-purple text-primary-foreground" 
                    : "text-foreground/70"
                )
              }
            >
              <item.icon className="h-5 w-5" />
              {item.title}
            </NavLink>
          ))}
        </div>
      </nav>
      {user && (
        <div className="mt-auto p-4">
          <div className="rounded-lg bg-acmv-purple-light p-4">
            <p className="text-sm text-acmv-purple-dark font-medium">
              Current role: {user.role.charAt(0).toUpperCase() + user.role.slice(1).replace("_", " ")}
            </p>
            <p className="text-xs mt-1">Need help? Contact system administrator at support@acmvprocure.com</p>
          </div>
        </div>
      )}
    </div>
  );
}

