import { forwardRef, InputHTMLAttributes } from "react";
import { Calendar } from "lucide-react";
import { cn } from "../../lib/utils";

interface DatePickerProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  ({ label, error, fullWidth = false, className, ...props }, ref) => {
    return (
      <div className={cn("flex flex-col gap-1", fullWidth && "w-full")}>
        {label && (
          <label className="text-sm font-medium text-datalab-grey-darker">
            {label}
          </label>
        )}
        <div className="relative">
          <input
            ref={ref}
            type="date"
            className={cn(
              "flex h-10 px-3 py-2 text-sm bg-white border border-datalab-grey-medium rounded-lg",
              "placeholder:text-datalab-grey-dark",
              "focus:outline-none focus:ring-2 focus:ring-datalab-primary focus:border-transparent",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              // Hide the default date picker icon in some browsers
              "[&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-3 [&::-webkit-calendar-picker-indicator]:w-5 [&::-webkit-calendar-picker-indicator]:h-5 [&::-webkit-calendar-picker-indicator]:cursor-pointer",
              error && "border-datalab-red focus:ring-datalab-red",
              "pr-10", // Make room for custom icon
              className,
            )}
            {...props}
          />
          <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-datalab-grey-dark pointer-events-none" />
        </div>
        {error && <span className="text-xs text-datalab-red">{error}</span>}
      </div>
    );
  },
);

DatePicker.displayName = "DatePicker";

// Alternative DateInput for simple date inputs with placeholder text
interface DateInputProps extends DatePickerProps {
  placeholder?: string;
}

export const DateInput = forwardRef<HTMLInputElement, DateInputProps>(
  (
    {
      label,
      error,
      fullWidth = false,
      placeholder = "mm/dd/yyyy",
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <div className={cn("flex flex-col gap-1", fullWidth && "w-full")}>
        {label && (
          <label className="text-sm font-medium text-datalab-grey-darker">
            {label}
          </label>
        )}
        <div className="relative">
          <input
            ref={ref}
            type="text"
            placeholder={placeholder}
            className={cn(
              "flex h-10 px-3 py-2 text-sm bg-white border border-datalab-grey-medium rounded-lg",
              "placeholder:text-datalab-grey-dark",
              "focus:outline-none focus:ring-2 focus:ring-datalab-primary focus:border-transparent",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              error && "border-datalab-red focus:ring-datalab-red",
              "pr-10", // Make room for icon
              className,
            )}
            {...props}
          />
          <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-datalab-grey-dark pointer-events-none" />
        </div>
        {error && <span className="text-xs text-datalab-red">{error}</span>}
      </div>
    );
  },
);

DateInput.displayName = "DateInput";
