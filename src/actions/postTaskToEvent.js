export async function postTaskToEvent(body, id) {
  return fetch(
    `https://planificador-eventos-backend.vercel.app/events/${id}/tasks`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt") || "",
      },
      body: JSON.stringify(body),
    }
  ).then((res) => {
    return res.json();
  });
}
