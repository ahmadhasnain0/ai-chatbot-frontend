
import PortalHeader from "@/src/component/student-portal/PortalHeader";
import AIAssistantCard from "@/src/component/student-portal/AIAssistantCard";
import ServiceGrid from "@/src/component/student-portal/ServiceGrid";
import DashboardStats from "@/src/component/student-portal/DashboardStats";
import QuickLinks from "@/src/component/student-portal/QuickLinks";

export default function StudentPortal() {
  return (
    <main className="bg-white">
      <PortalHeader />
            <AIAssistantCard />
      <DashboardStats />
      <QuickLinks />

      <ServiceGrid />
    </main>
  );
}
