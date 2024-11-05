import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useEventStore } from "../../stores/eventStore";

import { getEventsByDate } from "../../actions/getEventsByDate";

import EventCard from "../EventCard/EventCard";
import { Button } from "../Button/Button";

function Events() {
  const { events, update } = useEventStore();

  const { date } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    getEventsByDate(date).then((events) => {
      update(events);
    });
  }, []);

  const handleGoClick = (id) => {
    const dateToURL = encodeURIComponent(date);
    navigate("/events/" + dateToURL + "/" + id);
  };

  return (
    <div className="event">
      {events &&
        events.map((event, card) => {
          return (
            <div key={card} className="event__card">
              <EventCard
                key={event.id}
                title={event.title}
                date={event.date}
                time={event.time}
                description={event.description}
                image={event.image}
              />
              <Button onClick={() => handleGoClick(event.id)}>Ir</Button>
            </div>
          );
        })}
    </div>
  );
}

export default Events;
