"use client";

import { useState, useEffect } from "react";
import EventCard from "./EventCard";

const EventCarousel = ({ events }) => {
  const [currentPage, setCurrentPage] = useState(0);

  // Responsive: antal cards per slide
  const [cardsPerPage, setCardsPerPage] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerPage(2); // Desktop
      } else {
        setCardsPerPage(1); // Mobil/tablet
      }
    };
    handleResize(); // init
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Opdel events i sider
  const pages = [];
  for (let i = 0; i < events.length; i += cardsPerPage) {
    pages.push(events.slice(i, i + cardsPerPage));
  }

  return (
    <div className="w-full max-w-[1200px]">
      {/* Carousel content */}
      <div className="flex justify-center overflow-hidden">
        {pages[currentPage].map((event) => (
          <div key={event.id} className={`w-${100 / cardsPerPage}%`}>
            <EventCard event={event} />
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center mt-4 gap-2 flex-wrap">
        {pages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index)}
            className={`w-4 h-4  ${
              index === currentPage ? "bg-pink-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default EventCarousel;