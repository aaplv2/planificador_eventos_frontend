import React from "react";
import EventCard from "../EventCard/EventCard";
import { Calendar } from "../Calendar/Calendar";

import Profile from "../Profile/Profile";
import EventsCarousel from "../EventsCarousel/EventsCarousel";
import { Button } from "../Button/Button";
import EventActionPopout from "../EventActionPopout/EventActionPopout";
import { useProfileStore } from "../../stores/profileStore";
import { useNavigate } from "react-router-dom";

function Main() {
  const { isLoggedIn } = useProfileStore();

  const navigate = useNavigate();

  function handleSeeMoreClick() {
    navigate();
    console.log("ir al próximo evento");
  }

  return (
    <div className="main">
      <Profile />
      <EventCard />
      <Button onClick={handleSeeMoreClick}>Ver Mas..</Button>
      <div className="main-calendar">
        <Calendar mode="single" className="rounded-md border" />
      </div>
      <div className="main-carousel">
        <EventsCarousel />
      </div>
      <div className="main-popout">
        {isLoggedIn ? <EventActionPopout /> : ""}
      </div>
    </div>
  );
}

export default Main;
