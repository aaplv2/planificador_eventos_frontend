import React from "react";
import EventCard from "../EventCard/EventCard";

import Profile from "../Profile/Profile";

function Events() {
  return (
    <div className="event">
      <Profile />
      <EventCard />
    </div>
  );
}

export default Events;
