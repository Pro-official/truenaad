// store/useAppStore.ts
import { create } from "zustand";

interface AppState {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
}

export const useZusStore = create<AppState>((set) => ({
  theme: "light",
  isMenuOpen: false,
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  setTheme: (theme) => set({ theme }),
}));
