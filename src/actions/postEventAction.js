export async function postEventAction(valuesData) {
  return fetch("https://planificador-eventos-backend.vercel.app/events", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("jwt") || "",
    },
    body: valuesData,
  }).then((res) => {
    return res.json();
  });
}
