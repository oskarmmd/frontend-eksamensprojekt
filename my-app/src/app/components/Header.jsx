import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/Logo.png";

const Header = () => {
  return (
    <header className="bg-black border-2 border-[#FF2A70] relative">
   
      <svg
        className="absolute top-0 left-0"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path d="M0 32V0H32L0 32Z" fill="#FF2A70" />
      </svg>

      <nav className="flex items-center justify-between px-12  md:px-24 xl:px-48 py-6">
       
        <Link href="/">
          <Image src={Logo} alt="Site logo" priority    className="w-28 h-auto"/>
        </Link>

      
        <div className="flex items-center gap-8">
         
          <div className="hidden  xl:flex gap-12 text-white font-semibold px-48 ">
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/booking">Book table</Link>
            <Link href="/contact">Contact us</Link>
          </div>

         
          <button
            aria-label="Open menu"
            className="xl:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="32"
              viewBox="0 0 44 32"
              fill="none"
            >
              <path
                d="M1.54907 5.87755H41.825C42.6805 5.87755 43.374 5.29282 43.374 4.57143V1.30612C43.374 0.584735 42.6805 0 41.825 0H1.54907C0.693501 0 0 0.584735 0 1.30612V4.57143C0 5.29282 0.693501 5.87755 1.54907 5.87755ZM1.54907 18.9388H41.825C42.6805 18.9388 43.374 18.354 43.374 17.6327V14.3673C43.374 13.646 42.6805 13.0612 41.825 13.0612H1.54907C0.693501 13.0612 0 13.646 0 14.3673V17.6327C0 18.354 0.693501 18.9388 1.54907 18.9388ZM1.54907 32H41.825C42.6805 32 43.374 31.4153 43.374 30.6939V27.4286C43.374 26.7072 42.6805 26.1224 41.825 26.1224H1.54907C0.693501 26.1224 0 26.7072 0 27.4286V30.6939C0 31.4153 0.693501 32 1.54907 32Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </nav>

    
      <svg
        className="absolute bottom-0 right-0"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path d="M32 32H0L32 0V32Z" fill="#FF2A70" />
      </svg>
    </header>
  );
};

export default Header;
