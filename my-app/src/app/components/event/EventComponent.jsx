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
<div
  className="
    relative
    flex flex-col justify-center items-center mt-12 p-12
    bg-[url('/slider_bg_overlay.png')]
    bg-cover bg-center bg-no-repeat
    after:absolute after:inset-0 after:bg-black/60 after:content-['']
  "
>
  <div className="relative z-10">
    <h1 className="mb-12 text-center">
      WELCOME IN NIGHT
      <span className="text-[var(--pink)]">CLUB</span>
    </h1>

    <EventCarousel events={events} />
  </div>
</div>

  );
};

export default EventComponent;


