import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createHeroSlice, type HeroSlice } from "./slices/heroSlice";

export type GlobalStore = HeroSlice;

export const useGlobalStore = create<GlobalStore>()(
  devtools(
    (...args) => ({
      ...createHeroSlice(...args),
    }),
    { name: "GlobalStore" },
  ),
);
