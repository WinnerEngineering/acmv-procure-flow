
import { ReactNode } from "react";
import { SidebarNav } from "./SidebarNav";
import { UserNav } from "./UserNav";
import { Bell, CheckSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useUser } from "@/contexts/UserContext";
import { RoleAuthorization } from "@/components/auth/RoleAuthorization";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const { user } = useUser();

  return (
    <div className="min-h-screen bg-background">
      <div className="flex min-h-screen">
        <SidebarNav />
        <div className="flex-1">
          <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-16 items-center px-4 md:px-6">
              <div className="flex-1">
                <h1 className="text-xl font-semibold">ACMV Procure Flow</h1>
                {user && (
                  <p className="text-xs text-muted-foreground">
                    Logged in as {user.name} ({user.email})
                  </p>
                )}
              </div>
              <div className="flex items-center gap-4">
                <RoleAuthorization 
                  requiredPermission={{ action: "view", resource: "purchase_request" }}
                >
                  <Button variant="outline" size="icon">
                    <Bell className="h-5 w-5" />
                  </Button>
                </RoleAuthorization>
                
                <RoleAuthorization 
                  allowedRoles={["administrator", "director", "hod"]}
                >
                  <Button variant="outline" size="icon">
                    <CheckSquare className="h-5 w-5" />
                  </Button>
                </RoleAuthorization>
                
                <UserNav />
              </div>
            </div>
          </header>
          <main className="flex-1 p-4 md:p-6 lg:p-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
