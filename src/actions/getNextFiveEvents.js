export async function getNextFiveEvents() {
  const response = await fetch(`http://localhost:3000/events`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("jwt") || "",
    },
  });
  const data = await response.json();
  return data;
}
