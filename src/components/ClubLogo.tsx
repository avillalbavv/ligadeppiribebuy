import { getClubLogo } from "@/data/clubLogos";

interface Props {
  clubName: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizeClasses = {
  xs: "w-5 h-5",
  sm: "w-7 h-7",
  md: "w-10 h-10",
  lg: "w-14 h-14",
  xl: "w-20 h-20",
};

const fallbackTextSize = {
  xs: "text-[10px]",
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base",
  xl: "text-xl",
};

const ClubLogo = ({ clubName, size = "md", className = "" }: Props) => {
  const logo = getClubLogo(clubName);
  const sizeClass = sizeClasses[size];
  const fallbackText = fallbackTextSize[size];

  if (logo) {
    return (
      <img
        src={logo}
        alt={`Escudo de ${clubName}`}
        title={clubName}
        className={`${sizeClass} object-contain flex-shrink-0 ${className}`}
        style={{ imageRendering: "auto" }}
        onError={(e) => {
          // If image fails to load, replace with fallback div
          const target = e.currentTarget;
          target.style.display = "none";
          const fallback = target.nextElementSibling as HTMLElement;
          if (fallback) fallback.style.display = "flex";
        }}
      />
    );
  }

  // Fallback: abbreviated club name in a styled circle
  const initials = clubName
    .replace(/de |De |del |Del /g, "")
    .split(" ")
    .slice(0, 2)
    .map((w) => w.charAt(0).toUpperCase())
    .join("");

  return (
    <div
      className={`${sizeClass} rounded-lg bg-primary/20 border border-secondary/30 flex items-center justify-center flex-shrink-0 ${className}`}
      title={clubName}
      aria-label={`Escudo de ${clubName}`}
    >
      <span className={`font-heading font-bold text-secondary ${fallbackText} leading-none`}>
        {initials || clubName.charAt(0).toUpperCase()}
      </span>
    </div>
  );
};

export default ClubLogo;
