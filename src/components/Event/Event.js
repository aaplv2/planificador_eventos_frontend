import React from "react";
import EventCard from "../EventCard/EventCard";
import RegisterForm from "../RegisterForm/RegisterForm";

import EditEventPopout from "../EditEventPopout/EditEventPopout";
import AttendeesTable from "../AttendeesTable/AttendeesTable";
import AddTaskPopout from "../AddTaskPopout/AddTaskPopout";
import Map from "../Map/Map";
import Profile from "../Profile/Profile";

function Event() {
  return (
    <div className="event">
      <Profile />
      <EventCard />
      <RegisterForm />
      <Map />
      <AttendeesTable />
      <AddTaskPopout />
      <EditEventPopout />
    </div>
  );
}

export default Event;
