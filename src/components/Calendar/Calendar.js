import * as React from "react";
import { IconSignLeft, IconSignRight } from "@tabler/icons-react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { useNavigate } from "react-router-dom";

import { cn } from "../../lib/utils";
import { getEventsByDate } from "../../actions/getEventsByDate";
import { useEventStore } from "../../stores/eventStore";

function Calendar({ className, classNames, showOutsideDays = true, ...props }) {
  const [selectedDay, setSelectedDay] = React.useState();

  const navigate = useNavigate();

  const update = useEventStore((state) => state.update);

  const handleDayClick = (day) => {
    setSelectedDay(day);
    const date = day.toLocaleDateString();
    const dateToURL = encodeURIComponent(date);
    getEventsByDate(dateToURL).then((events) => {
      events.map((data) => {
        update(
          data.title,
          data.date,
          data.time,
          data.location,
          data.price,
          data.slots
        );
      });
    });
    navigate("/events/" + dateToURL);
  };

  return (
    <DayPicker
      selected={selectedDay}
      onSelect={handleDayClick}
      footer={
        selectedDay
          ? `Selected: ${selectedDay.toLocaleDateString()}`
          : "Pick a day."
      }
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        month_caption: "w-full flex justify-center font-bold text-xl h-9",
        nav: "absolut w-full flex justify-between h-9",
      }}
      components={{
        IconLeft: () => <IconSignLeft className="h-4 w-4" />,
        IconRight: () => <IconSignRight className="h-4 w-4" />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
