"use client";

export default function GalleriPopup({ images, activeIndex, onClose, onPrev, onNext }) {
  if (activeIndex == null) return null;

  const current = images[activeIndex];

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4" onClick={onClose}>
      
      <div className="relative max-w-2xl w-full bg-black 
                mx-16 md:mx-0 rounded-md md:rounded-none" onClick={(e) => e.stopPropagation()}>
       
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute -left-12 top-1/2 -translate-y-1/2 border border-white w-10 h-10 flex items-center justify-center hover:bg-white/20 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="18" viewBox="0 0 11 18" fill="none">
            <path d="M10.208 1.21291V16.7871C10.208 17.8655 8.90416 18.4056 8.14162 17.643L0.354518 9.85594C-0.118173 9.38325 -0.118173 8.61678 0.354518 8.14409L8.14162 0.356986C8.90416 -0.405613 10.208 0.134501 10.208 1.21291Z" fill="white" />
          </svg>
        </button>

        
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute -right-12 top-1/2 -translate-y-1/2 border border-white w-10 h-10 flex items-center justify-center hover:bg-white/20 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="18" viewBox="0 0 11 18" fill="none">
            <path d="M0 16.7871V1.21289C0 0.134474 1.30386 -0.405579 2.0664 0.356959L9.8535 8.14406C10.3262 8.61675 10.3262 9.38322 9.8535 9.85591L2.0664 17.643C1.30386 18.4056 0 17.8655 0 16.7871Z" fill="white" />
          </svg>
        </button>

        
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
