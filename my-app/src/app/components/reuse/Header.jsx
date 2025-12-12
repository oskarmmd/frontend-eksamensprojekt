"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Logo from "@/assets/Logo.png";
import UnderlineHover from "@/assets/bottom_line2.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavLink = ({ href, label }) => (
  <Link
    href={href}
    className="relative group inline-flex flex-col items-center"
  >
    <span
      className="
        transition-colors duration-300
        xl:group-hover:text-(--pink)
      "
    >
      {label}
    </span>

   
    <span
      className="
        pointer-events-none
        absolute
        top-full
        left-1/2
        -translate-x-1/2
        w-32
        h-7
        opacity-0
        transition-opacity duration-300
        xl:group-hover:opacity-100
      "
    >
      <Image
        src={UnderlineHover}
        alt=""
        aria-hidden
        fill
        sizes="220px"
        className="object-contain"
      />
    </span>
  </Link>
);


  return (
    <>
      <header className="relative z-40 bg-black h-[11vh] border-y-2 border-[#FF2A70]">
        {/* top-left triangle */}
        <svg
          className="absolute top-0 left-0"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 32V0H32L0 32Z" fill="#FF2A70" />
        </svg>

        <nav className="flex items-center justify-between px-6 md:px-24 xl:px-48 py-6">
          <Link href="/">
            <Image
              src={Logo}
              alt="Site logo"
              priority
              className="w-28 h-auto"
            />
          </Link>

          <div className="hidden xl:flex gap-12 text-white font-semibold">
            <NavLink href="/" label="HOME" />
            <NavLink href="/blog" label="BLOG" />
            <NavLink href="/booking" label="BOOK TABLE" />
            <NavLink href="/contact" label="CONTACT US" />
          </div>

       
          <button
            aria-label="Open menu"
            className="xl:hidden"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg
              width="44"
              height="32"
              viewBox="0 0 44 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.54907 5.87755H41.825C42.6805 5.87755 43.374 5.29282 43.374 4.57143V1.30612C43.374 0.584735 42.6805 0 41.825 0H1.54907C0.693501 0 0 0.584735 0 1.30612V4.57143C0 5.29282 0.693501 5.87755 1.54907 5.87755ZM1.54907 18.9388H41.825C42.6805 18.9388 43.374 18.354 43.374 17.6327V14.3673C43.374 13.646 42.6805 13.0612 41.825 13.0612H1.54907C0.693501 13.0612 0 13.646 0 14.3673V17.6327C0 18.354 0.693501 18.9388 1.54907 18.9388ZM1.54907 32H41.825C42.6805 32 43.374 31.4153 43.374 30.6939V27.4286C43.374 26.7072 42.6805 26.1224 41.825 26.1224H1.54907C0.693501 26.1224 0 26.7072 0 27.4286V30.6939C0 31.4153 0.693501 32 1.54907 32Z"
                fill="white"
              />
            </svg>
          </button>
        </nav>

       
        <svg
          className="absolute bottom-0 right-0"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M32 32H0L32 0V32Z" fill="#FF2A70" />
        </svg>
      </header>

    
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 xl:hidden">
          <button
            aria-label="Close menu"
            className="absolute top-6 right-6"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 6L26 26M26 6L6 26"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <div className="flex h-full flex-col items-center justify-center gap-10 text-white text-xl tracking-[0.4em] font-semibold">
            <NavLink href="/" label="HOME" />
            <NavLink href="/blog" label="BLOG" />
            <NavLink href="/booking" label="BOOK TABLE" />
            <NavLink href="/contact" label="CONTACT US" />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
