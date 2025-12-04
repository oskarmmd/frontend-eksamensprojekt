import Header from "./components/Header";
import Footer from "./components/Footer"
import Hero from "./components/Hero";
import WelcomeCoomponent from '@/app/WelcomeComponent';
import { Suspense } from "react";
import Image from "next/image";
import Loading from "@/assets/loader/madbars.gif"

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
       <Hero/>
       <Header />
       <WelcomeCoomponent/>
       <Footer />
       </Suspense>
      </main>
  );
}
