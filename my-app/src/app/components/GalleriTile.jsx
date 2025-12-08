"use client";

export default function GalleriTile({ src, alt, className = "" }) {
  return (
    <div
      className={`group relative fade-in-left shrink-0 overflow-hidden ${className}`}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" />

      {/* BLACK OVERLAY ON HOVER */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />

      {/* PINK BORDER ON HOVER */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[var(--pink)] transition-colors duration-300" />

      {/* TOP-LEFT TRIANGLE */}
      <div
        className="absolute top-0 left-0 w-0 h-0 
                   border-t-[50px] border-r-[50px] border-r-transparent
                   opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ borderTopColor: "var(--pink)" }}
      />

      {/* BOTTOM-RIGHT TRIANGLE */}
      <div
        className="absolute bottom-0 right-0 w-0 h-0 
                   border-b-[50px] border-l-[50px] border-l-transparent
                   opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ borderBottomColor: "var(--pink)" }}
      />
    </div>
  );
}
