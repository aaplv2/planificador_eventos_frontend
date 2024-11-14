import { actionFecth } from "./actionFetch";

export async function updateUserInfo(name, email) {
  return actionFecth(
    "/users/me",
    "PATCH",
    {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("jwt") || "",
    },
    JSON.stringify({
      name,
      email,
    })
  );
}
