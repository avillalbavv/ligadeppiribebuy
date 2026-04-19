import { Calendar, MapPin, Shield, Clock } from "lucide-react";
import ClubLogo from "./ClubLogo";

interface UpcomingMatch {
  home: string;
  away: string;
  stadium: string;
  referee: string;
  juvenilTime: string;
  primeraTime: string;
  isClassic?: boolean;
}

const fecha7Matches: UpcomingMatch[] = [
  {
    home: "Juventud",
    away: "Sol de Mayo",
    stadium: "Meneleo Rivas Almada",
    referee: "UFI",
    juvenilTime: "13:30 h",
    primeraTime: "15:30 h",
  },
  {
    home: "Gral Caballero",
    away: "13 de Junio",
    stadium: "Gral Caballero",
    referee: "UFI",
    juvenilTime: "13:30 h",
    primeraTime: "15:30 h",
  },
  {
    home: "Capitán Cristaldo",
    away: "Guaraní",
    stadium: "Capitán CRRI",
    referee: "Círculo Tobateño",
    juvenilTime: "13:30 h",
    primeraTime: "15:30 h",
  },
  {
    home: "Sport Unión",
    away: "3 de Febrero",
    stadium: "Independiente",
    referee: "Círculo Liga Iteña",
    juvenilTime: "13:30 h",
    primeraTime: "15:30 h",
  },
  {
    home: "Mcal Estigarribia",
    away: "12 de Agosto",
    stadium: "Mariscal Estigarribia",
    referee: "UFI",
    juvenilTime: "13:30 h",
    primeraTime: "15:30 h",
  },
  {
    home: "Sport San Blas",
    away: "15 de Agosto",
    stadium: "Sport San Blas",
    referee: "Círculo J.A. Saldívar",
    juvenilTime: "13:30 h",
    primeraTime: "15:30 h",
    isClassic: true,
  },
  {
    home: "Itaguyra",
    away: "13 de Junio SA",
    stadium: "Itaguyra",
    referee: "Círculo Liga Paraguarí",
    juvenilTime: "13:30 h",
    primeraTime: "15:30 h",
  },
  {
    home: "Libertad Y",
    away: "Humaitá",
    stadium: "Libertad Yruguá",
    referee: "Círculo Tobateño",
    juvenilTime: "13:30 h",
    primeraTime: "15:30 h",
  },
];

const UpcomingMatches = () => {
  return (
    <section id="proximos-partidos" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <Calendar className="w-5 h-5 text-secondary" />
            <span className="text-xs uppercase tracking-widest text-secondary font-semibold">
              Campeonato 2026
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground">
            Próximos Eventos — Fecha 7
          </h2>
          <p className="text-muted-foreground text-sm mt-3 max-w-xl mx-auto">
            Domingo 19 de abril de 2026 — Liga Deportiva de Piribebuy
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
            <span className="flex items-center gap-1.5 glass px-3 py-1.5 rounded-full text-xs text-muted-foreground">
              <Clock className="w-3 h-3 text-secondary" />
              Juvenil: 13:30 h
            </span>
            <span className="flex items-center gap-1.5 glass px-3 py-1.5 rounded-full text-xs text-muted-foreground">
              <Clock className="w-3 h-3 text-secondary" />
              Primera: 15:30 h
            </span>
          </div>
        </div>

        {/* Classic featured card */}
        {(() => {
          const classic = fecha7Matches.find((m) => m.isClassic);
          if (!classic) return null;
          return (
            <div
              className="max-w-2xl mx-auto mb-8 rounded-2xl overflow-hidden animate-fade-up"
              style={{
                background: "linear-gradient(135deg, hsl(350 65% 18% / 0.9), hsl(0 0% 9% / 0.95))",
                border: "2px solid hsl(43 80% 45% / 0.45)",
                boxShadow: "0 0 40px hsl(43 80% 40% / 0.15), 0 12px 40px hsl(0 0% 0% / 0.5)",
              }}
            >
              <div
                className="px-4 py-2 flex items-center justify-center gap-2"
                style={{ background: "var(--gradient-gold)" }}
              >
                <span className="text-xs font-heading font-bold uppercase tracking-widest text-black">
                  🏆 Campeonato de Honor — Clásico Destacado
                </span>
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="flex flex-col items-center gap-2 flex-1">
                    <ClubLogo clubName="Sport San Blas" size="lg" />
                    <span className="text-xs font-bold text-foreground text-center leading-tight">
                      Sport San Blas
                    </span>
                  </div>
                  <div className="flex flex-col items-center px-3 shrink-0">
                    <span
                      className="font-heading font-bold text-3xl"
                      style={{
                        background: "var(--gradient-gold)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      VS
                    </span>
                    <span
                      className="text-xs mt-1 uppercase tracking-wider font-bold"
                      style={{ color: "hsl(43 80% 55%)" }}
                    >
                      Próximo
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-2 flex-1">
                    <ClubLogo clubName="15 de Agosto" size="lg" />
                    <span className="text-xs font-bold text-foreground text-center leading-tight">
                      15 de Agosto
                    </span>
                  </div>
                </div>
                <div
                  className="grid grid-cols-3 gap-3 border-t pt-4"
                  style={{ borderColor: "hsl(43 80% 40% / 0.2)" }}
                >
                  <div className="flex flex-col items-center gap-1 text-center">
                    <Clock className="w-3.5 h-3.5 text-secondary" />
                    <span className="text-xs font-semibold text-foreground">13:30 / 15:30</span>
                    <span className="text-[10px] text-muted-foreground">Horarios</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-center">
                    <MapPin className="w-3.5 h-3.5 text-secondary" />
                    <span className="text-xs font-semibold text-foreground">Sport San Blas</span>
                    <span className="text-[10px] text-muted-foreground">Estadio</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-center">
                    <Shield className="w-3.5 h-3.5 text-secondary" />
                    <span className="text-xs font-semibold text-foreground">Círculo J.A. Saldívar</span>
                    <span className="text-[10px] text-muted-foreground">Árbitro</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}

        {/* Rest of matches grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {fecha7Matches
            .filter((m) => !m.isClassic)
            .map((match, i) => (
              <div
                key={i}
                className="glass-card p-5 hover-lift animate-fade-up flex flex-col"
                style={{ animationDelay: `${(i % 4) * 80}ms` }}
              >
                <div className="flex items-center justify-between mb-4 flex-1">
                  <div className="flex flex-col items-center gap-1 flex-1">
                    <ClubLogo clubName={match.home} size="md" />
                    <span className="text-xs font-medium text-foreground text-center leading-tight mt-1">
                      {match.home}
                    </span>
                  </div>
                  <div className="flex flex-col items-center px-2 shrink-0">
                    <span className="font-heading font-bold text-secondary text-xs bg-secondary/10 px-2.5 py-1 rounded-full">
                      VS
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-1 flex-1">
                    <ClubLogo clubName={match.away} size="md" />
                    <span className="text-xs font-medium text-foreground text-center leading-tight mt-1">
                      {match.away}
                    </span>
                  </div>
                </div>

                <div className="space-y-1.5 border-t border-border/30 pt-3 mb-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Juvenil</span>
                    <span className="font-heading font-bold text-foreground flex items-center gap-1">
                      <Clock className="w-2.5 h-2.5 text-secondary" />
                      {match.juvenilTime}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Primera</span>
                    <span className="font-heading font-bold text-secondary flex items-center gap-1">
                      <Clock className="w-2.5 h-2.5 text-secondary" />
                      {match.primeraTime}
                    </span>
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
