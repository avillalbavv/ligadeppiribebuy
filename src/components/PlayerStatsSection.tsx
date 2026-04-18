import { useState } from "react";
import { BarChart3, Trophy, AlertTriangle, ShieldAlert, Star, Goal } from "lucide-react";
import { playerStats } from "@/data/resolutions";
import ClubLogo from "./ClubLogo";

const tabs = [
  { key: "topScorers" as const, label: "Goleadores", icon: Goal },
  { key: "bestPlayers" as const, label: "Mejor Jugador", icon: Star },
  { key: "yellowCards" as const, label: "Amarillas", icon: AlertTriangle },
  { key: "redCards" as const, label: "Rojas", icon: ShieldAlert },
];

const PlayerStatsSection = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof playerStats>("topScorers");

  const currentStats = playerStats[activeTab];
  const activeTabInfo = tabs.find((t) => t.key === activeTab)!;

  return (
    <section id="estadisticas" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-3">
            <BarChart3 className="w-5 h-5 text-secondary" />
            <span className="text-xs uppercase tracking-widest text-secondary font-semibold">
              Rendimiento
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground">
            Estadísticas de Jugadores
          </h2>
          <p className="text-muted-foreground text-sm mt-2">
            Así queda la tabla de goleadores y estadísticas al cierre de la 5ta fecha del campeonato.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex glass rounded-lg p-1 gap-1 flex-wrap justify-center">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`inline-flex items-center gap-1.5 px-3 md:px-5 py-2 rounded-md text-xs md:text-sm font-medium transition-all duration-200 ${
                    activeTab === tab.key
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Stats Content */}
        <div className="glass-card p-4 md:p-6 max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border/30">
            {(() => {
              const Icon = activeTabInfo.icon;
              return <Icon className="w-4 h-4 text-secondary" />;
            })()}
            <h3 className="font-heading font-bold text-sm uppercase text-foreground">
              {activeTabInfo.label}
            </h3>
          </div>

          {currentStats.length === 0 || (currentStats.length === 1 && currentStats[0].player === "Por confirmar") ? (
            <div className="text-center py-12">
              <Trophy className="w-10 h-10 text-muted-foreground/30 mx-auto mb-3" />
              <p className="text-muted-foreground text-sm">
                Las estadísticas serán publicadas próximamente.
              </p>
              <p className="text-muted-foreground/60 text-xs mt-1">
                Se actualizan jornada por jornada.
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              {currentStats.map((stat, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    i === 0
                      ? "bg-secondary/10 border border-secondary/20"
                      : i < 3
                      ? "bg-muted/30"
                      : "bg-muted/10"
                  }`}
                >
                  <span
                    className={`font-heading font-bold text-sm w-8 text-center ${
                      i === 0 ? "text-secondary" : "text-muted-foreground"
                    }`}
                  >
                    {stat.position}°
                  </span>

                  <ClubLogo clubName={stat.club} size="sm" />

                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-medium ${i === 0 ? "text-secondary" : "text-foreground"}`}>
                      {stat.player}
                    </p>
                    <p className="text-xs text-muted-foreground">{stat.club}</p>
                  </div>

                  <span
                    className={`font-heading font-bold text-lg ${
                      i === 0 ? "text-secondary" : "text-foreground"
                    }`}
                  >
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PlayerStatsSection;
