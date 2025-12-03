"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import Hero1 from "@/assets/bg/header_bg_1.jpg";
import Hero2 from "@/assets/bg/header_bg_2.jpg";
import Underline from "@/assets/bottom_line.png"; 


const slides = [Hero1, Hero2];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // Auto-change slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-192 w-full overflow-hidden">
      {/* Background slideshow */}
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

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-5xl font-extrabold tracking-wide">
          N<span className="inline-block text-pink-400">I</span>GHT CLUB
        </h1>

        {/* Underline image */}
        <Image
          src={Underline}
          alt="Decorative underline"
          className="mt-3 w-3xl"
        />

        <p className="mt-4 tracking-[0.4em] text-sm">
          H A V E &nbsp; A &nbsp; G O O D &nbsp; T I M E
        </p>
      </div>
    </section>
  );
}
