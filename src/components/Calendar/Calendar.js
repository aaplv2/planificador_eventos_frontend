import React, { useState } from "react";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { DayPicker } from "react-day-picker";
import { es } from "react-day-picker/locale";
import "react-day-picker/style.css";
import { useNavigate } from "react-router-dom";

import { cn } from "../../lib/utils";
import { getEventsByDate } from "../../actions/getEventsByDate";
import { useEventStore } from "../../stores/eventStore";
import { Slide, toast } from "react-toastify";

function Calendar({ className, classNames, showOutsideDays = true, ...props }) {
  const [selectedDay, setSelectedDay] = useState();

  const navigate = useNavigate();

  const update = useEventStore((state) => state.update);

  const handleDayClick = (day) => {
    setSelectedDay(day);
    if (day) {
      const date = day.toLocaleDateString();
      const dateToURL = encodeURIComponent(date);
      getEventsByDate(dateToURL)
        .then((events) => {
          update(events);
          if (events.length === 1) {
            navigate("/events/" + dateToURL + "/" + events[0]._id);
          } else {
            navigate("/events/" + dateToURL);
          }
        })
        .catch(() => {
          toast("No hay evento", {
            position: "bottom-right",
            autoClose: 1500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Slide,
          });
          setTimeout(() => {
            setSelectedDay(null);
          }, 2000);
        });
    }
  };

  return (
    <DayPicker
      selected={selectedDay}
      onSelect={handleDayClick}
      showOutsideDays={showOutsideDays}
      weekStartsOn={1}
      locale={es}
      className={cn("p-3", className)}
      classNames={{
        month_caption: "w-full flex justify-center font-bold text-xl h-9",
        nav: "absolute w-full flex justify-between h-9",
      }}
      components={{
        PreviousMonthButton: (props) => {
          return <IconArrowLeft className="h-4 w-4" onClick={props.onClick} />;
        },
        NextMonthButton: (props) => {
          return <IconArrowRight className="h-4 w-4" onClick={props.onClick} />;
        },
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
