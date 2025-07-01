import { create } from "zustand";
import { axiosInstance } from "../api/axios.instance";

export type User = {
  _id: string;
  fullName: string;
  email: string;
  userImage?: string;
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

  loadUser: async () => {
    const stored = localStorage.getItem("user");
    if (stored) {
      set({ user: JSON.parse(stored) });
    }

    try {
      const res = await axiosInstance.get("/auth/current-user");
      const user = res.data;
      localStorage.setItem("user", JSON.stringify(user));
      set({ user });
    } catch (err) {
      console.error("Failed to load user", err);
    }
  },

  logout: () => {
    localStorage.removeItem("user");
    set({ user: null });
  },
}));
