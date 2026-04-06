import { useState } from "react";
import { Menu, X } from "lucide-react";
import ldpLogo from "@/assets/ldp-logo.png";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Posiciones", href: "#posiciones" },
  { label: "Fixture", href: "#fixture" },
  { label: "Clubes", href: "#clubes" },
  { label: "Noticias", href: "#noticias" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/30">
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20">
        <a href="#inicio" className="flex items-center gap-2">
          <img src={ldpLogo} alt="L.D.P." className="w-10 h-10 object-contain" />
          <div className="hidden sm:block">
            <span className="font-heading text-lg font-bold tracking-wide text-foreground">L.D.P.</span>
            <span className="block text-[10px] text-muted-foreground leading-none">Piribebuy</span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-secondary transition-colors duration-200 rounded-md hover:bg-muted/50"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-foreground"
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass border-t border-border/30 animate-fade-up">
          <div className="container mx-auto py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-secondary transition-colors rounded-md hover:bg-muted/50"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
