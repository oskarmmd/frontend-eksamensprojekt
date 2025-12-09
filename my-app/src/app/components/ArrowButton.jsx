"use client";

export default function ArrowButton({
  direction = "prev",      
  onClick,
  positionClass = "",     
  variant = "overlay",    
}) {
  const isPrev = direction === "prev";

  const variantClass =
    variant === "overlay"
      ? "absolute top-1/2 -translate-y-1/2"
      : ""; 

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick?.();
      }}
      className={`
        ${variantClass}
        border border-white
        w-8 h-8 md:w-10 md:h-10
        flex items-center justify-center
        hover:bg-white/20
        transition-colors
        ${positionClass}
      `}
    >
      {isPrev ? (
        // LEFT ARROW
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="18" viewBox="0 0 11 18" fill="none">
          <path
            d="M10.208 1.21291V16.7871C10.208 17.8655 8.90416 18.4056 8.14162 17.643L0.354518 9.85594C-0.118173 9.38325 -0.118173 8.61678 0.354518 8.14409L8.14162 0.356986C8.90416 -0.405613 10.208 0.134501 10.208 1.21291Z"
            fill="white"
          />
        </svg>
      ) : (
        // RIGHT ARROW
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="18" viewBox="0 0 11 18" fill="none">
          <path
            d="M0 16.7871V1.21289C0 0.134474 1.30386 -0.405579 2.0664 0.356959L9.8535 8.14406C10.3262 8.61675 10.3262 9.38322 9.8535 9.85591L2.0664 17.643C1.30386 18.4056 0 17.8655 0 16.7871Z"
            fill="white"
          />
        </svg>
      )}
    </button>
  );
}
