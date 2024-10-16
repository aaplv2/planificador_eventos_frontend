import { create } from "zustand";

export const useEventStore = create((set) => ({
  events: [],
  update: (newEvents) =>
    set(() => ({
      events: newEvents,
    })),
}));
