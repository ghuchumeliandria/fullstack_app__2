import { create } from "zustand";
import { axiosInstance } from "@/app/api/axios.instance";

interface AboutStore {
  content: string;
  setContent: (val: string) => void;
  loadAbout: () => void;
  updateAbout: (val: string) => Promise<void>;
}

export const useAboutStore = create<AboutStore>((set) => ({
  content: "",
  setContent: (val) => set({ content: val }),

  loadAbout: async () => {
    try {
      const res = await axiosInstance.get("/about/me");
      set({ content: res.data.content });
    } catch (err) {
      console.error("Failed to load about:", err);
    }
  },

  updateAbout: async (val) => {
    try {
      await axiosInstance.patch("/about", { content: val });
      set({ content: val });
    } catch (err) {
      console.error("Failed to update about:", err);
    }
  },
}));
