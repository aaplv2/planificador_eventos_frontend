import { actionFecth } from "./actionFetch";

export async function getUser(token) {
  return actionFecth("/users/me", "GET", {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  }).then((data) => data);
}
