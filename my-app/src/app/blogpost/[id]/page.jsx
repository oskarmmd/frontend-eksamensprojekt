"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer"
import { Suspense } from "react";
import Image from "next/image";
import Loading from "@/assets/loader/madbars.gif"
import FooterBg from '@/assets/bg/footerbg.jpg';
import { useParams } from "next/navigation";

import '../../globals.css';



export default function BlogPage() {

  const { id } = useParams();
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
   
     <div className=" relative flex flex-col justify-center items-center  ">
     <div
          className="absolute inset-0 bg-cover bg-center filter brightness-15 min-h-[30%]"
          style={{ backgroundImage: `url(${FooterBg.src})` }}
        ></div>

              <div className="relative z-10">
          <h1 className="sm: m-2 lg: m-10 ">BLOG POST</h1>
          </div>
          
          
        </div>

        <div>
          
        </div>
        

       <Footer />
       </Suspense>
      </main>
  
  );
}