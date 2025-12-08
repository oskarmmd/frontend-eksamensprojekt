import Header from "./components/Header";
import Footer from "./components/Footer"
import Hero from "./components/Hero";
import WelcomeCoomponent from '@/app/WelcomeComponent';
import { Suspense } from "react";
import Image from "next/image";
import Loading from "@/assets/loader/madbars.gif"
import EventComponent from "./components/EventComponent";
import TestimonialComponent from "./components/TestimonialsComponent";
import Galleri from "./components/Galleri";

import './globals.css';

export default function Home() {
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
       <WelcomeCoomponent/>
       <EventComponent/>
       <Galleri/>
       <TestimonialComponent/>
       <Footer />
       </Suspense>
      </main>
  
  );
}
