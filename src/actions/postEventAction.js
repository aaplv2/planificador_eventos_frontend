export async function postEventAction(body) {
  const response = await fetch(`http://localhost:3000/events/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return data;
}
