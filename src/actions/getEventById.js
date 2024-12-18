export async function getEventById(id) {
  return fetch(
    `https://planificador-eventos-backend.vercel.app/events/date/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt") || "",
      },
    }
  ).then((res) => {
    return res.json();
  });
}
