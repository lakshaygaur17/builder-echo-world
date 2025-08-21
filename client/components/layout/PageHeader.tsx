import { ReactNode } from "react";
import { cn } from "../lib/utils";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
  breadcrumb?: ReactNode;
  className?: string;
}

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

export function PageHeader({ 
  title, 
  subtitle, 
  actions, 
  breadcrumb,
  className 
}: PageHeaderProps) {
  return (
    <div className={cn("flex justify-between items-start", className)}>
      <div className="flex flex-col gap-1">
        {breadcrumb}
        <h1 className="text-datalab-grey-darkest font-medium text-2xl">{title}</h1>
        {subtitle && (
          <p className="text-datalab-grey-dark text-sm">{subtitle}</p>
        )}
      </div>
      {actions && (
        <div className="flex items-center gap-2">
          {actions}
        </div>
      )}
    </div>
  );
}

export function PageContainer({ children, className }: PageContainerProps) {
  return (
    <div className={cn(
      "flex h-screen p-4 flex-col items-start gap-4 flex-1",
      className
    )}>
      <div className="flex p-6 pt-6 pb-5 pr-5 flex-col items-start gap-8 flex-1 w-full rounded-2xl bg-white shadow-2xl">
        {children}
      </div>
    </div>
  );
}

// Stats/Metrics component for dashboard pages
interface StatsCardProps {
  title: string;
  value: string | number;
  color?: "default" | "success" | "warning" | "danger";
  icon?: ReactNode;
  change?: {
    value: string;
    type: "increase" | "decrease";
  };
}

interface StatsGridProps {
  stats: StatsCardProps[];
  className?: string;
}

const statColors = {
  default: "text-datalab-grey-darkest",
  success: "text-datalab-green",
  warning: "text-datalab-orange", 
  danger: "text-datalab-red"
};

export function StatsCard({ 
  title, 
  value, 
  color = "default", 
  icon, 
  change 
}: StatsCardProps) {
  return (
    <div className="flex flex-col items-start gap-4 flex-1 p-4 border-l border-datalab-grey-medium first:border-l-0">
      <div className="flex items-center gap-2">
        {icon}
        <span className="text-datalab-grey-darker text-sm font-normal">{title}</span>
      </div>
      <div className="flex items-end gap-2">
        <span className={cn("text-4xl font-semibold", statColors[color])}>
          {value}
        </span>
        {change && (
          <span className={cn(
            "text-sm font-medium",
            change.type === "increase" ? "text-datalab-green" : "text-datalab-red"
          )}>
            {change.type === "increase" ? "+" : "-"}{change.value}
          </span>
        )}
      </div>
    </div>
  );
}

export function StatsGrid({ stats, className }: StatsGridProps) {
  return (
    <div className={cn(
      "flex items-center w-full rounded-xl border border-datalab-grey-medium bg-white",
      className
    )}>
      {stats.map((stat, index) => (
        <StatsCard key={index} {...stat} />
      ))}
    </div>
  );
}
