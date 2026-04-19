import { Trophy, Tv, Clock, MapPin, Star, Flame } from "lucide-react";
import ClubLogo from "./ClubLogo";

const CampeonatoHonorBanner = () => {
  return (
    <section id="evento-destacado" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, hsl(350 65% 18%) 0%, hsl(0 0% 5%) 45%, hsl(43 60% 12%) 100%)",
          }}
        />
        {/* Diagonal accent stripes */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, hsl(43 80% 50%) 0px, hsl(43 80% 50%) 2px, transparent 2px, transparent 38px)",
          }}
        />
        {/* Glow orbs */}
        <div
          className="absolute -top-24 -right-24 w-72 h-72 rounded-full opacity-15 blur-3xl"
          style={{ background: "hsl(43 80% 50%)" }}
        />
        <div
          className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full opacity-15 blur-3xl"
          style={{ background: "hsl(350 60% 35%)" }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        {/* Badge */}
        <div className="flex justify-center mb-5 animate-fade-up">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs uppercase tracking-widest font-bold"
            style={{
              borderColor: "hsl(43 80% 50% / 0.5)",
              background: "hsl(43 80% 50% / 0.1)",
              color: "hsl(43 80% 68%)",
            }}
          >
            <Star className="w-3 h-3 fill-current shrink-0" />
            <span>Evento Especial — Campeonato de Honor</span>
            <Star className="w-3 h-3 fill-current shrink-0" />
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-6 animate-fade-up" style={{ animationDelay: "80ms" }}>
          <h2
            className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold uppercase tracking-tight leading-none"
            style={{
              background: "linear-gradient(135deg, hsl(43 80% 68%), hsl(43 60% 52%), hsl(43 80% 72%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Campeonato
          </h2>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold uppercase tracking-tight leading-none text-foreground">
            de Honor{" "}
            <span style={{ color: "hsl(43 80% 60%)" }}>2026</span>
          </h2>
          <div
            className="mx-auto mt-3 mb-4 h-0.5 rounded-full max-w-[160px]"
            style={{ background: "var(--gradient-gold)" }}
          />
          <p
            className="font-heading text-base sm:text-xl font-semibold uppercase tracking-wide"
            style={{ color: "hsl(40 20% 80%)" }}
          >
            Homenaje a Don{" "}
            <span style={{ color: "hsl(43 80% 62%)" }}>Diosnel Ojeda</span>
          </p>
        </div>

        {/* Classic badge */}
        <div className="flex justify-center mb-8 animate-fade-up" style={{ animationDelay: "140ms" }}>
          <div
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border"
            style={{
              background: "hsl(350 60% 22% / 0.4)",
              borderColor: "hsl(350 55% 45% / 0.5)",
            }}
          >
            <Flame className="w-4 h-4 shrink-0" style={{ color: "hsl(350 70% 65%)" }} />
            <span
              className="font-heading text-xs sm:text-sm font-bold uppercase tracking-widest text-center"
              style={{ color: "hsl(350 30% 88%)" }}
            >
              Clásico de la Compañía Cordillera
            </span>
            <Flame className="w-4 h-4 shrink-0" style={{ color: "hsl(350 70% 65%)" }} />
          </div>
        </div>

        {/* Main match card */}
        <div
          className="max-w-xl mx-auto rounded-2xl overflow-hidden animate-fade-up"
          style={{
            animationDelay: "200ms",
            background: "hsl(0 0% 8% / 0.9)",
            border: "2px solid hsl(43 80% 45% / 0.45)",
            boxShadow: "0 0 50px hsl(43 80% 40% / 0.18), 0 16px 50px hsl(0 0% 0% / 0.65)",
          }}
        >
          {/* Card header */}
          <div
            className="px-4 py-2.5 flex items-center justify-center gap-2"
            style={{ background: "var(--gradient-gold)" }}
          >
            <Trophy className="w-3.5 h-3.5 text-black shrink-0" />
            <span className="font-heading text-[11px] font-bold uppercase tracking-widest text-black text-center">
              Partido Principal — Campeonato de Honor 2026
            </span>
            <Trophy className="w-3.5 h-3.5 text-black shrink-0" />
          </div>

          {/* Match */}
          <div className="p-6 sm:p-8">
            <div className="flex items-center justify-between gap-3">
              {/* Home */}
              <div className="flex flex-col items-center gap-2 flex-1 min-w-0">
                <div
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center border-2 flex-shrink-0"
                  style={{
                    background: "hsl(350 60% 18% / 0.5)",
                    borderColor: "hsl(350 60% 45% / 0.35)",
                  }}
                >
                  <ClubLogo clubName="Sport San Blas" size="lg" />
                </div>
                <span
                  className="font-heading text-xs sm:text-sm font-bold uppercase text-center leading-tight"
                  style={{ color: "hsl(40 20% 92%)" }}
                >
                  Sport San Blas
                </span>
              </div>

              {/* VS */}
              <div className="flex flex-col items-center gap-1 shrink-0 px-1">
                <span
                  className="font-heading text-3xl sm:text-4xl font-bold"
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
                  className="text-[9px] uppercase tracking-widest font-bold"
                  style={{ color: "hsl(43 80% 55%)" }}
                >
                  Clásico
                </span>
              </div>

              {/* Away */}
              <div className="flex flex-col items-center gap-2 flex-1 min-w-0">
                <div
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center border-2 flex-shrink-0"
                  style={{
                    background: "hsl(43 60% 14% / 0.5)",
                    borderColor: "hsl(43 70% 40% / 0.35)",
                  }}
                >
                  <ClubLogo clubName="15 de Agosto" size="lg" />
                </div>
                <span
                  className="font-heading text-xs sm:text-sm font-bold uppercase text-center leading-tight"
                  style={{ color: "hsl(40 20% 92%)" }}
                >
                  15 de Agosto
                </span>
              </div>
            </div>
          </div>

          {/* Info bar */}
          <div
            className="grid grid-cols-3 border-t"
            style={{ borderColor: "hsl(43 80% 40% / 0.22)" }}
          >
            {[
              { icon: MapPin, label: "Estadio", value: "Club Sport San Blas" },
              { icon: Clock, label: "Fecha", value: "Dom. 19 de Abril" },
              { icon: Tv, label: "Desde las 14:00 hs", value: "Facebook Live" },
            ].map(({ icon: Icon, label, value }, i) => (
              <div
                key={i}
                className={`px-3 py-4 flex flex-col items-center gap-1 text-center ${i > 0 ? "border-l" : ""}`}
                style={{ borderColor: "hsl(43 80% 40% / 0.22)" }}
              >
                <Icon className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "hsl(43 80% 58%)" }} />
                <span className="text-[11px] font-semibold leading-tight" style={{ color: "hsl(40 20% 87%)" }}>
                  {value}
                </span>
                <span className="text-[9px] leading-tight" style={{ color: "hsl(40 10% 52%)" }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mt-10 animate-fade-up"
          style={{ animationDelay: "280ms" }}
        >
          <a
            href="#proximos-partidos"
            className="px-6 py-3 font-heading font-bold uppercase tracking-wider text-sm rounded-lg text-black transition-all duration-300 hover:scale-105 hover:brightness-110 text-center"
            style={{ background: "var(--gradient-gold)" }}
          >
            Ver Próximos Partidos
          </a>
          <a
            href="#resultados"
            className="px-6 py-3 font-heading font-bold uppercase tracking-wider text-sm rounded-lg transition-all duration-300 hover:scale-105 text-center"
            style={{
              border: "2px solid hsl(43 80% 45% / 0.5)",
              color: "hsl(43 80% 65%)",
            }}
          >
            Ver Resultados
          </a>
        </div>
      </div>

      {/* Bottom fade to bg */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default CampeonatoHonorBanner;
