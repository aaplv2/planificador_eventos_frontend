export async function postRegisterToEvent(body, id) {
  const response = await fetch(`http://localhost:3000/events/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("jwt") || "",
    },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return data;
}
