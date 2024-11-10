export async function deleteEventById(id) {
    const response = await fetch(`http://localhost:3000/events/date/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt") || "",
      },
    });
    const data = await response.json();
    return data;
  }
  