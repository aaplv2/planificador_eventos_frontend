import { actionFecth } from "./actionFetch";

export async function getUser(token) {
  // return actionFecth("/users/me", "GET", {
  //   Accept: "application/json",
  //   "Content-Type": "application/json",
  //   Authorization: `Bearer ${token}`,
  // })
  return fetch("https://planificador-eventos-backend.vercel.app//users/me", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => data);
}
