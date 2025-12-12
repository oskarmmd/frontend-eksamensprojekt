"use client";

import { useEffect, useState } from "react";
import EventCarousel from "./EventCarousel";

const EventComponent = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  if (!events.length) return <p>Loading...</p>;

  return (
    <div className="flex flex-col justify-center items-center mt-12 p-6 bg-[linear-gradient(0deg,rgba(0,0,0,0.6),rgba(0,0,0,0.6))]
  bg-[url('/slider_bg_overlay.png')]
  bg-cover bg-center">
      <h1 className="my-12 text-center">
        WELCOME IN NIGHT
        <span className="text-[var(--pink)]">CLUB</span>
      </h1>
      <EventCarousel events={events} />
    </div>
  );
};

export default EventComponent;


