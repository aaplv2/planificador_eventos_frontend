export async function postRegisterToEvent(body, id) {
  const response = await fetch(`http://localhost:3000/events/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((response) => {
      if (response.ok) {
        return response.json().catch(() => {
          throw new Error("Invalid JSON");
        });
      } else {
        throw new Error("Network response was not ok");
      }
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}
