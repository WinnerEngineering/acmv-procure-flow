
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useUser } from "@/contexts/UserContext";
import { UserRole, getRoleName } from "@/lib/roles";
import { useToast } from "@/hooks/use-toast";

export function RoleSwitcher() {
  const { user, setUser } = useUser();
  const { toast } = useToast();
  
  if (!user) return null;

  const roles: UserRole[] = [
    "administrator",
    "director",
    "hod",
    "pic",
    "qs_coordinator",
    "finance_officer"
  ];

  const handleRoleChange = (role: string) => {
    setUser({ 
      ...user, 
      role: role as UserRole 
    });
    
    toast({
      title: "Role changed",
      description: `You are now acting as ${getRoleName(role as UserRole)}`,
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-full">
          Switch Role (Demo)
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Switch Role</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={user.role} onValueChange={handleRoleChange}>
          {roles.map((role) => (
            <DropdownMenuRadioItem key={role} value={role}>
              {getRoleName(role)}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
