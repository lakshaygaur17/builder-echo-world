import { ReactNode, HTMLAttributes } from "react";
import { cn } from "../lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: "default" | "bordered" | "shadow" | "elevated";
  padding?: "none" | "sm" | "md" | "lg";
}

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const cardVariants = {
  default: "bg-white",
  bordered: "bg-white border border-datalab-grey-medium",
  shadow: "bg-white shadow-lg",
  elevated: "bg-white shadow-2xl"
};

const cardPadding = {
  none: "",
  sm: "p-3",
  md: "p-4", 
  lg: "p-6"
};

export function Card({ 
  children, 
  variant = "default", 
  padding = "md",
  className,
  ...props 
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg",
        cardVariants[variant],
        cardPadding[padding],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className, ...props }: CardHeaderProps) {
  return (
    <div className={cn("flex justify-between items-center", className)} {...props}>
      {children}
    </div>
  );
}

export function CardContent({ children, className, ...props }: CardContentProps) {
  return (
    <div className={cn("flex-1", className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className, ...props }: CardFooterProps) {
  return (
    <div className={cn("flex justify-end items-center gap-2", className)} {...props}>
      {children}
    </div>
  );
}
