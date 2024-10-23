export async function getAllEvents() {
    const response = await fetch(
      `http://localhost:3000/events`
    );
    const data = await response.json()
    return data
  }