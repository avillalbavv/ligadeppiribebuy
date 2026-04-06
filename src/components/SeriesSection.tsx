import { series } from "@/data/fixtures";
import { Shield } from "lucide-react";

const SeriesSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground">
            Series del Campeonato
          </h2>
          <p className="text-muted-foreground text-sm mt-2">Distribución oficial de equipos — Temporada 2026</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {series.map((serie, i) => (
            <div key={serie.name} className={`glass-card p-6 hover-lift animate-fade-up delay-${(i + 1) * 100}`}>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-5 h-5 text-secondary" />
                <h3 className="font-heading text-lg font-bold text-secondary">{serie.name}</h3>
              </div>
              <ul className="space-y-2">
                {serie.teams.map((team) => (
                  <li key={team} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {team}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeriesSection;
