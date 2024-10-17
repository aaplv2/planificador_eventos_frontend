import React from "react";
import EventCard from "../EventCard/EventCard";
import { Calendar } from "../Calendar/Calendar";

import Profile from "../Profile/Profile";
import EventsCarousel from "../EventsCarousel/EventsCarousel";
import { Button } from "../Button/Button";
import EventActionPopout from "../EventActionPopout/EventActionPopout";

function Main() {
  return (
    <div className="main">
      <Profile />
      <EventCard />
      <Button>Ver Mas..</Button>
      <div className="main-calendar">
        <Calendar mode="single" className="rounded-md border" />
      </div>
      <div className="main-carousel">
        <EventsCarousel />
      </div>
      <EventActionPopout />
    </div>
  );
}

export default Main;
