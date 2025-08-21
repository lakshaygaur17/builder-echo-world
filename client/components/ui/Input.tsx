import { InputHTMLAttributes, ReactNode, forwardRef } from "react";
import { Search } from "lucide-react";
import { cn } from "../../lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  fullWidth?: boolean;
}

interface SearchInputProps extends Omit<InputProps, 'startIcon' | 'type'> {
  onSearch?: (value: string) => void;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  error,
  startIcon,
  endIcon,
  fullWidth = false,
  className,
  ...props
}, ref) => {
  return (
    <div className={cn("flex flex-col gap-1", fullWidth && "w-full")}>
      {label && (
        <label className="text-sm font-medium text-datalab-grey-darker">
          {label}
        </label>
      )}
      <div className="relative">
        {startIcon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-datalab-grey-dark">
            {startIcon}
          </div>
        )}
        <input
          ref={ref}
          className={cn(
            "flex h-10 px-3 py-2 text-sm bg-white border border-datalab-grey-medium rounded-lg",
            "placeholder:text-datalab-grey-dark",
            "focus:outline-none focus:ring-2 focus:ring-datalab-primary focus:border-transparent",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            startIcon && "pl-10",
            endIcon && "pr-10",
            error && "border-datalab-red focus:ring-datalab-red",
            className
          )}
          {...props}
        />
        {endIcon && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-datalab-grey-dark">
            {endIcon}
          </div>
        )}
      </div>
      {error && (
        <span className="text-xs text-datalab-red">{error}</span>
      )}
    </div>
  );
});

Input.displayName = "Input";

export function SearchInput({ 
  placeholder = "Search", 
  onSearch,
  className,
  ...props 
}: SearchInputProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onSearch) {
      onSearch(e.currentTarget.value);
    }
  };

  return (
    <div className={cn(
      "flex h-9 px-4 pl-2 items-center gap-2 rounded-lg bg-datalab-grey-lighter",
      className
    )}>
      <Search className="w-6 h-6 text-datalab-grey-dark" />
      <input
        type="text"
        placeholder={placeholder}
        className="flex-1 bg-transparent text-datalab-grey-dark text-sm placeholder:text-datalab-grey-dark focus:outline-none"
        onKeyDown={handleKeyDown}
        {...props}
      />
    </div>
  );
}

// Specialized filter input component
interface FilterInputProps extends InputProps {
  filters?: string[];
  onFilterChange?: (filters: string[]) => void;
}

export function FilterInput({ 
  filters = [], 
  onFilterChange,
  className,
  ...props 
}: FilterInputProps) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <div className="flex px-5 justify-center items-center gap-2.5 rounded-md border border-datalab-grey-medium bg-white">
        <span className="text-datalab-grey-darkest text-sm font-medium py-2">Filters</span>
      </div>
      
      {filters.map((filter, index) => (
        <div 
          key={index}
          className="flex h-7 px-2 pl-2 items-center gap-1 rounded border border-gray-400 bg-datalab-grey-lighter"
        >
          <span className="text-datalab-grey-darkest text-xs font-normal">{filter}</span>
          <button 
            onClick={() => {
              const newFilters = filters.filter((_, i) => i !== index);
              onFilterChange?.(newFilters);
            }}
            className="ml-1 text-datalab-grey-dark hover:text-datalab-grey-darkest"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
}
