import { actionFecth } from "./actionFetch";

export async function register(name, email, password) {
  return actionFecth(
    "/signup",
    "POST",
    {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    JSON.stringify({ name, email, password })
  )
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
}
