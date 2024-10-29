import dayjs from "dayjs";

export async function getEventsByDate(date) {
  const formatedDate = dayjs(decodeURIComponent(date)).format("YYYY/DD/MM");
  console.log(formatedDate);
  const response = await fetch(
    `http://localhost:3000/events/${encodeURIComponent(formatedDate)}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt") || "",
      },
    }
  );
  const data = await response.json();
  return data;
}
