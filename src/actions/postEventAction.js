export async function postEventAction(valuesData) {
  const response = await fetch(`http://localhost:3000/events/`, {
    method: "POST",
    body: valuesData,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("jwt") || "",
    },
  });
  const data = await response.json();
  return data;
}
