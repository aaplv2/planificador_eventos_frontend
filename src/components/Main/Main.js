import React from "react";
import EventCard from "../EventCard/EventCard";
import { Calendar } from "../Calendar/Calendar";

function Main() {
  return (
    <div className="main">
      <EventCard/>
      <div className="main__calendar">
        <Calendar mode="single" className="rounded-md border" />
      </div>
      <div className="main__carousel">
        <p>Barra horizontal con eventos</p>
      </div>
    </div>
  );
}

export default Main;
