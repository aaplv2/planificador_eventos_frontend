export async function getEventsByDate(date) {
  const response = await fetch(
    `http://localhost:3000/events/${(date)}`
  );
  const data = await response.json();
  return data;
}
