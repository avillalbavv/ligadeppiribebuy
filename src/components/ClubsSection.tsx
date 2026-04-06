import { clubs } from "@/data/fixtures";
import { Users } from "lucide-react";

const ClubsSection = () => {
  return (
    <section id="clubes" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-3">
            <Users className="w-5 h-5 text-secondary" />
            <span className="text-xs uppercase tracking-widest text-secondary font-semibold">Nuestros Clubes</span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground">
            Clubes Participantes
          </h2>
          <p className="text-muted-foreground text-sm mt-2">19 instituciones compiten en el torneo 2026</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
          {clubs.map((club, i) => (
            <div
              key={club}
              className={`glass-card p-4 text-center hover-lift animate-fade-up delay-${((i % 5) + 1) * 100}`}
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/30 border border-primary/50 flex items-center justify-center">
                <span className="font-heading text-sm font-bold text-secondary">
                  {club.charAt(0)}
                </span>
              </div>
              <span className="text-xs font-medium text-foreground leading-tight block">{club}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClubsSection;
