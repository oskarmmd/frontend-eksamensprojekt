"use client";

import { useState, useEffect } from "react";
import EventCard from "./EventCard";

const EventCarousel = ({ events }) => {
  const [currentPage, setCurrentPage] = useState(0);

 
  const [cardsPerPage, setCardsPerPage] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      setCardsPerPage(window.innerWidth >= 1024 ? 2 : 1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const pages = [];
  for (let i = 0; i < events.length; i += cardsPerPage) {
    pages.push(events.slice(i, i + cardsPerPage));
  }

  useEffect(() => {
    if (pages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % pages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [pages.length]);

  return (
    <div className="w-full max-w-[1200px]">
      
      <div className="flex justify-center overflow-hidden">
        {pages[currentPage].map((event) => (
          <div
            key={event.id}
            className={cardsPerPage === 2 ? "w-1/2" : "w-full"}
          >
            <EventCard event={event} />
          </div>
        ))}
      </div>

     
      <div className="flex justify-center mt-4 gap-2 flex-wrap">
        {pages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index)}
            className={`w-4 h-4 ${
              index === currentPage ? "bg-[var(--pink)]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default EventCarousel;
