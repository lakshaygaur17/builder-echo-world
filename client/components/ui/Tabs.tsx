import { ReactNode, createContext, useContext } from "react";
import { cn } from "../../lib/utils";

interface TabsContextType {
  activeTab: string;
  onTabChange: (value: string) => void;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

interface TabsProps {
  children: ReactNode;
  value: string;
  onValueChange: (value: string) => void;
  className?: string;
}

interface TabsListProps {
  children: ReactNode;
  className?: string;
}

interface TabsTriggerProps {
  children: ReactNode;
  value: string;
  disabled?: boolean;
  className?: string;
}

interface TabsContentProps {
  children: ReactNode;
  value: string;
  className?: string;
}

export function Tabs({ children, value, onValueChange, className }: TabsProps) {
  return (
    <TabsContext.Provider value={{ activeTab: value, onTabChange: onValueChange }}>
      <div className={cn("w-full", className)}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

export function TabsList({ children, className }: TabsListProps) {
  return (
    <div className={cn(
      "inline-flex h-10 items-center justify-center rounded-lg bg-datalab-grey-light p-1",
      className
    )}>
      {children}
    </div>
  );
}

export function TabsTrigger({ children, value, disabled = false, className }: TabsTriggerProps) {
  const context = useContext(TabsContext);
  
  if (!context) {
    throw new Error("TabsTrigger must be used within a Tabs component");
  }

  const { activeTab, onTabChange } = context;
  const isActive = activeTab === value;

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => !disabled && onTabChange(value)}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium ring-offset-background transition-all",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",
        isActive 
          ? "bg-datalab-grey-darkest text-datalab-brand-white shadow-sm" 
          : "text-datalab-grey-dark hover:bg-datalab-grey-lighter hover:text-datalab-grey-darkest",
        className
      )}
    >
      {children}
    </button>
  );
}

export function TabsContent({ children, value, className }: TabsContentProps) {
  const context = useContext(TabsContext);
  
  if (!context) {
    throw new Error("TabsContent must be used within a Tabs component");
  }

  const { activeTab } = context;

  if (activeTab !== value) {
    return null;
  }

  return (
    <div className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}>
      {children}
    </div>
  );
}

// Alternative horizontal tab style for the campaign detail page
interface HorizontalTabsProps {
  children: ReactNode;
  value: string;
  onValueChange: (value: string) => void;
  className?: string;
}

interface HorizontalTabProps {
  children: ReactNode;
  value: string;
  disabled?: boolean;
  className?: string;
}

export function HorizontalTabs({ children, value, onValueChange, className }: HorizontalTabsProps) {
  return (
    <TabsContext.Provider value={{ activeTab: value, onTabChange: onValueChange }}>
      <div className={cn("w-full", className)}>
        <div className="border-b border-datalab-grey-lightest">
          <div className="flex space-x-8">
            {children}
          </div>
        </div>
      </div>
    </TabsContext.Provider>
  );
}

export function HorizontalTab({ children, value, disabled = false, className }: HorizontalTabProps) {
  const context = useContext(TabsContext);
  
  if (!context) {
    throw new Error("HorizontalTab must be used within a HorizontalTabs component");
  }

  const { activeTab, onTabChange } = context;
  const isActive = activeTab === value;

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => !disabled && onTabChange(value)}
      className={cn(
        "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors",
        "focus:outline-none",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        isActive
          ? "border-datalab-grey-darkest text-datalab-grey-darkest bg-datalab-grey-darkest text-white px-4 rounded-t-md"
          : "border-transparent text-datalab-grey-dark hover:text-datalab-grey-darkest hover:border-datalab-grey-medium bg-datalab-grey-lighter px-4 rounded-t-md",
        className
      )}
    >
      {children}
    </button>
  );
}
