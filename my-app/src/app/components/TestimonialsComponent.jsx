"use client";

import { useEffect, useState } from "react";
import TestimonialCarousel from "./TestimonialsCarousel";

const TestimonialComponent = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/testimonials")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  if (!events.length) return <p>Loading...</p>;

  return (
    <div className="flex flex-col justify-center items-center">
      <TestimonialCarousel events={events} />
    </div>
  );
};

export default TestimonialComponent;


