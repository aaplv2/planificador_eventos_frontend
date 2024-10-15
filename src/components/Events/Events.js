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
        events.map((data) => {
          return <EventCard key={data.id} title={data.title} />;
        })}
    </div>
  );
}

export default Events;
