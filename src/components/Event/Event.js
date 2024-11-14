import React, { useEffect, useState } from "react";
import EventCard from "../EventCard/EventCard";
import RegisterForm from "../RegisterForm/RegisterForm";

import AttendeesTable from "../AttendeesTable/AttendeesTable";
import AddTaskPopout from "../AddTaskPopout/AddTaskPopout";

//borrar profile
import { getEventById } from "../../actions/getEventById";
import { useParams } from "react-router-dom";
import TasksTable from "../TasksTable/TasksTable";
import EventActionPopout from "../EventActionPopout/EventActionPopout";
import { useProfileStore } from "../../stores/profileStore";
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
    <div className="event lg:grid lg:gap-8 lg:grid-cols-2">
      <div>
        <div className="event__card">
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
            showDeleteButton
          />
        </div>
        <div className="event__form-register">
          <RegisterForm event={event} setEvent={setEvent} />
        </div>
      </div>
      <Map />
      {isLoggedIn ? (
        <>
          <div>
            <div className="event__table-attendees">
              <AttendeesTable event={event} />
            </div>
            <div className="event__button-task">
              <AddTaskPopout event={event} setEvent={setEvent} />
            </div>
            <div className="event__table-task">
              <TasksTable event={event} />
            </div>
          </div>
          <EventActionPopout />
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default Event;
