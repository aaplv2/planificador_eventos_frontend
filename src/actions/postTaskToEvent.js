import { actionFecth } from "./actionFetch";

export async function postTaskToEvent(body, id) {
  // return actionFecth(
  //   `/events/${id}/tasks`,
  //   "PATCH",
  //   {
  //     "Content-Type": "application/json",
  //     Authorization: "Bearer " + localStorage.getItem("jwt") || "",
  //   },
  //   JSON.stringify(body)
  // );
  return fetch(
    `https://planificador-eventos-backend.vercel.app/events/${id}/tasks`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt") || "",
      },
      body: JSON.stringify(body),
    }
  ).then((res) => {
    return res.json();
  });
}
