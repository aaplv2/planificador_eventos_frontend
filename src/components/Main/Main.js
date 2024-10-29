import React, { useEffect, useState } from "react";
import EventCard from "../EventCard/EventCard";
import { Calendar } from "../Calendar/Calendar";

import EventsCarousel from "../EventsCarousel/EventsCarousel";
import { Button } from "../Button/Button";
import EventActionPopout from "../EventActionPopout/EventActionPopout";
import { useProfileStore } from "../../stores/profileStore";
import { useNavigate } from "react-router-dom";
import { useEventStore } from "../../stores/eventStore";
import { getAllEvents } from "../../actions/getAllEvents";
import dayjs from "dayjs";
import api from "../../utils/api";

function Main() {
  const { isLoggedIn } = useProfileStore();

  const [nextEvent, setNextEvent] = useState({});
  const [carouselEvents, setCarouselEvents] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    api.getAllEvents()
      .then((events) => {
        if (events.length === 0) return;

        setCarouselEvents(events);
        setNextEvent(events[0]);
        // dayjs(events).format("DD/MM/YYYY HH:mm");
        // update(events);

        // events.sort((a, b) => {
        //   a = a.date.split("/");
        //   b = b.date.split("/");
        //   return a[2] - b[2] || a[1] - b[1] || a[0] - b[0];
        // });

        // const sortedDates = events
        //   .map((obj) => {
        //     return { ...obj, date: obj.date };
        //   })
        //   .sort((a, b) => b.date - a.date);
        // setNextEvent(sortedDates[0]);
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
