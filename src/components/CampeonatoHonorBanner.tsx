import { Trophy, Tv, Clock, MapPin, Star, Flame } from "lucide-react";
import ClubLogo from "./ClubLogo";

const CampeonatoHonorBanner = () => {
  return (
    <section id="evento-destacado" className="relative overflow-hidden py-0">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, hsl(350 65% 18%) 0%, hsl(0 0% 5%) 45%, hsl(43 70% 15%) 100%)",
          }}
        />
        {/* Decorative diagonal stripes */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, hsl(43 80% 50%) 0px, hsl(43 80% 50%) 2px, transparent 2px, transparent 40px)",
          }}
        />
        {/* Gold glow top-right */}
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: "hsl(43 80% 50%)" }}
        />
        {/* Garnet glow bottom-left */}
        <div
          className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: "hsl(350 60% 35%)" }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        {/* Top badge */}
        <div className="flex justify-center mb-6 animate-fade-up">
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border text-xs uppercase tracking-widest font-bold"
            style={{
              borderColor: "hsl(43 80% 50% / 0.6)",
              background: "hsl(43 80% 50% / 0.12)",
              color: "hsl(43 80% 65%)",
            }}
          >
            <Star className="w-3.5 h-3.5 fill-current" />
            Evento Especial — Campeonato de Honor
            <Star className="w-3.5 h-3.5 fill-current" />
          </div>
        </div>

        {/* Main title block */}
        <div className="text-center mb-8 animate-fade-up" style={{ animationDelay: "80ms" }}>
          <h2
            className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight leading-none"
            style={{
              background: "linear-gradient(135deg, hsl(43 80% 65%), hsl(43 60% 50%), hsl(43 80% 70%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Campeonato
          </h2>
          <h2
            className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight leading-none text-foreground"
          >
            de Honor <span style={{ color: "hsl(43 80% 58%)" }}>2026</span>
          </h2>

          <div
            className="mx-auto mt-4 mb-5 h-1 rounded-full max-w-xs"
            style={{ background: "var(--gradient-gold)" }}
          />

          <p
            className="font-heading text-lg sm:text-xl md:text-2xl font-semibold uppercase tracking-wide"
            style={{ color: "hsl(40 20% 80%)" }}
          >
            Homenaje a Don{" "}
            <span style={{ color: "hsl(43 80% 60%)" }}>Diosnel Ojeda</span>
          </p>
        </div>

        {/* Classic badge */}
        <div className="flex justify-center mb-10 animate-fade-up" style={{ animationDelay: "160ms" }}>
          <div
            className="flex items-center gap-3 px-6 py-3 rounded-xl border"
            style={{
              background: "hsl(350 60% 25% / 0.4)",
              borderColor: "hsl(350 60% 45% / 0.5)",
            }}
          >
            <Flame className="w-5 h-5" style={{ color: "hsl(350 70% 60%)" }} />
            <span
              className="font-heading text-sm sm:text-base font-bold uppercase tracking-widest"
              style={{ color: "hsl(350 40% 85%)" }}
            >
              Clásico de la Compañía Cordillera
            </span>
            <Flame className="w-5 h-5" style={{ color: "hsl(350 70% 60%)" }} />
          </div>
        </div>

        {/* Main match card */}
        <div
          className="max-w-2xl mx-auto rounded-2xl overflow-hidden animate-fade-up"
          style={{
            animationDelay: "240ms",
            background: "hsl(0 0% 9% / 0.85)",
            border: "2px solid hsl(43 80% 45% / 0.5)",
            boxShadow: "0 0 60px hsl(43 80% 40% / 0.2), 0 20px 60px hsl(0 0% 0% / 0.6)",
          }}
        >
          {/* Card header */}
          <div
            className="px-4 py-3 flex items-center justify-center gap-3"
            style={{ background: "var(--gradient-gold)" }}
          >
            <Trophy className="w-4 h-4 text-black" />
            <span className="font-heading text-xs font-bold uppercase tracking-widest text-black">
              Partido Principal — Campeonato de Honor 2026
            </span>
            <Trophy className="w-4 h-4 text-black" />
          </div>

          {/* Match display */}
          <div className="p-8 sm:p-10">
            <div className="flex items-center justify-between gap-4">
              {/* Home team */}
              <div className="flex flex-col items-center gap-3 flex-1">
                <div
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center border-2"
                  style={{
                    background: "hsl(350 60% 20% / 0.5)",
                    borderColor: "hsl(350 60% 45% / 0.4)",
                  }}
                >
                  <ClubLogo clubName="Sport San Blas" size="lg" />
                </div>
                <span
                  className="font-heading text-sm sm:text-base font-bold uppercase text-center leading-tight"
                  style={{ color: "hsl(40 20% 90%)" }}
                >
                  Sport San Blas
                </span>
              </div>

              {/* VS divider */}
              <div className="flex flex-col items-center gap-2 shrink-0">
                <span
                  className="font-heading text-4xl sm:text-5xl font-bold"
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
                  className="text-xs uppercase tracking-widest font-semibold"
                  style={{ color: "hsl(40 10% 55%)" }}
                >
                  Clásico
                </span>
              </div>

              {/* Away team */}
              <div className="flex flex-col items-center gap-3 flex-1">
                <div
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center border-2"
                  style={{
                    background: "hsl(43 60% 15% / 0.5)",
                    borderColor: "hsl(43 70% 40% / 0.4)",
                  }}
                >
                  <ClubLogo clubName="15 de Agosto" size="lg" />
                </div>
                <span
                  className="font-heading text-sm sm:text-base font-bold uppercase text-center leading-tight"
                  style={{ color: "hsl(40 20% 90%)" }}
                >
                  15 de Agosto
                </span>
              </div>
            </div>
          </div>

          {/* Info bar */}
          <div
            className="grid grid-cols-2 sm:grid-cols-3 divide-x border-t"
            style={{
              borderColor: "hsl(43 80% 40% / 0.25)",
              divideColor: "hsl(43 80% 40% / 0.25)",
            }}
          >
            <div className="px-4 py-4 flex flex-col items-center gap-1.5">
              <MapPin className="w-4 h-4" style={{ color: "hsl(43 80% 55%)" }} />
              <span className="text-xs font-semibold text-center" style={{ color: "hsl(40 20% 85%)" }}>
                Club Sport San Blas
              </span>
              <span className="text-[10px]" style={{ color: "hsl(40 10% 55%)" }}>Estadio</span>
            </div>
            <div className="px-4 py-4 flex flex-col items-center gap-1.5">
              <Clock className="w-4 h-4" style={{ color: "hsl(43 80% 55%)" }} />
              <span className="text-xs font-semibold text-center" style={{ color: "hsl(40 20% 85%)" }}>
                Domingo 19 de Abril
              </span>
              <span className="text-[10px]" style={{ color: "hsl(40 10% 55%)" }}>Fecha</span>
            </div>
            <div className="col-span-2 sm:col-span-1 px-4 py-4 flex flex-col items-center gap-1.5 border-t sm:border-t-0" style={{ borderColor: "hsl(43 80% 40% / 0.25)" }}>
              <Tv className="w-4 h-4" style={{ color: "hsl(43 80% 55%)" }} />
              <span className="text-xs font-semibold text-center" style={{ color: "hsl(40 20% 85%)" }}>
                Facebook Live
              </span>
              <span className="text-[10px]" style={{ color: "hsl(40 10% 55%)" }}>Desde las 14:00 hs</span>
            </div>
          </div>
        </div>

        {/* CTA buttons */}
        <div
          className="flex flex-wrap justify-center gap-4 mt-10 animate-fade-up"
          style={{ animationDelay: "320ms" }}
        >
          <a
            href="#proximos-partidos"
            className="px-7 py-3 font-heading font-bold uppercase tracking-wider text-sm rounded-lg text-black transition-all duration-300 hover:scale-105 hover:brightness-110"
            style={{ background: "var(--gradient-gold)" }}
          >
            Ver Próximos Partidos
          </a>
          <a
            href="#resultados"
            className="px-7 py-3 font-heading font-bold uppercase tracking-wider text-sm rounded-lg transition-all duration-300 hover:scale-105"
            style={{
              border: "2px solid hsl(43 80% 45% / 0.5)",
              color: "hsl(43 80% 65%)",
            }}
          >
            Ver Resultados
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default CampeonatoHonorBanner;
