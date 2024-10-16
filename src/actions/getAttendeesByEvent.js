export async function getAttendeesByEvent(id) {
    const response = await fetch(
      `http://localhost:3000/events?id=${id}`
    );
    const data = await response.json()
    return data
  }