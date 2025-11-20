import { Header } from "@/src/component/home/Header";
import { Hero } from "@/src/component/home/Hero";
import { StatsSection } from "@/src/component/home/StatsSection";
import { WhyStudentsLoveSection } from "@/src/component/home/WhyStudentsLoveSection";
import { AcademicProgrammesSection } from "@/src/component/home/AcademicProgrammesSection";
import { AnnouncementsSection } from "@/src/component/home/AnnouncementsSection";
import { ProgramsSection } from "@/src/component/home/ProgramsSection";
import { CampusLifeSection } from "@/src/component/home/CampusLifeSection";
import { NewsEventsSection } from "@/src/component/home/NewsEventsSection";
import { ContactSection } from "@/src/component/home/ContactSection";
import { Footer } from "@/src/component/home/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <StatsSection />
      <WhyStudentsLoveSection />
      <AcademicProgrammesSection />
      <AnnouncementsSection />
      <ProgramsSection />
      <CampusLifeSection />
      <NewsEventsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
