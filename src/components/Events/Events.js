import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import EventCard from "../EventCard/EventCard";
import Profile from "../Profile/Profile";
import { useEventStore } from "../../stores/eventStore";
import { getEventsByDate } from "../../actions/getEventsByDate";

function Events() {
  const { date } = useParams();
  const { events, updateEvents } = useEventStore();

  useEffect(() => {
    getEventsByDate(date).then((events) => {
      updateEvents(events);
    });
  }, []);

  return (
    <div className="event">
      <Profile />
      {events &&
        events.map((event) => {
          return (
            <EventCard
              key={event.id}
              title={event.title}
              date={event.date}
              time={event.time}
              location={event.location}
              price={event.price}
              slots={event.slots}
            />
          );
        })}
    </div>
  );
}

export default Events;
