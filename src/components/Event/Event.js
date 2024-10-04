import React from "react";
import EventCard from "../EventCard/EventCard";
import Form from "../Form/Form";

function Event() {
  return (
    <div className="event">
      <EventCard />
      <div>
        <p>detalles</p>
      </div>
      <Form/>
      <div>
        <p>MAPA</p>
      </div>
    </div>
  );
}

export default Event;
