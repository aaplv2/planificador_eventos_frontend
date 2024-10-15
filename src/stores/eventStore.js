import { create } from "zustand";

export const useEventStore = create((set) => ({
  events: [],
  updateEvents: (newEvents) =>
    set(() => ({
      events: newEvents,
    })),
}));
