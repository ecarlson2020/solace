import { create } from "zustand";
import axios from "axios";
// ts
import { Note } from "./types";
// utils
import { apiUrl } from "./common/utils";

export interface RootState {
  isLightMode: boolean;
  setIsLightMode: (isLightMode: boolean) => void;
  searchPhrase: string;
  setSearchPhrase: (searchPhrase: string) => void;
  isDialogOpen: boolean;
  setIsDialogOpen: (isDialogOpen: boolean) => void;
  notes: Note[];
  getNotes: () => void;
}

export const useRootStore = create((set) => ({
  isLightMode: true,
  setIsLightMode: (isLightMode) => set({ isLightMode }),
  searchPhrase: "",
  setSearchPhrase: (searchPhrase) => set({ searchPhrase }),
  isDialogOpen: false,
  setIsDialogOpen: (isDialogOpen) => set({ isDialogOpen }),
  notes: [],
  getNotes: async () => {
    const response = await axios.get(`${apiUrl}/all`);
    set({ notes: response.data });
  },
}));
