import { create } from "zustand";

export const useProfileStore = create((set) => ({
  username: "",
  email: "",
  isLoggedIn: false,
  updateUsername: (newUsername) => set(() => ({ username: newUsername })),
  updateEmail: (newEmail) => set(() => ({ email: newEmail })),
  updateIsLoggedIn: (setIsLoggedIn) =>
    set(() => ({ isLoggedIn: setIsLoggedIn })),
  update: (newUsername, newEmail, setIsLoggedIn) =>
    set(() => ({
      username: newUsername,
      email: newEmail,
      isLoggedIn: setIsLoggedIn,
    })),
}));
