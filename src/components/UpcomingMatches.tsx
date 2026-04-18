import { Flame, MapPin, Shield } from "lucide-react";
import ClubLogo from "./ClubLogo";

interface MatchResult {
  home: string;
  away: string;
  stadium: string;
  referee: string;
  juvenilScore: string;
  primeraScore: string;
}

const sixthRoundMatches: MatchResult[] = [
  { home: "13 de Junio C.C.", away: "Juventud Cord.", stadium: "13 de Junio CC", referee: "UFI", juvenilScore: "2 - 4", primeraScore: "2 - 1" },
  { home: "12 de Agosto", away: "Sport San Blas", stadium: "Tte Horacio Gini", referee: "UFI", juvenilScore: "3 - 1", primeraScore: "2 - 1" },
  { home: "15 de Agosto", away: "Independiente", stadium: "Hilario Portillo", referee: "UFI", juvenilScore: "0 - 0", primeraScore: "2 - 2" },
  { home: "Libertad Ojopoi", away: "Gral. Caballero", stadium: "Libertad de Ojopoi", referee: "J.A Saldivar", juvenilScore: "0 - 1", primeraScore: "1 - 2" },
  { home: "3 de Febrero", away: "Capitán Cristaldo", stadium: "3 de Febrero", referee: "Círculo Liga Paraguarí", juvenilScore: "1 - 3", primeraScore: "3 - 0" },
  { home: "1° de Marzo", away: "Guaraní", stadium: "1º de Marzo", referee: "Círculo Liga Iteña", juvenilScore: "4 - 2", primeraScore: "0 - 0" },
];

const UpcomingMatches = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-3">
            <Flame className="w-5 h-5 text-secondary" />
            <span className="text-xs uppercase tracking-widest text-secondary font-semibold">Sexta Fecha</span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground">
            Jornada del Martes 14 de Abril
          </h2>
          <p className="text-muted-foreground text-sm mt-2">
            Campeonato Liga Deportiva de Piribebuy 2026 — Resultados finales Primera y Juvenil
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {sixthRoundMatches.map((match, i) => (
            <div
              key={i}
              className="glass-card p-5 hover-lift animate-fade-up"
              style={{ animationDelay: `${(i % 3) * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex flex-col items-center gap-1 flex-1">
                  <ClubLogo clubName={match.home} size="md" />
                  <span className="text-xs font-medium text-foreground text-center leading-tight mt-1">{match.home}</span>
                </div>
                <div className="flex flex-col items-center px-2">
                  <span className="font-heading font-bold text-secondary text-sm bg-secondary/10 px-3 py-1 rounded-full">VS</span>
                </div>
                <div className="flex flex-col items-center gap-1 flex-1">
                  <ClubLogo clubName={match.away} size="md" />
                  <span className="text-xs font-medium text-foreground text-center leading-tight mt-1">{match.away}</span>
                </div>
              </div>

              <div className="space-y-2 border-t border-border/30 pt-3 mb-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Juvenil</span>
                  <div className="flex items-center gap-2">
                    <span className="font-heading font-bold text-foreground">{match.juvenilScore}</span>
                    <span className="text-[9px] uppercase font-bold text-green-400 bg-green-400/10 px-1.5 py-0.5 rounded-full">Final</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Primera</span>
                  <div className="flex items-center gap-2">
                    <span className="font-heading font-bold text-foreground">{match.primeraScore}</span>
                    <span className="text-[9px] uppercase font-bold text-green-400 bg-green-400/10 px-1.5 py-0.5 rounded-full">Final</span>
                  </div>
                </div>
              </div>

              <div className="space-y-1.5 border-t border-border/30 pt-3">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <MapPin className="w-3 h-3 text-secondary/70 shrink-0" />
                  <span className="truncate">{match.stadium}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Shield className="w-3 h-3 text-secondary/70 shrink-0" />
                  <span className="truncate">{match.referee}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingMatches;
