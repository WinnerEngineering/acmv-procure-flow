
import React, { createContext, useContext, useState, ReactNode } from "react";
import { UserRole, hasPermission } from "@/lib/roles";

interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  hasPermission: (action: string, resource: string) => boolean;
  isLoading: boolean;
}

const defaultUser: User = {
  id: "1",
  name: "John Doe",
  email: "john@acmvprocure.com",
  role: "administrator", // Default role for demo
  avatar: ""
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(defaultUser);
  const [isLoading, setIsLoading] = useState(false);

  // Check if the current user has a specific permission
  const checkPermission = (action: string, resource: string): boolean => {
    if (!user) return false;
    return hasPermission(user.role, action, resource);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        hasPermission: checkPermission,
        isLoading
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
