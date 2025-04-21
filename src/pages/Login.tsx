
import { useNavigate } from "react-router-dom";
import { useUser } from "@/contexts/UserContext";
import { UserRole, getRoleName } from "@/lib/roles";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const roles: UserRole[] = [
  "administrator",
  "director",
  "hod",
  "pic",
  "qs_coordinator",
  "finance_officer",
];

const dummyUsers = {
  administrator: {
    id: "1",
    name: "Alice Admin",
    email: "alice@acmvprocure.com",
    role: "administrator",
    avatar: "",
  },
  director: {
    id: "2",
    name: "David Director",
    email: "david@acmvprocure.com",
    role: "director",
    avatar: "",
  },
  hod: {
    id: "3",
    name: "Helen Hod",
    email: "helen@acmvprocure.com",
    role: "hod",
    avatar: "",
  },
  pic: {
    id: "4",
    name: "Peter PIC",
    email: "peter@acmvprocure.com",
    role: "pic",
    avatar: "",
  },
  qs_coordinator: {
    id: "5",
    name: "Quinn QS",
    email: "quinn@acmvprocure.com",
    role: "qs_coordinator",
    avatar: "",
  },
  finance_officer: {
    id: "6",
    name: "Fiona Finance",
    email: "fiona@acmvprocure.com",
    role: "finance_officer",
    avatar: "",
  },
};

export default function Login() {
  const navigate = useNavigate();
  const { setUser } = useUser();

  const handleLogin = (role: UserRole) => {
    setUser(dummyUsers[role]);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-acmv-purple-light/30">
      <Card className="max-w-lg w-full p-8 shadow-lg">
        <h1 className="text-3xl font-bold mb-2 text-center">
          ACMV Procure Flow Login (Demo)
        </h1>
        <p className="text-center mb-8 text-muted-foreground">
          Select a role to log in for testing dashboards and permissions.
        </p>
        <div className="grid gap-4">
          {roles.map((role) => (
            <Button
              key={role}
              className="w-full flex justify-between items-center"
              onClick={() => handleLogin(role)}
              variant="outline"
            >
              <span>{getRoleName(role)}</span>
              <span className="text-xs text-muted-foreground ml-4">
                {dummyUsers[role].email}
              </span>
            </Button>
          ))}
        </div>
      </Card>
    </div>
  );
}
