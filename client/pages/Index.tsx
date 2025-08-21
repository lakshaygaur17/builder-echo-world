import { Sidebar } from "../components/Sidebar";
import { DashboardContent } from "../components/DashboardContent";

export default function Index() {
  return (
    <div className="flex w-full h-screen bg-datalab-grey-light">
      <Sidebar />
      <DashboardContent />
    </div>
  );
}
