import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../Carousel/Carousel";
import { Card, CardContent } from "../Card/Card";

function EventsCarousel({ carouselEvents }) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="realtive m-auto w-full max-w-sm"
    >
      <CarouselContent>
        {carouselEvents.map((event, index) => (
          <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  {/* <span className="text-3xl font-semibold">{index + 1}</span> */}
                  <img src={event.image} />
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
