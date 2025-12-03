"use client";
import './globals.css';
import { Suspense } from "react";
import Image from "next/image";
import Image1 from "../assets/content-img/thumb1.jpg";
import Icon1 from "../assets/icon/favicon.png";
import Image2 from "../assets/content-img/reastaurant_1.jpg";
import Icon2 from "../assets/icon/favicon.png";
import Image3 from "../assets/content-img/thumb2.jpg";
import Icon3 from "../assets/icon/favicon.png";

export default function WelcomeCard (){
     const cards =[
          { img: Image1, 
               icon: Icon1,
               title: "NIGHT CLUB",
               text: "There are many variations of passages of lorem ipsum available, but the majority have suffered alterration in some form, by injecting humor, or randomised words which don't look slightly belivable."
          },
          { img: Image2, 
               icon: Icon2,
               title: "RESTAURANT",
               text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at it's layout. The point of using lorem ipsum is that ir has a more-or-less normal distribution."
          },
          { img: Image3, 
               icon: Icon3,
               title: "BAR",
               text: "Contrary to a popular belief, lorem ipsum is not simply a random text. It has root in a piece og classicallatin litturature from 45 BC, making it ver 2000 years old. Richard McClinton, a Latin."
          }
     ];


     return (
<div className='flex flex-wrap justify-center gap-6'>
     {cards.map((card, index) =>(
<div key={index} className="relative group w-2xs lg:w-[370px] h-[474px]">
     <Image
     src={card.img}
     alt={`Billede ${index+1}`}
     fill
     className="object-cover  transition-opacity duration-300 group-hover:opacity-0"
     />

     <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-white text-center p-4 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-2 border-(--pink)">

      {/* top venstre trekant */   }                     
<div className="absolute top-0 left-0 w-0 h-0 border-t-[50px] border-t-pink-500 border-r-[50px] border-r-transparent"></div>

<div className='p-8 mb-4 rounded-lg border-2 border-(--pink)'>
       <Image 
  src={card.icon} 
  alt={`${card.title} ikon`} 
  width={50} 
  height={50} 
/>
</div>
        <p className=" font-bold mb-2 ">{card.title}</p>

        {card.text}

              {/* bund højre trekant */   }     
              <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[50px] border-b-pink-500 border-l-[50px] border-l-transparent"></div>
     </div>

</div>
     ))}
</div>
     );

}


