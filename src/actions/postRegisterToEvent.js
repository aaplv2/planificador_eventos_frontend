import { actionFecth } from "./actionFetch";

export async function postRegisterToEvent(body, id) {
  // return actionFecth(
  //   `/events/${id}/attendees`,
  //   "PATCH",
  //   {
  //     "Content-Type": "application/json",
  //     Authorization: "Bearer " + localStorage.getItem("jwt") || "",
  //   },
  //   JSON.stringify(body)
  // );
  return fetch(
    `https://planificador-eventos-backend.vercel.app/events/${id}/attendees`,
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
