import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../Carousel/Carousel";
import { Card, CardContent } from "../Card/Card";
import { useNavigate } from "react-router-dom";

function EventsCarousel({ carouselEvents }) {
  const navigate = useNavigate();

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="realtive m-auto w-full max-w-sm"
    >
      <CarouselContent>
        {carouselEvents.map((event, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex-column aspect-square items-center justify-center p-6">
                  <h2 className="events-carousel__title">{event.title}</h2>
                  <img
                    className="events-crousel__image"
                    src={
                      "https://planificador-eventos-backend.vercel.app/" +
                      event.image
                    }
                    onClick={() => {
                      const dateToURL = encodeURIComponent(event.date);
                      navigate("/events/" + dateToURL + "/" + event._id);
                    }}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default EventsCarousel;
