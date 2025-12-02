"use client";
import { useState, useEffect } from 'react';
import './globals.css';
import Image from 'next/image';
import Image1 from '../assets/content-img/thumb1.jpg';
import Image2 from '../assets/content-img/reastaurant_1.jpg';
import Image3 from '../assets/content-img/thumb2.jpg';


const WelcomeComponent = () =>{
    const [ hoverText, setHoverTexts] = useState([]);

    useEffect(()=> {
fetch("")
.then((res) => res.json())
.then((data) => setHoverTexts(data))
.catch ((err) => consoleerror(err));

    }, []);

    const images = [Image1, Image2, Image3];


    return(
        <div className="flex flex-col items-center justify-center space-y-4">
            <h1 className="flex justify-center">WELCOME IN NIGHTCLUB</h1>

            <div className="flex space-x-4">
        {images.map((img, index) => (
          <div key={index} className="relative group">
            <Image src={img} alt={`Billede ${index + 1}`} width={300} height={200} className="rounded" />
            <span className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50
             text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity p-2 text-center">
              {hoverTexts[index] || "Loader..."}
            </span>
          </div>
        ))}
      </div>
      </div>
   

    );
};
export default WelcomeComponent;