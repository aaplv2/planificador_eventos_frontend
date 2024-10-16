import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useEventStore } from "../../stores/eventStore";

import { getEventsByDate } from "../../actions/getEventsByDate";

import EventCard from "../EventCard/EventCard";
import Profile from "../Profile/Profile";
import { Button } from "../Button/Button";

function Events() {
  const { date } = useParams();
  const { events, updateEvents } = useEventStore();

  const navigate = useNavigate();

  useEffect(() => {
    getEventsByDate(date).then((events) => {
      updateEvents(events);
    });
  }, []);

  const handleGoClick = (id) => {
    const dateToURL = encodeURIComponent(date);
    navigate("/events/" + dateToURL + "/" + id);
  };

  return (
    <div className="event">
      <Profile />
      {events &&
        events.map((event, card) => {
          return (
            <div key={card} className="event__card">
              <EventCard
                key={event.id}
                title={event.title}
                date={event.date}
                time={event.time}
                location={event.location}
                price={event.price}
                slots={event.slots}
              />
              <Button onClick={() => handleGoClick(event.id)}>Ir</Button>
            </div>
          );
        })}
    </div>
  );
}

export default Events;
