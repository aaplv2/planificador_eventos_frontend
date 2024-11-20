import dayjs from "dayjs";
import { actionFecth } from "./actionFetch";
var customParseFormat = require("dayjs/plugin/customParseFormat");

dayjs.extend(customParseFormat);

export async function getEventsByDate(date) {
  // return actionFecth(`/events/${encodeURIComponent(date)}`, "GET", {
  //   "Content-Type": "application/json",
  //   Authorization: "Bearer " + localStorage.getItem("jwt") || "",
  // });
  return fetch(
    `https://planificador-eventos-backend.vercel.app/events/${encodeURIComponent(
      date
    )}`,
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
