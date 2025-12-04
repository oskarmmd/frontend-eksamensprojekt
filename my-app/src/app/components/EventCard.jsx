"use client";

import React from "react";

const EventCard = ({ event }) => {
  return (
    <div className="m-1">
    <div className="relative group w-full aspect-[570/403] ">
      <img
        src={event.asset.url}
        alt={event.title}
        className="w-full h-full object-cover  transition-opacity duration-300 "
      />



      {/* Overlay */}
      <div
        className="absolute inset-0  bg-transparent flex flex-col  justify-end  
                     opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-2 border-[var(--pink)] "
      >
        <button className="absolute top-32 left-1/2 transform -translate-x-1/2 bg-[var(--pink)] z-10 px-4 py-2 font-bold ">BOOK NOW</button>
<div
    className=" absolute w-full 
               bg-[var(--black)] 
               text-white text-left 
               px-5 pb-5 pt-4 
               flex flex-col">
        <p className="font-bold mb-2 text-lg">{event.title}</p>
        <span className="text-xs">{event.description.split(" ").slice(0, 40).join(" ")}</span>
        </div>

       

            {/* Pink trekanter */}
            <div className="absolute top-0 left-0 w-0 h-0 border-t-[50px] border-t-pink-500 border-r-[50px] border-r-transparent"></div>
      <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[50px] border-b-pink-500 border-l-[50px] border-l-transparent"></div>

      </div>
      
    </div>

    <div className="relative bg-[var(--pink)] px-4 py-2">
    <div className="flex items-center gap-6">
 <span >
   {new Date(event.date).toLocaleDateString()}
 </span>
 <span>{event.location}</span>
 </div>
 </div>

    </div>
    
  );
};

export default EventCard;

