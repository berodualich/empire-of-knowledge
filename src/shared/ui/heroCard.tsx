import { cn } from "cn";
import type { Hero } from "../lib/types/types";

interface HeroCardProps {
  hero: Hero;
  isSelected: boolean;
  onClick: () => void;
}

export function HeroCard({ hero, isSelected, onClick }: HeroCardProps) {
  return (
    <div
      className={cn(
        "flex w-full flex-col overflow-hidden rounded-lg border-2 bg-white transition-all",
        isSelected
          ? "border-slate-900"
          : "border-transparent hover:border-slate-300",
      )}
    >
      <button
        type="button"
        onClick={onClick}
        aria-pressed={isSelected}
        className="relative aspect-2/1 w-full overflow-hidden"
      >
        {hero.icon ? (
          <img
            src={hero.icon}
            alt={hero.name}
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-200 text-2xl font-bold text-slate-500">
            {hero.name.charAt(0)}
          </div>
        )}
      </button>

      <span className="bg-white px-1 py-1 text-center text-xs font-medium text-slate-900">
        {hero.name}
      </span>
    </div>
  );
}
