
import { cn } from "@/lib/utils";
import { 
  Home, 
  Users, 
  FileText, 
  ClipboardCheck, 
  FileOutput,
  Settings,
  Database,
  Folder
} from "lucide-react";
import { NavLink } from "react-router-dom";

interface SidebarNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SidebarNav({ className, ...props }: SidebarNavProps) {
  const navItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: Home,
    },
    {
      title: "Vendor Management",
      href: "/vendors",
      icon: Users,
    },
    {
      title: "Vendor Master List",
      href: "/vendor-master",
      icon: Database,
    },
    {
      title: "Project Master List",
      href: "/project-master",
      icon: Folder,
    },
    {
      title: "New Request",
      href: "/requests/new",
      icon: FileText,
    },
    {
      title: "Pending Reviews",
      href: "/reviews",
      icon: ClipboardCheck,
    },
    {
      title: "Approved Documents",
      href: "/documents",
      icon: FileOutput,
    },
    {
      title: "Settings",
      href: "/settings",
      icon: Settings,
    },
  ];

  return (
    <div className="hidden border-r bg-acmv-purple-light/30 lg:block lg:w-64">
      <div className="flex h-full flex-col gap-2">
        <div className="flex h-16 items-center border-b px-6">
          <h2 className="text-lg font-semibold">Procurement System</h2>
        </div>
        <div className="flex-1 py-2">
          <nav className="grid gap-1 px-2">
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
          </nav>
        </div>
        <div className="mt-auto p-4">
          <div className="rounded-lg bg-acmv-purple-light p-4">
            <p className="text-sm text-acmv-purple-dark font-medium">Need help?</p>
            <p className="text-xs mt-1">Contact system administrator at support@acmvprocure.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
