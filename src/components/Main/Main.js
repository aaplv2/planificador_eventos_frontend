import React from "react";
import EventCard from "../EventCard/EventCard";
import { Calendar } from "../Calendar/Calendar";

//Carousel
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../Carousel/Carousel";
import EditEventPopout from "../EditEventPopout/EditEventPopout";
import Profile from "../Profile/Profile";

function Main() {
  return (
    <div className="main">
      <Profile />
      <EventCard />
      <Calendar mode="single" className="rounded-md border" />
      <div className="carousel">
        <Carousel className="w-full max-w-sm">
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              ... uno
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              ... dos
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              ... tres
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              ... tres
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              ... tres
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <EditEventPopout />
    </div>
  );
}

export default Main;
