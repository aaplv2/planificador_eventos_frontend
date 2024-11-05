export async function postEventAction(valuesData) {
  const response = await fetch(`http://localhost:3000/events`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("jwt") || "",
    },
    body: valuesData,
  });
  const data = await response.json();
  return data;
}
