
export type UserRole = 
  | "administrator" 
  | "director" 
  | "hod" 
  | "pic"
  | "qs_coordinator"
  | "finance_officer";

export interface Permission {
  action: string;
  resource: string;
}

// Define permissions for each role
const rolePermissions: Record<UserRole, Permission[]> = {
  administrator: [
    { action: "manage", resource: "all" },
    { action: "view", resource: "all" },
    { action: "approve", resource: "all" },
  ],
  director: [
    { action: "view", resource: "all" },
    { action: "approve", resource: "purchase_request" },
    { action: "reject", resource: "purchase_request" },
    { action: "view", resource: "reports" },
  ],
  hod: [
    { action: "view", resource: "all" },
    { action: "view", resource: "reports" },
  ],
  pic: [
    { action: "create", resource: "purchase_request" },
    { action: "view", resource: "purchase_request" },
    { action: "edit", resource: "purchase_request" },
    { action: "view", resource: "vendors" },
    { action: "view", resource: "projects" },
  ],
  qs_coordinator: [
    { action: "view", resource: "purchase_request" },
    { action: "validate", resource: "purchase_request" },
    { action: "manage", resource: "contract_documents" },
    { action: "manage", resource: "budgets" },
    { action: "view", resource: "vendors" },
    { action: "view", resource: "projects" },
  ],
  finance_officer: [
    { action: "view", resource: "approved_documents" },
    { action: "export", resource: "approved_documents" },
    { action: "manage", resource: "payments" },
    { action: "view", resource: "vendors" },
    { action: "view", resource: "projects" },
  ],
};

// Check if a role has a specific permission
export function hasPermission(
  role: UserRole, 
  action: string, 
  resource: string
): boolean {
  const permissions = rolePermissions[role];
  
  if (!permissions) return false;
  
  return permissions.some(
    (permission) => 
      (permission.action === action || permission.action === "manage") && 
      (permission.resource === resource || permission.resource === "all")
  );
}

// Role descriptions for UI display
export const roleDescriptions: Record<UserRole, string> = {
  administrator: "Full system control, including user management and configuration",
  director: "Final approver for all purchase requests and document issuance",
  hod: "Executive monitoring access with view-only permissions",
  pic: "Project initiator who creates and manages purchase requests",
  qs_coordinator: "Manages budgets and contract documentation for projects",
  finance_officer: "Handles financial processing of approved documents",
};

// Get readable role name for display
export function getRoleName(role: UserRole): string {
  switch (role) {
    case "administrator": return "Administrator";
    case "director": return "Director";
    case "hod": return "HOD (C-Suite)";
    case "pic": return "Project In-Charge (PIC)";
    case "qs_coordinator": return "QS Coordinator";
    case "finance_officer": return "Finance Officer";
    default: return role;
  }
}
