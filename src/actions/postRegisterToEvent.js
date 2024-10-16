export async function postRegisterToEvent(body, id) {
  const response = await fetch(`http://localhost:3000/events/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return data;
}
