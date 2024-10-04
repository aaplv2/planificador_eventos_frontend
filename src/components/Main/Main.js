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

function Main() {
  return (
    <div className="main">
      <EventCard />
      <div className="main__calendar">
        <Calendar mode="single" className="rounded-md border" />
      </div>
      <div className="main__carousel">
        <Carousel  className="w-full max-w-sm">
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}

export default Main;
