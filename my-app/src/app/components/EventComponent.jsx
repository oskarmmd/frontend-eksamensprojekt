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
    <div className="flex flex-col justify-center items-center">
      <h1 className="my-12 text-center">
        WELCOME IN NIGHT
        <span className="text-[var(--pink)]">CLUB</span>
      </h1>
      <EventCarousel events={events} />
    </div>
  );
};

export default EventComponent;




/*import '../globals.css';
import EventCard from "./EventCard";

export default function EventComponent() {
    return (
        <div className='flex flex-col justify-center items-center'>
          <h1 className='my-12 text-center'>
            WELCOME IN NIGHT
            <span className='text-(--pink)'>CLUB</span>
          </h1>
          <EventCard />
        </div>
      );
}
*/