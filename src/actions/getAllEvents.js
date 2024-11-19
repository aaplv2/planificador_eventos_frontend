import { actionFecth } from "./actionFetch";

export async function getAllEvents() {
  return actionFecth("/api/events", "GET", {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("jwt") || "",
  });
}
