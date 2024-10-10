import { create } from "zustand";

export const useProfileStore = create((set) => ({
  username: "",
  email: "",
  updateUsername: (newUsername) => set(() => ({ username: newUsername })),
  updateEmail: (newEmail) => set(() => ({ email: newEmail })),
  update: (newUsername, newEmail) =>
    set(() => ({ username: newUsername, email: newEmail })),
}));
