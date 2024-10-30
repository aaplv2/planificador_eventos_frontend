export async function getEventById(id) {
  const response = await fetch(`http://localhost:3000/events/date/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("jwt") || "",
    },
  });
  const data = await response.json();
  return data;
}
