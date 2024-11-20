import { actionFecth } from "./actionFetch";

export async function register(name, email, password) {
  // return actionFecth(
  //   "/signup",
  //   "POST",
  //   {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   },
  //   JSON.stringify({ name, email, password })
  // )
  return fetch("https://planificador-eventos-backend.vercel.app/signup", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
}
