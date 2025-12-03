import Header from "./components/Header";
import Footer from "./components/Footer"
import Hero from "./components/Hero";

import './globals.css';
import WelcomeCoomponent from '@/app/WelcomeComponent';

export default function Home() {
  return (
      <main className="">
        <Hero/>
       <Header />
       <WelcomeCoomponent/>
       <Footer />
      </main>
  
  );
}
