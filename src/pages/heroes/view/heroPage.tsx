import { useGlobalStore } from "@/app/store/globalStore";

export function HeroPage() {
  const selectedHeroCard = useGlobalStore((s) => s.selectedHeroCard);
  if (selectedHeroCard === null) {
    return (
      <div className="flex items-center justify-center mt-3">
        Выберите пресонажа
      </div>
    );
  }
  if (selectedHeroCard !== null) {
    return (
      <div>
        <div className="flex items-center justify-center mt-3">
          <h1 className="text-center text-2xl font-bold sm:text-3xl lg:text-4xl">
            {selectedHeroCard.name}
          </h1>
        </div>
        <div className="flex items-center justify-center mt-3">
          Карточка персонажа
        </div>
        <div className="flex items-center justify-center mt-3">
          Тут можно разместить все о персонаже
        </div>
        <div className="flex items-center justify-center mt-3">Сборки</div>
        <div className="flex items-center justify-center mt-3">Гайды</div>
        <div className="flex items-center justify-center mt-3">Эмблемы</div>
        <div className="flex items-center justify-center mt-3">Контрпики</div>
      </div>
    );
  }
}
