import { ReactNode, ButtonHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "outline"
    | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

const buttonVariants = {
  primary:
    "bg-datalab-primary text-datalab-primary-dark hover:bg-datalab-primary/90",
  secondary:
    "bg-datalab-grey-lighter text-datalab-grey-darkest hover:bg-datalab-grey-medium",
  success: "bg-datalab-green text-white hover:bg-datalab-green-dark",
  danger: "bg-datalab-red text-white hover:bg-datalab-red/90",
  outline:
    "border border-datalab-grey-medium bg-white text-datalab-grey-darkest hover:bg-datalab-grey-light",
  ghost: "text-datalab-grey-darkest hover:bg-datalab-grey-light",
};

const buttonSizes = {
  sm: "h-8 px-3 text-xs",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-6 text-base",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-datalab-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
        buttonVariants[variant],
        buttonSizes[size],
        fullWidth && "w-full",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
