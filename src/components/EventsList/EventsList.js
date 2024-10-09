import React from "react";
import { useParams } from "react-router-dom";
import { getEventsByDate } from "../../actions/getEventsByDate";

export default function EventsList() {
  const { date } = useParams();
  getEventsByDate(encodeURIComponent(date)).then((data) => {
    console.log(data);
  });

  return <div>EventsList</div>;
}
