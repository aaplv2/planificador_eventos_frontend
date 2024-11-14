import { actionFecth } from "./actionFetch";

export async function authorize(email, password) {
  return actionFecth(
    "/signin",
    "POST",
    {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    JSON.stringify({ email, password })
  )
    .then((data) => {
      if (data.token) {
        localStorage.setItem("jwt", data.token);
        return data;
      }
    })
    .catch((err) => console.log(err));
}
