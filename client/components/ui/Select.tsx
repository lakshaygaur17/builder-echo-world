import { useState, useRef, useEffect, ReactNode } from "react";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "../../lib/utils";

interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface SelectProps {
  options: SelectOption[];
  value?: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  label?: string;
  fullWidth?: boolean;
  className?: string;
}

export function Select({
  options,
  value,
  onValueChange,
  placeholder = "Select...",
  disabled = false,
  error,
  label,
  fullWidth = false,
  className,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find((option) => option.value === value);

  const handleOptionClick = (optionValue: string) => {
    onValueChange(optionValue);
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsOpen(!isOpen);
    } else if (e.key === "Escape") {
      setIsOpen(false);
    } else if (e.key === "ArrowDown" && !isOpen) {
      setIsOpen(true);
    }
  };

  return (
    <div className={cn("relative", fullWidth && "w-full", className)}>
      {label && (
        <label className="block text-sm font-medium text-datalab-grey-darker mb-1">
          {label}
        </label>
      )}

      <div ref={containerRef} className="relative">
        <button
          type="button"
          onClick={() => !disabled && setIsOpen(!isOpen)}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          className={cn(
            "flex h-10 w-full items-center justify-between rounded-lg border px-3 py-2 text-sm bg-white",
            "focus:outline-none focus:ring-2 focus:ring-datalab-primary focus:border-transparent",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            error
              ? "border-datalab-red focus:ring-datalab-red"
              : "border-datalab-grey-medium",
            isOpen && "border-datalab-primary ring-2 ring-datalab-primary",
          )}
        >
          <span
            className={cn(
              selectedOption
                ? "text-datalab-grey-darkest"
                : "text-datalab-grey-dark",
            )}
          >
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-transform text-datalab-grey-dark",
              isOpen && "rotate-180",
            )}
          />
        </button>

        {/* Dropdown */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 z-50 mt-1 max-h-60 overflow-auto rounded-lg border border-datalab-grey-medium bg-white shadow-lg">
            {options.length === 0 ? (
              <div className="px-3 py-2 text-sm text-datalab-grey-dark">
                No options available
              </div>
            ) : (
              options.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() =>
                    !option.disabled && handleOptionClick(option.value)
                  }
                  disabled={option.disabled}
                  className={cn(
                    "flex w-full items-center justify-between px-3 py-2 text-sm text-left",
                    "hover:bg-datalab-grey-light focus:bg-datalab-grey-light focus:outline-none",
                    "disabled:opacity-50 disabled:cursor-not-allowed",
                    value === option.value &&
                      "bg-datalab-primary/10 text-datalab-primary-dark font-medium",
                  )}
                >
                  <span>{option.label}</span>
                  {value === option.value && (
                    <Check className="h-4 w-4 text-datalab-green" />
                  )}
                </button>
              ))
            )}
          </div>
        )}
      </div>

      {error && <p className="mt-1 text-xs text-datalab-red">{error}</p>}
    </div>
  );
}

// Simple select for basic use cases
interface SimpleSelectProps {
  children: ReactNode;
  value?: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function SimpleSelect({
  children,
  value,
  onValueChange,
  placeholder,
  className,
}: SimpleSelectProps) {
  return (
    <select
      value={value || ""}
      onChange={(e) => onValueChange(e.target.value)}
      className={cn(
        "flex h-10 w-full rounded-lg border border-datalab-grey-medium px-3 py-2 text-sm bg-white",
        "focus:outline-none focus:ring-2 focus:ring-datalab-primary focus:border-transparent",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className,
      )}
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {children}
    </select>
  );
}
