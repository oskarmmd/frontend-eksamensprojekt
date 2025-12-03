"use client";
import './globals.css';
import  WelcomeCard from "./WelcomeCard";

export default function WelcomeComponent() {
    return (
        <main className='flex flex-col justify-center items-center'>
          <h1 className='my-12 text-center'>
            WELCOME IN NIGHT
            <span className='text-(--pink)'>CLUB</span>
          </h1>
          <WelcomeCard />
        </main>
      );
}


