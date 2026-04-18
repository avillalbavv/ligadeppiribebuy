import { Instagram, MapPin, Phone, Facebook } from "lucide-react";
import ldpLogo from "@/assets/ldp-logo.png";

const FooterSection = () => {
  return (
    <footer id="contacto" className="border-t border-border/30">
      <div className="container mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={ldpLogo} alt="L.D.P." className="w-10 h-10 object-contain" />
              <div>
                <span className="font-heading text-lg font-bold text-foreground">L.D.P.</span>
                <span className="block text-[10px] text-muted-foreground">Liga Deportiva de Piribebuy</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Organizando el fútbol de Piribebuy desde 1953. Más de 7 décadas de pasión, comunidad y deporte.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-foreground mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-secondary flex-shrink-0" />
                <span>General Díaz, Yegros, Piribebuy, Paraguay</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
                <span>0515 212 442</span>
              </li>
              <li className="flex items-center gap-2">
                <Facebook className="w-4 h-4 text-secondary flex-shrink-0" />
                <a href="https://www.facebook.com/LaGranatePiribebuy/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                  La Granate Piribebuy
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-secondary flex-shrink-0" />
                <a href="https://www.instagram.com/lagranatepiribebuy" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                  @lagranatepiribebuy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-foreground mb-4">Enlaces</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#posiciones" className="hover:text-secondary transition-colors">Posiciones</a></li>
              <li><a href="#fixture" className="hover:text-secondary transition-colors">Fixture</a></li>
              <li><a href="#clubes" className="hover:text-secondary transition-colors">Clubes</a></li>
              <li><a href="#noticias" className="hover:text-secondary transition-colors">Noticias</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/30 text-center space-y-1">
          <p className="text-xs text-muted-foreground">
            © 2026 Liga Deportiva de Piribebuy. Todos los derechos reservados.
          </p>
          <p className="text-[10px] text-muted-foreground/60">
            Desarrollado por <span className="text-secondary/80">Univ. Alejandro Villalba</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
