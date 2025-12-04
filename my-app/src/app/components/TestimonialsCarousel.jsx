"use client";

import { useState, useEffect } from "react";
import TestimonialCard from "./TestimonialCard";

const TestimonialCarousel = ({ testimonial }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const cardsPerPage = 1;



  // Opdel events i sider
  const pages = [];

if (testimonial && testimonial.length > 0) {
  for (let i = 0; i < testimonial.length; i += cardsPerPage) {
    pages.push(testimonial.slice(i, i + cardsPerPage));
  }
}

  return (
    <div className="w-full max-w-[1200px] mx-auto">
      {/* Carousel content */}
      <div className="flex overflow-hidden">
        {pages[currentPage]?.map((testimonial) => (
          <div key={testimonial.id} style={{ width: `${100 / cardsPerPage}%` }}>
          <TestimonialCard event={testimonial} />
        </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center mt-4 gap-2 flex-wrap">
        {pages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index)}
            className={`w-4 h-4 rounded-full ${
              index === currentPage ? "bg-pink-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;