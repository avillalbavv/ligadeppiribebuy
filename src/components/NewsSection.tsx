import { Newspaper, AlertTriangle, Trophy, ShieldAlert } from "lucide-react";

const NewsSection = () => {
  return (
    <section id="noticias" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-3">
            <Newspaper className="w-5 h-5 text-secondary" />
            <span className="text-xs uppercase tracking-widest text-secondary font-semibold">
              Últimas Novedades
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground">
            Noticias
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">

          {/* 1. FEATURED — Comunicado Club Sport San Blas (more recent / most important) */}
          <article
            className="glass-card p-6 hover-lift animate-fade-up group md:col-span-2 border-secondary/25"
            style={{
              borderWidth: "1px",
              borderColor: "hsl(43 80% 45% / 0.3)",
              boxShadow: "0 0 24px hsl(43 80% 40% / 0.08)",
            }}
          >
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <span
                className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded-full flex items-center gap-1"
                style={{
                  background: "hsl(43 80% 45% / 0.15)",
                  color: "hsl(43 80% 62%)",
                  border: "1px solid hsl(43 80% 45% / 0.3)",
                }}
              >
                <ShieldAlert className="w-3 h-3" />
                Comunicado Oficial
              </span>
              <span className="text-[10px] text-muted-foreground">19 Abr 2026</span>
            </div>

            <h3 className="font-heading text-lg font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">
              Club Sport San Blas — Comunicado oficial
            </h3>

            <div className="space-y-2 text-sm text-muted-foreground leading-relaxed">
              <p>
                Por disposición de la{" "}
                <span className="text-foreground font-medium">Ley 7467/2024</span> y con el
                objetivo de preservar el bienestar de todos en un ambiente deportivo sano y libre
                de violencia, queda{" "}
                <span className="text-secondary font-semibold">
                  prohibida la venta y el consumo de bebidas alcohólicas
                </span>{" "}
                antes, durante y después de los partidos oficiales del campeonato.
              </p>
              <p>
                Habrá controles por parte de los dirigentes locales y la Policía Nacional.
              </p>
              <p>
                Se solicita la colaboración de todos los espectadores y aficionados para
                mantener el orden y alentar a sus equipos como corresponde.
              </p>
            </div>
          </article>

          {/* 2. Sexta fecha — resultados */}
          <article
            className="glass-card p-6 hover-lift animate-fade-up group"
            style={{ animationDelay: "100ms" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] uppercase tracking-widest text-secondary font-semibold bg-secondary/10 px-2 py-1 rounded-full">
                Resultados
              </span>
              <span className="text-[10px] text-muted-foreground">14 Abr 2026</span>
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
              Sexta fecha finalizada: resultados confirmados en Primera y Juvenil
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              La sexta fecha se disputó el martes 14 de abril. 13 de Junio CC venció 2-1 a
              Juventud Cordillerana en Primera División y 12 de Agosto se impuso 2-1 ante Sport San
              Blas. Todos los resultados son finales y confirmados.
            </p>
          </article>

          {/* 3. Tablas oficiales */}
          <article
            className="glass-card p-6 hover-lift animate-fade-up group"
            style={{ animationDelay: "200ms" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] uppercase tracking-widest text-secondary font-semibold bg-secondary/10 px-2 py-1 rounded-full">
                Institucional
              </span>
              <span className="text-[10px] text-muted-foreground">14 Abr 2026</span>
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-secondary transition-colors flex items-center gap-2">
              <Trophy className="w-4 h-4 text-secondary shrink-0" />
              Tablas oficiales publicadas
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Se publican las tablas de posiciones oficiales de las categorías Primera, Juvenil y
              Juvenil D, según las imágenes difundidas por la organización de la Liga.
            </p>
          </article>

          {/* 4. Postergación — Archivo */}
          <article
            className="glass-card p-6 hover-lift animate-fade-up group border-border/40"
            style={{ animationDelay: "300ms" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] uppercase tracking-widest font-semibold bg-muted/60 text-muted-foreground px-2 py-1 rounded-full">
                Archivo
              </span>
              <span className="text-[10px] text-muted-foreground">12 Abr 2026</span>
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-secondary transition-colors flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-muted-foreground shrink-0" />
              Postergación y reprogramación de la 6ª fecha
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              La sexta fecha había sido postergada por inconvenientes climáticos. Una vez
              confirmados los partidos, la cobertura continúa con resultados y tablas publicadas por
              la organización.
            </p>
          </article>

          {/* 5. Fixture — Institucional */}
          <article
            className="glass-card p-6 hover-lift animate-fade-up group"
            style={{ animationDelay: "400ms" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] uppercase tracking-widest text-secondary font-semibold bg-secondary/10 px-2 py-1 rounded-full">
                Institucional
              </span>
              <span className="text-[10px] text-muted-foreground">01 Mar 2026</span>
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
              Fixture completo confirmado
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Las 4 series del campeonato 2026 ya cuentan con fixture completo y recalendarizado.
            </p>
          </article>

        </div>
      </div>
    </section>
  );
};

export default NewsSection;
