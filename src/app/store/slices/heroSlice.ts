import type { Hero } from "@/shared/lib/types/types";
import type { StateCreator } from "zustand";

export interface HeroSlice {
  selectedHeroCard: Hero | null;
  setSelectedHeroCard: (hero: Hero | null) => void;
  resetHeroCard: () => void;
}
const initialState = {
  selectedHeroCard: null as Hero | null,
};
export const createHeroSlice: StateCreator<HeroSlice, [], [], HeroSlice> = (
  set,
) => ({
  selectedHeroCard: null,
  setSelectedHeroCard: (hero) => set({ selectedHeroCard: hero }),
  resetHeroCard: () => set(initialState),
});
