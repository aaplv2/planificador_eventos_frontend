import { actionFecth } from "./actionFetch";

export async function deleteEventById(id) {
  actionFecth(`/events/date/${id}`, "DELETE", {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("jwt") || "",
  });
}
