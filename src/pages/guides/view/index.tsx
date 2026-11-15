import { useGlobalStore } from "@/app/store/globalStore";
import { HeroesSelection } from "@/shared/ui/heroSelection";
import { Page } from "@/shared/ui/page";
import { useEffect } from "react";

export function GuidesPage() {
  const resetHeroSlice = useGlobalStore((s) => s.resetHeroCard);
  useEffect(() => {
    return () => {
      resetHeroSlice();
    };
  }, [resetHeroSlice]);
  return (
    <Page title="Гайды">
      <HeroesSelection />
    </Page>
  );
}
