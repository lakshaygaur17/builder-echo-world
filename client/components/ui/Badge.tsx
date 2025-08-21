import { ReactNode, HTMLAttributes } from "react";
import { cn } from "../lib/utils";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: "default" | "success" | "warning" | "danger" | "info" | "outline";
  size?: "sm" | "md" | "lg";
  rounded?: boolean;
}

const badgeVariants = {
  default: "bg-datalab-grey-lighter text-datalab-grey-darkest",
  success: "bg-datalab-green text-white",
  warning: "bg-datalab-orange text-white", 
  danger: "bg-datalab-red text-white",
  info: "bg-datalab-primary text-datalab-primary-dark",
  outline: "border border-datalab-grey-medium bg-white text-datalab-grey-darkest"
};

const badgeSizes = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-3 py-1 text-sm",
  lg: "px-4 py-1.5 text-base"
};

export function Badge({ 
  children, 
  variant = "default", 
  size = "sm",
  rounded = false,
  className,
  ...props 
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center font-normal",
        rounded ? "rounded-full" : "rounded",
        badgeVariants[variant],
        badgeSizes[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

// Specialized badge for campaign stages
interface StageBadgeProps extends Omit<BadgeProps, 'variant'> {
  stage: string;
}

export function StageBadge({ stage, ...props }: StageBadgeProps) {
  const getVariantForStage = (stage: string) => {
    if (stage.includes("Executed")) return "success";
    if (stage.includes("Output")) return "danger";
    if (stage.includes("Metadata")) return "info";
    return "default";
  };

  return (
    <Badge variant={getVariantForStage(stage)} rounded {...props}>
      {stage}
    </Badge>
  );
}
