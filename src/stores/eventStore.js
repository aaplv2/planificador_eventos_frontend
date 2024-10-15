import { create } from "zustand";

export const useEventStore = create((set) => ({
  title: "",
  date: "",
  time: "",
  location: "",
  price: "",
  slots: "",
  updateTitle: (newTitle) => set(() => ({ title: newTitle })),
  updateDate: (newDate) => set(() => ({ date: newDate })),
  updateTime: (newTime) => set(() => ({ time: newTime })),
  updateLocation: (newLocation) => set(() => ({ location: newLocation })),
  updatePrice: (newPrice) => set(() => ({ price: newPrice })),
  updateSlots: (newSlots) => set(() => ({ slots: newSlots })),
  update: (newTitle, newDate, newTime, newLocation, newPrice, newSlots) =>
    set(() => ({
      title: newTitle,
      date: newDate,
      time: newTime,
      location: newLocation,
      price: newPrice,
      slots: newSlots,
    })),
}));
