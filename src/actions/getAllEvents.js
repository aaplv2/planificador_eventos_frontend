export async function getAllEvents() {
  return fetch("https://planificador-eventos-backend.vercel.app/events", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("jwt") || "",
    },
  }).then((res) => {
    return res.json();
  });
}
