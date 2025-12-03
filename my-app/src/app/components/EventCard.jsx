


import '../globals.css';
import Image from "next/image";


const EventCard = async () => {
    const response = await fetch("http://localhost:4000/events")
    const events = await response.json();
    

  return(
<div className='flex flex-wrap justify-center gap-6'>
{events.map((event) => (
    
<div key={event.id} className='relative group w-full max-w-[370px] aspect-[570/403]'>

<img
  src={event.asset.url}
  alt={event.title}
  className=" object-cover"
/>
{/*className="object-cover transition-opacity duration-300 group-hover:opacity-0"
/>*/}

  {/* Pink trekanter */}
<div className="absolute top-0 left-0 w-0 h-0 border-t-[50px] border-t-pink-500 border-r-[50px] border-r-transparent"></div>
<div className="absolute bottom-0 right-0 w-0 h-0 border-b-[50px] border-b-pink-500 border-l-[50px] border-l-transparent"></div>

 {/* Overlay */}
 <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-white text-center p-4 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-2 border-[var(--pink)]">
            
            {/* Titel */}
            <p className="font-bold mb-2 text-lg">{event.title}</p>

            {/* Beskrivelse */}
            {event.description}

            {/* Optional: lokation og dato */}
            <p className="mt-2 text-xs italic">
                {new Date(event.date).toLocaleDateString()} - {event.location}
            </p>

          </div>
</div>

))}
</div>
  );
};

export default EventCard;
