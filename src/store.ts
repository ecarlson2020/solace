import { create } from "zustand";

export interface RootState {
  isLightMode: boolean;
  setIsLightMode: (isLightMode: boolean) => void;
  isDialogOpen: boolean;
  setIsDialogOpen: (isDialogOpen: boolean) => void;
}

export const useRootStore = create((set) => ({
  isLightMode: true,
  setIsLightMode: (isLightMode) => set({ isLightMode }),
  isDialogOpen: false,
  setIsDialogOpen: (isDialogOpen) => set({ isDialogOpen }),
}));
