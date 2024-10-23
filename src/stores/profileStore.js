import { create } from "zustand";

export const useProfileStore = create((set) => ({
  name: "",
  email: "",
  isLoggedIn: false,
  updateUsername: (newName) => set(() => ({ name: newName })),
  updateEmail: (newEmail) => set(() => ({ email: newEmail })),
  updateIsLoggedIn: (setIsLoggedIn) =>
    set(() => ({ isLoggedIn: setIsLoggedIn })),
  update: (newName, newEmail, setIsLoggedIn) =>
    set(() => ({
      name: newName,
      email: newEmail,
      isLoggedIn: setIsLoggedIn,
    })),
}));
