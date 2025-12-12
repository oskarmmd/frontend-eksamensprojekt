"use client";

import { useEffect, useState } from "react";

import TestimonialCarousel from "./TestimonialsCarousel";
import FooterBg from "@/assets/bg/footerbg.jpg";

const TestimonialComponent = () => {
  const [ testimonials, setTestimonials ] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/testimonials")
      .then((res) => res.json())
      .then((data) => setTestimonials(data))
  }, []);

  if (!testimonials.length) return <p>Loading...</p>;

  return (
    
  <div
  className="
    relative
    flex flex-col justify-center items-center 
    py-20 
    bg-cover bg-center bg-no-repeat
    after:absolute after:inset-0 after:bg-black/90 after:content-['']
  "
  style={{ backgroundImage: `url(${FooterBg.src})` }}
>
  <div className="relative z-10">
    <TestimonialCarousel testimonials={testimonials} />
  </div>
</div>
  );
};

export default TestimonialComponent;


