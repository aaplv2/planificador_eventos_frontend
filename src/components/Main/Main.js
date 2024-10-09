import React from "react";
import EventCard from "../EventCard/EventCard";
import { Calendar } from "../Calendar/Calendar";

import EditEventPopout from "../EditEventPopout/EditEventPopout";
import Profile from "../Profile/Profile";
import EventsCarousel from "../EventsCarousel/EventsCarousel";

function Main() {
  return (
    <div className="main">
      <Profile />
      <EventCard />
      <div className="main-calendar">
        <Calendar mode="single" className="rounded-md border" />
      </div>
      <div className="main-carousel">
        <EventsCarousel />
      </div>
      <EditEventPopout />
    </div>
  );
}

export default Main;
