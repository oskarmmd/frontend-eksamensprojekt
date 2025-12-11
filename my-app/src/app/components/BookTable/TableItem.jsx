"use client";

import Image from "next/image";

export default function TableItem({
  number,
  image,
  selected,
  disabled,
  onSelect,
}) {
  return (
    <button
      type="button"
      onClick={() => !disabled && onSelect(number)}
      disabled={disabled}
      className={`
        relative flex items-center justify-center
        w-50 h-35 
        transition
        ${selected ? "ring-2 ring-[var(--pink)]" : ""}
        ${
          disabled
            ? "opacity-30 cursor-not-allowed"
            : "hover:ring hover:ring-[var(--pink)]"
        }
      `}
    >
      {/* bord-billede */}
      <Image
        src={image}
        alt={`Table ${number}`}
        fill
        className="object-contain pointer-events-none"
      />

      {/* nummer overlay */}
      <span className="relative z-10 text-white text-sm font-semibold">
        {number}
      </span>
    </button>
  );
}
