"use client";
import React from "react";
import { LiaFacebookSquare } from "react-icons/lia";
import { LiaTwitterSquare } from "react-icons/lia";
import { LiaSnapchatSquare } from "react-icons/lia";


const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="mt-15">
 <div className="relative group aspect-[200/75] flex flex-col justify-center items-center ">
    <div>
      <img
        src={testimonial.asset.url}
        alt={testimonial.name}
        className="  transition-opacity duration-300 "
      />
      </div>
    
    <div className="flex flex-col items-center w-[75%] my-4 text-center">
        <p className="font-bold m-4 text-lg">{testimonial.name}</p>
        <span className="text-xs ">{testimonial.content/*.split(" ").slice(0, 40).join(" ")*/}</span>
        

        <div className="flex my-4">
        <a
  href={testimonial.facebook}
  target="_blank"
  rel="noopener noreferrer"
>
  <LiaFacebookSquare size={58} />
</a>
<a
  href={testimonial.twitter}
  target="_blank"
  rel="noopener noreferrer"

>
<LiaTwitterSquare size={58} />
</a>
<a
  href={testimonial.twitter}
  target="_blank"
  rel="noopener noreferrer"

>
<LiaSnapchatSquare size={58} />
</a>
      </div>

</div>

    </div>
    </div>
 
  
    
  );
};

export default TestimonialCard;