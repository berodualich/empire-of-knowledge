import { useGlobalStore } from "@/app/store/globalStore";
import { Heroes } from "@/shared/lib/heros";
import { HeroCard } from "@/shared/ui/heroCard";
import { useState } from "react";

export function HeroesSelection() {
  const [search, setSearch] = useState("");

  const selectedHeroCard = useGlobalStore((s) => s.selectedHeroCard);
  const setSelectedHeroCard = useGlobalStore((s) => s.setSelectedHeroCard);

  const filtered = Heroes.filter((hero) =>
    hero.name.toLowerCase().includes(search.trim().toLowerCase()),
  );

  return (
    <div>
      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Поиск персонажа..."
        className="mb-3 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-slate-900"
      />

      <div className="max-h-60 overflow-y-auto rounded-sm border border-gray-200">
        {filtered.length === 0 ? (
          <p className="py-4 text-center text-sm text-slate-500">
            Персонаж не найден
          </p>
        ) : (
          <div className="grid grid-cols-3 gap-2">
            {filtered.map((hero) => (
              <HeroCard
                key={hero.name}
                hero={hero}
                isSelected={selectedHeroCard?.name === hero.name}
                onClick={() => setSelectedHeroCard(hero)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
