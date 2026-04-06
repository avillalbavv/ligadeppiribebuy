import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StandingsSection from "@/components/StandingsSection";
import UpcomingMatches from "@/components/UpcomingMatches";
import FixtureSection from "@/components/FixtureSection";
import SeriesSection from "@/components/SeriesSection";
import ClubsSection from "@/components/ClubsSection";
import NewsSection from "@/components/NewsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StandingsSection />
      <UpcomingMatches />
      <FixtureSection />
      <SeriesSection />
      <ClubsSection />
      <NewsSection />
      <FooterSection />
    </div>
  );
};

export default Index;
