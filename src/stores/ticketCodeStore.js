import { create } from "zustand";

const useTicketCodeStore = create((set) => ({
  ticketCode: Math.floor(100000 + Math.random() * 900000),
  generateTicketCode: () => {
    set((state) => ({
      ticketCode: Math.floor(100000 + Math.random() * 900000),
    }));
  },
  setTicketCode: (code) => {
    set(() => ({
      ticketCode: code,
    }));
  },
}));

export default useTicketCodeStore;
