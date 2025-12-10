import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { Suspense } from "react";
import Image from "next/image";
import Loading from "@/assets/loader/madbars.gif"




export default function Blog() {
  return (
      <main className="">
        <Suspense
      fallback={
        <div className="flex h-screen items-center justify-center">
        <Image src={Loading} alt="Loading GIF" priority className=""/>
         </div>
        }>
       <Hero/>
       <Header />
       

       <Footer />
       </Suspense>
      </main>
  
  );
}