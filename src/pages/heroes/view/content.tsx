import { HeroesSelection } from "@/shared/ui/heroSelection";
import { HeroPage } from "./heroPage";

export function Content() {
  return (
    <div className="flex flex-col">
      <HeroesSelection />
      <HeroPage />
    </div>
  );
}
