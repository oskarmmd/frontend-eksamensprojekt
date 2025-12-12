"use client";
import ArrowButton from "../reuse/ArrowButton";

export default function GalleriPopup({ images, activeIndex, onClose, onPrev, onNext }) {
  if (activeIndex == null) return null;

  const current = images[activeIndex];

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4" onClick={onClose}>
      <div
        className="relative max-w-2xl w-full bg-black 
                mx-16 md:mx-0 rounded-md md:rounded-none"
        onClick={(e) => e.stopPropagation()}
      >
        <ArrowButton direction="prev" onClick={onPrev} positionClass="left-2 md:-left-12" />

        <ArrowButton direction="next" onClick={onNext} positionClass="right-2 md:-right-12" />

        <div className="w-full aspect-video overflow-hidden">
          <img src={current.asset.url} alt={current.description} className="w-full h-full object-cover" />
        </div>

        <div className="px-10 py-8 text-white">
          <h2 className="font-bold text-lg mb-3 uppercase tracking-wide">NIGHT CLUB PARTY</h2>
          <span className="text-xs leading-relaxed ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, vel blanditiis deserunt atque, pariatur magni obcaecati suscipit eius, illum recusandae facilis? Minus velit quam placeat, nam ipsa optio incidunt repudiandae? Fugit quae
            autem, laborum dolorem, nisi aspernatur a, ad dolor tempora repellat cumque!
          </span>
          <button
            className="
      ml-auto block
      border border-white border-l-0 border-r-0
      px-6 py-4
      text-xs font-semibold 
      hover:bg-white hover:text-black 
      transition-colors
      uppercase tracking-wide
    "
          >
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
}
