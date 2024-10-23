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

function Main() {
  const { isLoggedIn } = useProfileStore();

  const [nextEvent, setNextEvent] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    // console.log(dayjs().add(1, "day").format("DD/MM/YYYY HH:mm"));
    getAllEvents().then((events) => {
      // dayjs(events).format("DD/MM/YYYY HH:mm");
      // update(events);

      // events.sort((a, b) => {
      //   a = a.date.split("/");
      //   b = b.date.split("/");
      //   return a[2] - b[2] || a[1] - b[1] || a[0] - b[0];
      // });

      const sortedDates = events
        .map((obj) => {
          return { ...obj, date: obj.date };
        })
        .sort((a, b) => b.date - a.date);
      setNextEvent(sortedDates[0]);
    });
  }, []);

  function handleSeeMoreClick() {
    const dateToURL = encodeURIComponent(nextEvent.date);
    navigate("/events/" + dateToURL + "/" + nextEvent.id);
  }

  return (
    <div className="main">
      <EventCard
        title={nextEvent?.title}
        description={nextEvent?.description}
        showSubtitle
      />
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
