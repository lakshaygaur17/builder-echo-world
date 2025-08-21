import { ReactNode } from "react";
import { Sidebar } from "../Sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
  sidebar?: ReactNode;
}

export function DashboardLayout({ children, sidebar }: DashboardLayoutProps) {
  return (
    <div className="flex w-full h-screen bg-datalab-grey-light">
      {sidebar || <Sidebar />}
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
}
