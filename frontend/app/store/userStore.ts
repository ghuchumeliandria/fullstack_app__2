import { create } from "zustand";

export type User = {
  name: string;
  image: string;
  email: string;
};

type Store = {
  user: User | null;
  setUser: (user: User) => void;
  loadUser: () => void;
  logout: () => void;
};

export const useUserStore = create<Store>((set) => ({
  user: null,
  setUser: (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    set({ user });
  },
  loadUser: () => {
    const stored = localStorage.getItem("user");
    if (stored) set({ user: JSON.parse(stored) });
  },
  logout: () => {
    localStorage.removeItem("user");
    set({ user: null });
  },
}));
