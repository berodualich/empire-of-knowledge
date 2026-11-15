import { Page } from "@/shared/ui/page";
import { Content } from "./content";
import { useEffect } from "react";
import { useGlobalStore } from "@/app/store/globalStore";

export function HeroesPage() {
  const resetHeroSlice = useGlobalStore((s) => s.resetHeroCard);
  useEffect(() => {
    return () => {
      resetHeroSlice();
    };
  }, [resetHeroSlice]);
  return (
    <Page title="Персонажи">
      <Content></Content>
    </Page>
  );
}
