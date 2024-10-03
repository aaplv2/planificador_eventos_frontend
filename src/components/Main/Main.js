import React from "react";
import EventCard from "../EventCard/EventCard";
import { Calendar } from "../Calendar/Calendar";

function Main() {
  return (
    <div className="main">
      <EventCard></EventCard>
      <div className="main__scrollbar">
        <p>Barra horizontal con eventos</p>
      </div>
      <div className="main__calendar">
        <Calendar mode="single" className="rounded-md border" />
      </div>
      <div className="main__calendarScroll">
        <p>Calendarios de mes pasado o próximo</p>
      </div>
    </div>
  );
}

export default Main;
