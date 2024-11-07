import React, { useEffect, useState } from "react";
import EventCard from "../EventCard/EventCard";
import RegisterForm from "../RegisterForm/RegisterForm";

import AttendeesTable from "../AttendeesTable/AttendeesTable";
import AddTaskPopout from "../AddTaskPopout/AddTaskPopout";

//borrar profile
import Profile from "../Profile/Profile";
import { getEventById } from "../../actions/getEventById";
import { useParams } from "react-router-dom";
import TasksTable from "../TasksTable/TasksTable";
import EventActionPopout from "../EventActionPopout/EventActionPopout";
import { useProfileStore } from "../../stores/profileStore";
import MapContainer from "../MapContainer/MapContainer";
import Map from "../Map/Map";

function Event() {
  const { isLoggedIn } = useProfileStore();

  const { id } = useParams();

  const [event, setEvent] = useState({});

  useEffect(() => {
    getEventById(id).then((data) => {
      setEvent(data.data);
    });
  }, []);

  return (
    <div className="event">
      <EventCard
        title={event.title}
        key={event.id}
        date={event.date}
        time={event.time}
        location={event.location}
        price={event.price}
        slots={event.slots}
        image={event.image}
        description={event.description}
        showTable
      />
      <RegisterForm event={event} setEvent={setEvent} />
      {/* <MapContainer /> */}
      <Map />
      {isLoggedIn ? (
        <>
          <AttendeesTable event={event} />
          <AddTaskPopout event={event} setEvent={setEvent} />
          <TasksTable event={event} />
          <EventActionPopout />
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default Event;
