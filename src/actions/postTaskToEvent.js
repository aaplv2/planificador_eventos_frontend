import { actionFecth } from "./actionFetch";

export async function postTaskToEvent(body, id) {
  return actionFecth(
    `/events/${id}/tasks`,
    "PATCH",
    {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("jwt") || "",
    },
    JSON.stringify(body)
  );

}
