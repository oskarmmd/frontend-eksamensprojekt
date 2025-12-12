import Header from "./components/reuse/Header";
import Footer from "./components/reuse/Footer"
import Hero from "./components/index/Hero";
import WelcomeCoomponent from '@/app/WelcomeComponent';
import { Suspense } from "react";
import Image from "next/image";
import Loading from "@/assets/loader/madbars.gif"
import EventComponent from "./components/event/EventComponent";
import TestimonialComponent from "./components/testiomonial/TestimonialsComponent";
import Galleri from "./components/galleri/Galleri";
import RecentblogComponent from "./components/blog/RecentblogComponent";
import MusicSection from "./components/index/MusicSection";
import LatestVideo from "./components/index/VideoPlayer";
import Newsletter from "./components/index/Newsletter";


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
       <MusicSection />
       <LatestVideo />
       <TestimonialComponent/>
       <RecentblogComponent/>
       <Newsletter/>
       <Footer />
       </Suspense>
      </main>
  
  );
}
