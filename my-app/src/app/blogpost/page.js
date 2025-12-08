import Header from "../components/Header";
import Footer from "../components/Footer"

import { Suspense } from "react";
import Image from "next/image";
import Loading from "@/assets/loader/madbars.gif"


import '../globals.css';

export default function Home() {
  return (
      <main className="">
        <Suspense
      fallback={
        <div className="flex h-screen items-center justify-center">
        <Image src={Loading} alt="Loading GIF" priority className=""/>
         </div>
      }
    >
       <Header />
       

       <Footer />
       </Suspense>
      </main>
  
  );
}