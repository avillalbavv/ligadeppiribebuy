import { useEffect, useRef, useState } from "react";
import { Trophy, Users, Calendar } from "lucide-react";
import ldpLogo from "@/assets/ldp-logo.png";

const stats = [
  { icon: Calendar, label: "Fundación", value: "17 Dic 1953", animated: false },
  { icon: Trophy, label: "Antigüedad", value: "72", suffix: " Años", animated: true },
  { icon: Users, label: "Clubes", value: "19", animated: true },
  { icon: null, label: "Series", value: "4", isLogo: true, animated: true },
];

const useCountUp = (end: number, duration = 1500, start = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);
  return count;
};

const AnimatedStat = ({ stat, index, inView }: { stat: typeof stats[0]; index: number; inView: boolean }) => {
  const numericValue = stat.animated ? parseInt(stat.value) : 0;
  const count = useCountUp(numericValue, 1500, inView && stat.animated);

  return (
    <div className={`glass-card p-6 text-center hover-lift animate-fade-up delay-${(index + 1) * 100}`}>
      {(stat as any).isLogo ? (
        <img src={ldpLogo} alt="L.D.P." className="w-8 h-8 mx-auto mb-3 object-contain" />
      ) : stat.icon ? (
        <stat.icon className="w-8 h-8 mx-auto text-secondary mb-3" />
      ) : null}
      <div className="font-heading text-2xl md:text-3xl font-bold text-foreground">
        {stat.animated ? `${count}${(stat as any).suffix || ""}` : stat.value}
      </div>
      <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</div>
    </div>
  );
};

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-tight">
            <span className="gold-text">Sobre la Liga</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            La Liga Deportiva de Piribebuy es la institución que organiza y regula el fútbol amateur en la ciudad de Piribebuy, Departamento de Cordillera, Paraguay. Con más de 7 décadas de historia, la L.D.P. es sinónimo de pasión, comunidad y deporte.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <AnimatedStat key={stat.label} stat={stat} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
