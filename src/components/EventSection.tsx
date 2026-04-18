import { Trophy, Zap } from "lucide-react";
import ClubLogo from "./ClubLogo";

const EventSection = () => {
  return (
    <section id="evento" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-background to-primary/5 pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-3">
            <Zap className="w-5 h-5 text-secondary" />
            <span className="text-xs uppercase tracking-widest text-secondary font-semibold">Resultados Finales</span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground">
            Partidos Destacados — 6ª Fecha
          </h2>
          <p className="text-muted-foreground text-sm mt-2 max-w-2xl mx-auto">
            Los encuentros más importantes de la sexta fecha del Campeonato 2026 de la Liga Deportiva de Piribebuy, disputados el martes 14 de abril.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Primera: 13 de Junio 2-1 Juventud */}
          <div className="glass-card overflow-hidden animate-fade-up">
            <div className="bg-gradient-to-r from-secondary via-secondary/90 to-secondary px-4 py-2 text-center">
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-secondary-foreground">
                🏆 Primera División — Resultado Final
              </span>
            </div>
            <div className="p-5 sm:p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex flex-col items-center gap-1.5 flex-1">
                  <ClubLogo clubName="13 de Junio C.C." size="lg" />
                  <span className="text-xs font-bold text-foreground text-center leading-tight">13 de Junio CC</span>
                </div>
                <div className="flex flex-col items-center px-3">
                  <div className="flex items-center gap-2">
                    <span className="font-heading font-bold text-3xl text-secondary">2</span>
                    <span className="text-muted-foreground font-medium">-</span>
                    <span className="font-heading font-bold text-3xl text-muted-foreground">1</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-green-400 font-bold mt-1 bg-green-400/10 px-2 py-0.5 rounded-full">Final</span>
                </div>
                <div className="flex flex-col items-center gap-1.5 flex-1">
                  <ClubLogo clubName="Juventud Cord." size="lg" />
                  <span className="text-xs font-bold text-foreground text-center leading-tight">Juventud Cord.</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed text-center">
                13 de Junio CC se quedó con el clásico en Primera División al vencer 2-1 a Juventud Cordillerana en Capilla Cue.
              </p>
            </div>
          </div>

          {/* Primera: 12 de Agosto 2-1 Sport San Blas */}
          <div className="glass-card overflow-hidden animate-fade-up" style={{ animationDelay: "100ms" }}>
            <div className="bg-gradient-to-r from-primary via-primary/90 to-primary px-4 py-2 text-center">
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-primary-foreground">
                ⚽ Primera División — Resultado Final
              </span>
            </div>
            <div className="p-5 sm:p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex flex-col items-center gap-1.5 flex-1">
                  <ClubLogo clubName="12 de Agosto" size="lg" />
                  <span className="text-xs font-bold text-foreground text-center leading-tight">12 de Agosto</span>
                </div>
                <div className="flex flex-col items-center px-3">
                  <div className="flex items-center gap-2">
                    <span className="font-heading font-bold text-3xl text-secondary">2</span>
                    <span className="text-muted-foreground font-medium">-</span>
                    <span className="font-heading font-bold text-3xl text-muted-foreground">1</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-green-400 font-bold mt-1 bg-green-400/10 px-2 py-0.5 rounded-full">Final</span>
                </div>
                <div className="flex flex-col items-center gap-1.5 flex-1">
                  <ClubLogo clubName="Sport San Blas" size="lg" />
                  <span className="text-xs font-bold text-foreground text-center leading-tight">Sport San Blas</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed text-center">
                12 de Agosto venció 2-1 a Sport San Blas en el estadio Tte. Horacio Gini y sigue sumando en la tabla.
              </p>
            </div>
          </div>

          {/* Juvenil: 13 de Junio 2-4 Juventud */}
          <div className="glass-card overflow-hidden animate-fade-up" style={{ animationDelay: "200ms" }}>
            <div className="bg-gradient-to-r from-secondary via-secondary/90 to-secondary px-4 py-2 text-center">
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-secondary-foreground">
                🏆 Juvenil — Clásico de Capilla Cue
              </span>
            </div>
            <div className="p-5 sm:p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex flex-col items-center gap-1.5 flex-1">
                  <ClubLogo clubName="13 de Junio C.C." size="lg" />
                  <span className="text-xs font-bold text-foreground text-center leading-tight">13 de Junio CC</span>
                </div>
                <div className="flex flex-col items-center px-3">
                  <div className="flex items-center gap-2">
                    <span className="font-heading font-bold text-3xl text-muted-foreground">2</span>
                    <span className="text-muted-foreground font-medium">-</span>
                    <span className="font-heading font-bold text-3xl text-secondary">4</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-green-400 font-bold mt-1 bg-green-400/10 px-2 py-0.5 rounded-full">Final</span>
                </div>
                <div className="flex flex-col items-center gap-1.5 flex-1">
                  <ClubLogo clubName="Juventud Cord." size="lg" />
                  <span className="text-xs font-bold text-foreground text-center leading-tight">Juventud Cord.</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed text-center">
                Juventud Cordillerana goleó 4-2 de visitante a 13 de Junio CC en el clásico juvenil de Capilla Cue, consolidando su liderazgo.
              </p>
            </div>
          </div>

          {/* Juvenil: 12 de Agosto 3-1 Sport San Blas */}
          <div className="glass-card overflow-hidden animate-fade-up" style={{ animationDelay: "300ms" }}>
            <div className="bg-gradient-to-r from-primary via-primary/90 to-primary px-4 py-2 text-center">
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-primary-foreground">
                ⚽ Juvenil — 6ª Fecha
              </span>
            </div>
            <div className="p-5 sm:p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex flex-col items-center gap-1.5 flex-1">
                  <ClubLogo clubName="12 de Agosto" size="lg" />
                  <span className="text-xs font-bold text-foreground text-center leading-tight">12 de Agosto</span>
                </div>
                <div className="flex flex-col items-center px-3">
                  <div className="flex items-center gap-2">
                    <span className="font-heading font-bold text-3xl text-secondary">3</span>
                    <span className="text-muted-foreground font-medium">-</span>
                    <span className="font-heading font-bold text-3xl text-muted-foreground">1</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-green-400 font-bold mt-1 bg-green-400/10 px-2 py-0.5 rounded-full">Final</span>
                </div>
                <div className="flex flex-col items-center gap-1.5 flex-1">
                  <ClubLogo clubName="Sport San Blas" size="lg" />
                  <span className="text-xs font-bold text-foreground text-center leading-tight">Sport San Blas</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed text-center">
                12 de Agosto se impuso 3-1 a Sport San Blas en casa, sumando puntos clave en la categoría juvenil.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 animate-fade-up" style={{ animationDelay: "400ms" }}>
          <p className="text-sm text-muted-foreground">
            Seguí toda la cobertura oficial de la Liga Deportiva de Piribebuy.{" "}
            <strong className="text-secondary">¡Sexta fecha finalizada!</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default EventSection;
