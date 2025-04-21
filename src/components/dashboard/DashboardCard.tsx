
import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface DashboardCardProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  className?: string;
  variant?: "default" | "purple" | "gray" | "green" | "yellow" | "orange";
  children: ReactNode;
}

export function DashboardCard({
  title,
  description,
  icon,
  className,
  variant = "default",
  children,
}: DashboardCardProps) {
  const variantStyles = {
    default: "",
    purple: "border-acmv-purple bg-acmv-purple-light/30",
    gray: "border-acmv-gray bg-acmv-gray-light/30",
    green: "border-green-300 bg-acmv-green/30",
    yellow: "border-yellow-300 bg-acmv-yellow/30",
    orange: "border-orange-300 bg-acmv-orange/30",
  };

  return (
    <Card className={cn(variantStyles[variant], className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div>
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          {description && (
            <CardDescription>{description}</CardDescription>
          )}
        </div>
        {icon && <div>{icon}</div>}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
