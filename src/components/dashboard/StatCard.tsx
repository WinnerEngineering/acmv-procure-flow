
import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  icon?: ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
  variant?: "default" | "purple" | "gray" | "green" | "yellow" | "orange";
}

export function StatCard({
  title,
  value,
  icon,
  trend,
  className,
  variant = "default",
}: StatCardProps) {
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
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          {icon && <div className="rounded-full bg-background p-2">{icon}</div>}
          {trend && (
            <div
              className={cn(
                "rounded-full px-2 py-1 text-xs font-medium",
                trend.isPositive ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
              )}
            >
              {trend.isPositive ? "+" : "-"}
              {trend.value}%
            </div>
          )}
        </div>
        <div className="mt-3">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="mt-1 text-2xl font-bold">{value}</p>
        </div>
      </CardContent>
    </Card>
  );
}
