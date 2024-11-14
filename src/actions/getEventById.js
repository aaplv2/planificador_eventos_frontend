import { actionFecth } from "./actionFetch";

export async function getEventById(id) {
  return actionFecth(`/events/date/${id}`, "GET", {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("jwt") || "",
  });
}
