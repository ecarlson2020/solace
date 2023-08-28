import { create } from "zustand";

export interface RootState {
  headerHeight: number;
  setHeaderHeight: (height: number) => void;
  isLightMode: boolean;
  setIsLightMode: (isLightMode: boolean) => void;
}

export const useRootStore = create((set) => ({
  headerHeight: 0,
  setHeaderHeight: (headerHeight) => set({ headerHeight }),
  isLightMode: true,
  setIsLightMode: (isLightMode) => set({ isLightMode }),
}));
