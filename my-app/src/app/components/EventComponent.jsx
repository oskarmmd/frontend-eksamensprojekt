import '../globals.css';
import EventCard from "./EventCard";

export default function EventComponent() {
    return (
        <div className='flex flex-col justify-center items-center'>
          <h1 className='my-12 text-center'>
            WELCOME IN NIGHT
            <span className='text-(--pink)'>CLUB</span>
          </h1>
          <EventCard />
        </div>
      );
}
