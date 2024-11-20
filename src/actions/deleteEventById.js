import { actionFecth } from "./actionFetch";

export async function deleteEventById(id) {
  // actionFecth(`/events/date/${id}`, "DELETE", {
  //   "Content-Type": "application/json",
  //   Authorization: "Bearer " + localStorage.getItem("jwt") || "",
  // });
  return fetch(
    `https://planificador-eventos-backend.vercel.app/events/date/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt") || "",
      },
    }
  ).then((res) => {
    return res.json();
  });
}
