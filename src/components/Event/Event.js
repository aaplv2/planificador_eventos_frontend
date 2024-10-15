import React, { useEffect, useState } from "react";
import EventCard from "../EventCard/EventCard";
import RegisterForm from "../RegisterForm/RegisterForm";

import EditEventPopout from "../EditEventPopout/EditEventPopout";
import AttendeesTable from "../AttendeesTable/AttendeesTable";
import AddTaskPopout from "../AddTaskPopout/AddTaskPopout";
import Map from "../Map/Map";
import Profile from "../Profile/Profile";
import { getEventById } from "../../actions/getEventById";
import { useParams } from "react-router-dom";

function Event() {
  const { id } = useParams();

  const [event, setEvent] = useState({});

  useEffect(() => {
    getEventById(id).then((data) => {
      setEvent(data[0]);
    });
  }, []);

  return (
    <div className="event">
      <Profile />
      <EventCard
        title={event.title}
        key={event.id}
        date={event.date}
        time={event.time}
        location={event.location}
        price={event.price}
        slots={event.slots}
        showTable
      />
      <RegisterForm />
      <Map />
      <AttendeesTable />
      <AddTaskPopout />
      <EditEventPopout />
    </div>
  );
}

export default Event;
