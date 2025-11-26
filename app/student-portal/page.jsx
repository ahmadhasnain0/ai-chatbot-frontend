
import PortalHeader from "@/src/component/student-portal/PortalHeader";
import AIAssistantCard from "@/src/component/student-portal/AIAssistantCard";
import ServiceGrid from "@/src/component/student-portal/ServiceGrid";
import DashboardStats from "@/src/component/student-portal/DashboardStats";
import QuickLinks from "@/src/component/student-portal/QuickLinks";
import AuthGuard from "@/src/component/AuthGuard";

export default function StudentPortal() {
  return (
    <main className="bg-white">
      <AuthGuard>
      <PortalHeader />
            <AIAssistantCard />
      <DashboardStats />
      <QuickLinks />

      <ServiceGrid />
      </AuthGuard>
    </main>
  );
}
