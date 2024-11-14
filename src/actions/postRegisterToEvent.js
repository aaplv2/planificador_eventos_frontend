import { actionFecth } from "./actionFetch";

export async function postRegisterToEvent(body, id) {
  return actionFecth(
    `/events/${id}/attendees`,
    "PATCH",
    {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("jwt") || "",
    },
    JSON.stringify(body)
  );
}
