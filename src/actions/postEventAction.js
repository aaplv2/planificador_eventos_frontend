import { actionFecth } from "./actionFetch";

export async function postEventAction(valuesData) {
  actionFecth(
    "/events",
    "POST",
    {
      Authorization: "Bearer " + localStorage.getItem("jwt") || "",
    },
    valuesData
  );
}
