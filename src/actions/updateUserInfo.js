export async function updateUserInfo(name, email) {
  const response = await fetch(`http://localhost:3000/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("jwt") || "",
    },
    body: JSON.stringify({
      name,
      email,
    }),
  });
  const data = await response.json();
  return data;
}
