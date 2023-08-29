import { create } from "zustand";
// ts
import { Note } from "./types";

export interface RootState {
  isLightMode: boolean;
  setIsLightMode: (isLightMode: boolean) => void;
  isDialogOpen: boolean;
  setIsDialogOpen: (isDialogOpen: boolean) => void;
  notes: Note[];
  setNotes: (notes: string) => void;
}

export const useRootStore = create((set) => ({
  isLightMode: true,
  setIsLightMode: (isLightMode) => set({ isLightMode }),
  isDialogOpen: false,
  setIsDialogOpen: (isDialogOpen) => set({ isDialogOpen }),
  notes: [],
  setNotes: (notes) => set({ notes }),
}));
