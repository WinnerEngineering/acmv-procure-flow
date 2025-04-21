
import { ReactNode } from "react";
import { useUser } from "@/contexts/UserContext";

interface RoleAuthorizationProps {
  children: ReactNode;
  allowedRoles?: string[];
  requiredPermission?: {
    action: string;
    resource: string;
  };
  fallback?: ReactNode;
}

export function RoleAuthorization({
  children,
  allowedRoles,
  requiredPermission,
  fallback = null
}: RoleAuthorizationProps) {
  const { user, hasPermission } = useUser();

  if (!user) {
    return <>{fallback}</>;
  }

  // Check role-based access
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <>{fallback}</>;
  }

  // Check permission-based access
  if (
    requiredPermission &&
    !hasPermission(requiredPermission.action, requiredPermission.resource)
  ) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}
