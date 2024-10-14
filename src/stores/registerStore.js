import { create } from "zustand";

export const useRegisterStore = create((set) => ({
  name: "",
  email: "",
  phone: "",
  updateName: (newName) => set(() => ({ name: newName })),
  updateName: (newEmail) => set(() => ({ email: newEmail })),
  updateName: (newPhone) => set(() => ({ phone: newPhone })),
  update: (newName, newEmail, newPhone) =>
    set(() => ({ name: newName, email: newEmail, phone: newPhone })),
}));
