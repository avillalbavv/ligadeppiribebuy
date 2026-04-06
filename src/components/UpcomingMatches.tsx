import { upcomingMatches } from "@/data/fixtures";
import { Flame } from "lucide-react";

const UpcomingMatches = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-3">
            <Flame className="w-5 h-5 text-secondary" />
            <span className="text-xs uppercase tracking-widest text-secondary font-semibold">En Cancha</span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground">
            Próximos Partidos
          </h2>
          <p className="text-muted-foreground text-sm mt-2">5ta fecha — Domingo 05 de Abril 2026</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {upcomingMatches.map((match, i) => (
            <div
              key={i}
              className={`glass-card p-5 hover-lift animate-fade-up delay-${((i % 4) + 1) * 100}`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] uppercase tracking-widest text-secondary font-semibold bg-secondary/10 px-2 py-1 rounded-full">
                  {match.serie}
                </span>
                <span className="text-[10px] text-muted-foreground">{match.date}</span>
              </div>
              <div className="text-center space-y-2">
                <div className="font-medium text-sm text-foreground">{match.home}</div>
                <div className="font-heading font-bold text-secondary text-xs">VS</div>
                <div className="font-medium text-sm text-foreground">{match.away}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingMatches;
