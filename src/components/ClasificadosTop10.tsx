import { type TeamStanding } from "@/data/standings";
import { Trophy, Medal, Award, CheckCircle2 } from "lucide-react";
import ClubLogo from "./ClubLogo";

interface Props {
  title: string;
  data: TeamStanding[];
  count?: number;
}

const ClasificadosTop10 = ({ title, data, count = 10 }: Props) => {
  const classified = data.slice(0, count);

  return (
    <div id="clasificados" className="mt-8">
      <div className="text-center mb-5">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-3">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">Zona de clasificación</span>
        </div>
        <h3 className="font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-foreground">
          {title}
        </h3>
        <p className="text-muted-foreground text-xs mt-1">Los {count} mejores avanzan a la siguiente instancia</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {classified.map((team, i) => {
          const isTop3 = i < 3;
          const Icon = i === 0 ? Trophy : i < 3 ? Medal : Award;

          return (
            <div
              key={team.team}
              className={`group relative flex items-center gap-3 p-3 rounded-xl border transition-all duration-300 hover:-translate-y-0.5 ${
                isTop3
                  ? "glass-card border-secondary/30 hover:border-secondary/60"
                  : "glass border-border/40 hover:border-emerald-500/40"
              }`}
              style={isTop3 ? { boxShadow: "0 4px 20px -6px hsl(43 80% 50% / 0.15)" } : undefined}
            >
              {/* Position */}
              <div className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold ${
                i === 0
                  ? "bg-secondary text-secondary-foreground"
                  : i < 3
                    ? "bg-primary text-primary-foreground"
                    : "bg-emerald-500/15 text-emerald-400"
              }`}>
                {isTop3 ? <Icon className="w-4 h-4" /> : team.pos}
              </div>

              {/* Logo */}
              <ClubLogo clubName={team.team} size="sm" />

              {/* Info */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground truncate">{team.team}</p>
                <p className="text-[10px] text-muted-foreground">{team.pts} pts · DIF {team.dif > 0 ? `+${team.dif}` : team.dif}</p>
              </div>

              {/* Badge */}
              <span className={`flex-shrink-0 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                isTop3
                  ? "bg-secondary/20 text-secondary"
                  : "bg-emerald-500/15 text-emerald-400"
              }`}>
                {i === 0 ? "Líder" : isTop3 ? `${team.pos}°` : "Clasif."}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ClasificadosTop10;
