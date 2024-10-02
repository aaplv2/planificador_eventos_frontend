import React from "react";
import EventCard from "../EventCard/EventCard";

function Main() {
  return (
    <div className="main">
      <EventCard></EventCard>
      <div className="main__scrollbar">
        <p>Barra horizontal con eventos</p>
      </div>
      <div className="main__calendar">
        <p>Calendario</p>
      </div>
      <div className="main__calendarScroll">
        <p>Calendarios de mes pasado o próximo</p>
      </div>
    </div>
  );
}

export default Main;
