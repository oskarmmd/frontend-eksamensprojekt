"use client";

import { useEffect, useState } from "react";

import TestimonialCarousel from "./TestimonialsCarousel";

const TestimonialComponent = () => {
  const [ testimonials, setTestimonials ] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/testimonials")
      .then((res) => res.json())
      .then((data) => setTestimonials(data))
  }, []);

  if (!testimonials.length) return <p>Loading...</p>;

  return (
    <div className="flex flex-col justify-center items-center">
      <TestimonialCarousel testimonials={testimonials}  />
    </div>
  );
};

export default TestimonialComponent;


