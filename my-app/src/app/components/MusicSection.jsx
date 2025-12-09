"use client";

import { useState } from "react";
import Image from "next/image";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "@/styles/audio-player.css";

// Covers
import Cover1 from "@/assets/content-img/track1.jpg";
import Cover2 from "@/assets/content-img/track2.jpg";
import Cover3 from "@/assets/content-img/track4.jpg";
import Cover4 from "@/assets/content-img/track5.jpg";

// Play button icon
import PlayBtn from "@/assets/icon/Play_btn.svg";

const tracks = [
  {
    id: 1,
    title: "BLACK BOX FUNKY",
    cover: Cover1,
    src: "/media/black-box-funky.mp3",
  },
  {
    id: 2,
    title: "EUPHORIA",
    cover: Cover2,
    src: "/media/euphoria.mp3",
  },
  {
    id: 3,
    title: "FASHION RED TAPE",
    cover: Cover3,
    src: "/media/fashion-red-tape.mp3",
  },
  {
    id: 4,
    title: "NEON LIGHTS",
    cover: Cover4,
    src: "/media/neon-lights.mp3",
  },
];

function ArrowLeftIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="18" viewBox="0 0 11 18" fill="none">
      <path d="M10.208 1.21291V16.7871C10.208 17.8655 8.90416 18.4056 8.14162 17.643L0.354518 9.85594C-0.118173 9.38325 -0.118173 8.61678 0.354518 8.14409L8.14162 0.356986C8.90416 -0.405613 10.208 0.134501 10.208 1.21291Z" fill="white" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="18" viewBox="0 0 11 18" fill="none">
      <path d="M0 16.7871V1.21289C0 0.134474 1.30386 -0.405579 2.0664 0.356959L9.8535 8.14406C10.3262 8.61675 10.3262 9.38322 9.8535 9.85591L2.0664 17.643C1.30386 18.4056 0 17.8655 0 16.7871Z" fill="white" />
    </svg>
  );
}

export default function MusicSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTrack = tracks[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % tracks.length);
  };

  const handleThumbClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="bg-black py-16 text-white  max-w-[1200px] mx-auto ">
   
      <div className="max-w-5xl mx-auto flex justify-center text-center mb-10">
        <h1 className="text-2xl md:text-3xl font-bold tracking-[0.25em]">NIGHT CLUB TRACK</h1>
      </div>

      <div className=" mx-auto">
    
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center md:items-stretch">
        
          <div className="hidden md:block  lg:w-84 aspect-square relative overflow-hidden">
            <Image src={currentTrack.cover} alt={currentTrack.title} fill className="object-cover" />
          </div>

        
          <div className="w-full md:w-3/5 flex flex-col justify-center">
            
            <p className="text-sm md:text-base uppercase tracking-wide mb-4 text-center md:text-left">{currentTrack.title}</p>

           
            <AudioPlayer
              src={currentTrack.src}
              showJumpControls={true}
              showSkipControls={true}
              onClickPrevious={handlePrev}
              onClickNext={handleNext}
              autoPlay={false}
              onEnded={handleNext}
              customProgressBarSection={[RHAP_UI.PROGRESS_BAR]}
              customControlsSection={[RHAP_UI.CURRENT_TIME, RHAP_UI.DURATION, RHAP_UI.MAIN_CONTROLS, RHAP_UI.ADDITIONAL_CONTROLS, RHAP_UI.VOLUME_CONTROLS]}
            />
          </div>
        </div>

        {/* MOBILE LAYOUT*/}
        <div className="mt-4 flex flex-col items-center gap-3 md:hidden">
    
          <button onClick={() => handleThumbClick(currentIndex)} className="relative group w-[85%] max-w-xs aspect-[4/3] overflow-hidden cursor-pointer">
         
            <Image src={currentTrack.cover} alt={currentTrack.title} fill className="object-cover transition-transform duration-300 group-hover:scale-110" />

   
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />

           
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <Image src={PlayBtn} alt="Play" className="w-10 h-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30" />
            </div>

           
            <div className="absolute bottom-0 left-0 right-0 py-2 text-[10px] text-center uppercase tracking-wide bg-black/90 z-10">{currentTrack.title.length > 18 ? currentTrack.title.slice(0, 18) + "..." : currentTrack.title}</div>

            
            <div
              className="absolute top-0 left-0 w-0 h-0 
                         border-t-[50px] border-r-[50px] border-r-transparent
                         opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
              style={{ borderTopColor: "var(--pink)" }}
            />

            
            <div
              className="absolute bottom-0 right-0 w-0 h-0 
                         border-b-[50px] border-l-[50px] border-l-transparent
                         opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
              style={{ borderBottomColor: "var(--pink)" }}
            />
          </button>

        
          <div className="flex items-center justify-center gap-4">
            <button onClick={handlePrev} className="border border-white w-10 h-10 flex items-center justify-center hover:bg-white/20 transition">
              <ArrowLeftIcon />
            </button>
            <button onClick={handleNext} className="border border-white w-10 h-10 flex items-center justify-center hover:bg-white/20 transition">
              <ArrowRightIcon />
            </button>
          </div>
        </div>

        
        <div className=" hidden md:flex items-center justify-center gap-4">
          
          <button onClick={handlePrev} className="border border-white w-10 h-10 flex items-center justify-center hover:bg-white/20 transition">
            <ArrowLeftIcon />
          </button>

          
          <div className="flex-1 flex items-center justify-between overflow-x-hidden">
            {tracks.map((track, index) => {
              const isActive = index === currentIndex;

              return (
                <button key={track.id} onClick={() => handleThumbClick(index)} className="relative group cursor-pointer overflow-hidden aspect-[4/3] w-1/4 min-w-[120px]">
                  
                  <Image src={track.cover} alt={track.title} fill className="object-cover transition-transform duration-300 group-hover:scale-110" />
´
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />

                   
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <Image src={PlayBtn} alt="Play" className="w-10 h-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30" />
                  </div>

                  
                  {isActive && <div className="absolute bottom-0 left-0 right-0 py-2 text-[10px] text-center uppercase tracking-wide bg-black/90 z-10">{track.title.length > 18 ? track.title.slice(0, 18) + "..." : track.title}</div>}

                 
                  <div
                    className="absolute top-0 left-0 w-0 h-0 
                               border-t-[50px] border-r-[50px] border-r-transparent
                               opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
                    style={{ borderTopColor: "var(--pink)" }}
                  />

                  
                  <div
                    className="absolute bottom-0 right-0 w-0 h-0 
                               border-b-[50px] border-l-[50px] border-l-transparent
                               opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
                    style={{ borderBottomColor: "var(--pink)" }}
                  />
                </button>
              );
            })}
          </div>

        
          <button onClick={handleNext} className="border border-white w-10 h-10 flex items-center justify-center hover:bg-white/20 transition">
            <ArrowRightIcon />
          </button>
        </div>
      </div>
    </section>
  );
}
