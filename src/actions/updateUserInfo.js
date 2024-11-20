import { actionFecth } from "./actionFetch";

export async function updateUserInfo(name, email) {
  // return actionFecth(
  //   "/users/me",
  //   "PATCH",
  //   {
  //     "Content-Type": "application/json",
  //     Authorization: "Bearer " + localStorage.getItem("jwt") || "",
  //   },
  //   JSON.stringify({
  //     name,
  //     email,
  //   })
  // );
  return fetch("https://planificador-eventos-backend.vercel.app/users/me", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("jwt") || "",
    },
    body: JSON.stringify({
      name,
      email,
    }),
  }).then((res) => {
    return res.json();
  });
}
