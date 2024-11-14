import React, { useEffect, useState } from "react";
import EventCard from "../EventCard/EventCard";
import { Calendar } from "../Calendar/Calendar";

import EventsCarousel from "../EventsCarousel/EventsCarousel";
import { Button } from "../Button/Button";
import EventActionPopout from "../EventActionPopout/EventActionPopout";
import { useProfileStore } from "../../stores/profileStore";
import { useNavigate } from "react-router-dom";
import { getAllEvents } from "../../actions/getAllEvents";

function Main() {
  const { isLoggedIn } = useProfileStore();
  const [nextEvent, setNextEvent] = useState({});
  const [carouselEvents, setCarouselEvents] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getAllEvents()
      .then((events) => {
        if (events.length === 0) return;

        setCarouselEvents(events);
        setNextEvent(events[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleSeeMoreClick() {
    const dateToURL = encodeURIComponent(nextEvent.date);
    navigate("/events/" + dateToURL + "/" + nextEvent._id);
  }

  return (
    <div className="main">
      <EventCard
        _id={nextEvent._id}
        title={nextEvent.title}
        location={nextEvent.location}
        date={nextEvent.date}
        time={nextEvent.time}
        price={nextEvent.price}
        slots={nextEvent.slots}
        description={nextEvent.description}
        image={nextEvent.image}
        showSubtitle
      />
      <Button
        className="main__button-card text-primary-red"
        variant="link"
        onClick={handleSeeMoreClick}
      >
        Ver Mas..
      </Button>
      <div className="main-calendar">
        <Calendar mode="single" className="rounded-md border" />
      </div>
      <div className="main-carousel">
        <EventsCarousel carouselEvents={carouselEvents} />
      </div>
      <div>
        {isLoggedIn ? <EventActionPopout id="event-popout-action" /> : ""}
      </div>
    </div>
  );
}

export default Main;
