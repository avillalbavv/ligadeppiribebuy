import { getClubLogo } from "@/data/clubLogos";

interface Props {
  clubName: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "w-6 h-6",
  md: "w-10 h-10",
  lg: "w-12 h-12",
};

const ClubLogo = ({ clubName, size = "md", className = "" }: Props) => {
  const logo = getClubLogo(clubName);

  if (logo) {
    return (
      <img
        src={logo}
        alt={clubName}
        className={`${sizeClasses[size]} object-contain ${className}`}
      />
    );
  }

  // Fallback: first letter in a circle
  return (
    <div className={`${sizeClasses[size]} rounded-full bg-primary/30 border border-primary/50 flex items-center justify-center ${className}`}>
      <span className="font-heading text-sm font-bold text-secondary">
        {clubName.charAt(0)}
      </span>
    </div>
  );
};

export default ClubLogo;
