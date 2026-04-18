import { Newspaper, AlertTriangle, Trophy } from "lucide-react";

const NewsSection = () => {
  return (
    <section id="noticias" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-3">
            <Newspaper className="w-5 h-5 text-secondary" />
            <span className="text-xs uppercase tracking-widest text-secondary font-semibold">Últimas Novedades</span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground">
            Noticias
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {/* 1. Featured — Resultados finales 6ta fecha */}
          <article className="glass-card p-6 hover-lift animate-fade-up group md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] uppercase tracking-widest text-secondary font-semibold bg-secondary/10 px-2 py-1 rounded-full">
                Destacado
              </span>
              <span className="text-[10px] text-muted-foreground">14 Abr 2026</span>
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
              Sexta fecha finalizada: resultados confirmados en Primera y Juvenil
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              La sexta fecha del Campeonato 2026 se disputó este martes 14 de abril con resultados contundentes en ambas categorías. En Primera División, 13 de Junio CC venció 2-1 a Juventud Cordillerana en Capilla Cue y 12 de Agosto se impuso 2-1 ante Sport San Blas. En Juvenil, Juventud Cordillerana goleó 4-2 a 13 de Junio CC de visitante y 12 de Agosto derrotó 3-1 a Sport San Blas. Todos los resultados son finales y confirmados.
            </p>
          </article>

          {/* 2. Tablas oficiales publicadas */}
          <article className="glass-card p-6 hover-lift animate-fade-up group" style={{ animationDelay: "100ms" }}>
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
              Se publican las tablas de posiciones oficiales de las categorías Primera, Juvenil y Juvenil D, según las imágenes difundidas por la organización de la Liga.
            </p>
          </article>

          {/* 3. Fixture */}
          <article className="glass-card p-6 hover-lift animate-fade-up group" style={{ animationDelay: "200ms" }}>
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

          {/* 4. Archivo — Postergación climática */}
          <article className="glass-card p-6 hover-lift animate-fade-up group border-border/40" style={{ animationDelay: "300ms" }}>
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
              La sexta fecha había sido postergada por inconvenientes climáticos. Una vez confirmados los partidos disputados, la cobertura continúa con resultados oficiales y tablas publicadas por la organización.
            </p>
          </article>

          {/* 5. CTA */}
          <article className="glass-card p-6 hover-lift animate-fade-up group border-border/40" style={{ animationDelay: "400ms" }}>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] uppercase tracking-widest font-semibold bg-secondary/10 text-secondary px-2 py-1 rounded-full">
                Seguinos
              </span>
              <span className="text-[10px] text-muted-foreground">14 Abr 2026</span>
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
              Seguí la cobertura oficial de la Liga
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Mantenete al día con las actualizaciones oficiales, la cobertura en vivo y las próximas publicaciones de la Liga Deportiva de Piribebuy. ¡No te pierdas ningún detalle del campeonato 2026!
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
