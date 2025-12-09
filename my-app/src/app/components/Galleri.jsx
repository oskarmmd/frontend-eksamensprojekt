"use client";

import { useEffect, useState, useRef } from "react";
import GalleriTile from "./GalleriTile";
import GalleriPopup from "./GalleriPopup";

export default function Galleri() {
  const [images, setImages] = useState([]);
  const [popupOpen, setPopupOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const sectionRef = useRef(null);


  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch("http://localhost:4000/gallery");
      const data = await res.json();
      setImages(data); 
    };

    fetchImages();
  }, []);


  useEffect(() => {
  if (!images.length) return;

  const sectionEl = sectionRef.current;
  if (!sectionEl) return;

  const tiles = sectionEl.querySelectorAll(".fade-in-left");
  if (!tiles.length) return;

  const isMobile = window.matchMedia("(max-width: 767px)").matches;

  // 🔹 On mobile: no animation, just show them
  if (isMobile) {
    tiles.forEach((el) => el.classList.add("visible"));
    return;
  }

  // 🔹 On larger screens: keep the staggered fade-in
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        tiles.forEach((el, i) => {
          setTimeout(() => {
            el.classList.add("visible");
          }, i * 150);
        });
        observer.disconnect();
      }
    },
    { threshold: 0.4 }
  );

  observer.observe(sectionEl);

  return () => observer.disconnect();
}, [images]);

  if (images.length < 7) return null;

  const topRow = images.slice(0, 4);   
  const bottomRow = images.slice(4, 7); 


  const openPopup = (index) => {
    setActiveIndex(index);
    setPopupOpen(true);
  };

  const closePopup = () => setPopupOpen(false);

  const showPrev = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const showNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section ref={sectionRef} className="bg-black py-10 w-full">
      <h1 className="text-white text-2xl text-center font-bold mb-12 mx-auto w-fit">
        NIGHT CLUB GALLERY
      </h1>

      <div className="collage-wrapper mx-auto">

      <div className="flex flex-col md:flex-row">
  {topRow.map((img, i) => {
    const isBig = i % 2 === 0;
    const globalIndex = i;
    return (
      <GalleriTile
        key={img.id}
        src={img.asset.url}
        alt={img.description}
        className={`${isBig ? "md:w-[28.2%]" : "md:w-[21.7%]"} 
                    w-full h-[70vw] md:h-[18vw]`}
        onClick={() => openPopup(globalIndex)}
      />
    );
  })}
</div>

<div className="flex flex-col md:flex-row">
  {bottomRow.map((img, i) => {
    const globalIndex = i + 4;
    return (
      <GalleriTile
        key={img.id}
        src={img.asset.url}
        alt={img.description}
        className="w-full md:w-1/3 h-[70vw] md:h-[18vw]"
        onClick={() => openPopup(globalIndex)}
      />
    );
  })}
</div>

      </div>

    
      {popupOpen && (
        <GalleriPopup
          images={images}
          activeIndex={activeIndex}
          onClose={closePopup}
          onPrev={showPrev}
          onNext={showNext}
        />
      )}
    </section>
  );
}
