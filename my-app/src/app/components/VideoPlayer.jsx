    "use client";

    import { useState } from "react";
    import ArrowButton from "./ArrowButton";


    const videos = [
    {
        id: 1,
        title: "DJ NIGHT – LIVE SET",
        src: "/media/video-dj-crowd-2.mp4",
    },
    {
        id: 2,
        title: "NIGHT CLUB AFTERMOVIE",
        src: "/media/video-dj-crowd1.mp4",
    },
    ];  

    export default function LatestVideo() {
    const [index, setIndex] = useState(0);
    const current = videos[index];

    const showPrev = () => {
        setIndex((prev) => (prev - 1 + videos.length) % videos.length);
    };

    const showNext = () => {
        setIndex((prev) => (prev + 1) % videos.length);
    };

    return (
        <section className="bg-black py-16 w-full">
        <div className="max-w-5xl mx-auto px-4">
            {/* TITLE */}
            <div className="text-center mb-10">
            <h1 className="text-white text-2xl md:text-3xl font-bold tracking-[0.3em] mx-auto">LATEST VIDEO</h1>
            <div className="mt-3 flex justify-center"></div>
            </div>

            {/* VIDEO FRAME */}
            <div className="relative bg-black mx-auto">
            <div className="relative w-full aspect-[16/9] overflow-hidden">
                {/* Pink corner triangles */}
                <div
                className="absolute top-0 left-0 w-0 h-0
                            border-t-[60px] border-r-[60px] border-r-transparent"
                style={{ borderTopColor: "var(--pink)" }}
                />
                <div
                className="absolute bottom-0 right-0 w-0 h-0
                            border-b-[60px] border-l-[60px] border-l-transparent"
                style={{ borderBottomColor: "var(--pink)" }}
                />

                {/* Video */}
                <video key={current.id} controls preload="metadata" className="w-full h-full object-cover">
                <source src={current.src} type="video/mp4" />
                </video>
            </div>
            </div>

            {/* CONTROLS (ARROWS) */}
            <div className="mt-6 flex justify-center gap-4">
            <ArrowButton direction="prev" variant="inline" positionClass="" onClick={showPrev} />
            <ArrowButton direction="next" variant="inline" positionClass="" onClick={showNext} />
            </div>
        </div>
        </section>
    );
    }
