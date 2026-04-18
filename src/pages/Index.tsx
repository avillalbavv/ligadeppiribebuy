import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ResultsSection from "@/components/ResultsSection";
import StandingsSection from "@/components/StandingsSection";
import UpcomingMatches from "@/components/UpcomingMatches";
import FixtureSection from "@/components/FixtureSection";
import ResolucionesSection from "@/components/ResolucionesSection";
import PlayerStatsSection from "@/components/PlayerStatsSection";
import SeriesSection from "@/components/SeriesSection";
import ClubsSection from "@/components/ClubsSection";
import EventSection from "@/components/EventSection";
import NewsSection from "@/components/NewsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <EventSection />
      <AboutSection />
      <ResultsSection />
      <StandingsSection />
      <UpcomingMatches />
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
