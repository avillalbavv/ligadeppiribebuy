import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CampeonatoHonorBanner from "@/components/CampeonatoHonorBanner";
import UpcomingMatches from "@/components/UpcomingMatches";
import ResultsSection from "@/components/ResultsSection";
import EventSection from "@/components/EventSection";
import AboutSection from "@/components/AboutSection";
import StandingsSection from "@/components/StandingsSection";
import FixtureSection from "@/components/FixtureSection";
import ResolucionesSection from "@/components/ResolucionesSection";
import PlayerStatsSection from "@/components/PlayerStatsSection";
import SeriesSection from "@/components/SeriesSection";
import ClubsSection from "@/components/ClubsSection";
import NewsSection from "@/components/NewsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      {/* 1. Campeonato de Honor 2026 — Banner principal */}
      <CampeonatoHonorBanner />
      {/* 2. Próximos eventos — Fecha 7 */}
      <UpcomingMatches />
      {/* 3. Resultados — Fecha 6 */}
      <ResultsSection />
      <EventSection />
      <AboutSection />
      <StandingsSection />
      <FixtureSection />
      <ResolucionesSection />
      <PlayerStatsSection />
      <SeriesSection />
      <ClubsSection />
      <NewsSection />
      <FooterSection />
    </div>
  );
};

export default Index;
