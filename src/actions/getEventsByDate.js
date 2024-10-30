import dayjs from "dayjs";
var customParseFormat = require("dayjs/plugin/customParseFormat");

dayjs.extend(customParseFormat);

export async function getEventsByDate(date) {
  const response = await fetch(
    `http://localhost:3000/events/${encodeURIComponent(date)}`,
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
