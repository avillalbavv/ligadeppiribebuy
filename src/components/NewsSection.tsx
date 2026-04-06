import { news } from "@/data/fixtures";
import { Newspaper } from "lucide-react";

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {news.map((item, i) => (
            <article
              key={item.id}
              className={`glass-card p-6 hover-lift animate-fade-up delay-${(i + 1) * 100} group`}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[10px] uppercase tracking-widest text-secondary font-semibold bg-secondary/10 px-2 py-1 rounded-full">
                  {item.category}
                </span>
                <span className="text-[10px] text-muted-foreground">{item.date}</span>
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
