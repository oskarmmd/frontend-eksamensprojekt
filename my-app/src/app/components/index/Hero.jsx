"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Hero1 from "@/assets/bg/header_bg_1.jpg";
import Hero2 from "@/assets/bg/header_bg_2.jpg";
import Underline from "@/assets/bottom_line.png";
import Logo1 from "@/assets/icon/Logo.svg";

const slides = [Hero1, Hero2];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[89vh] w-full overflow-hidden">

      <div className="absolute inset-0">
        <Image
          key={index}
          src={slides[index]}
          fill
          priority
          alt="Night Club Hero"
          className="object-cover transition-opacity duration-700"
        />
      </div>

      
      <div className="absolute inset-0 bg-black/20" />

     
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        
      
        <Image
          src={Logo1}
          alt="Site logo"
          priority
          className="logo-flip-animation"
        />

       <p className="tagline-pop mt-4 text-sm tracking-[0.8rem] lg:text-[2rem] lg:tracking-[2rem]">
  HAVE A GOOD TIME
</p>

<Image
  src={Underline}
  alt="Decorative underline"
  className="underline-pop mt-3 w-xl lg:w-3xl"
/>

      </div>
    </section>
  );
}

