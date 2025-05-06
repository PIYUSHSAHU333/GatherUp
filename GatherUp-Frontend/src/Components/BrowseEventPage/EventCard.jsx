import React from 'react';
import "./eventCard.css"
function EventCard({event}) {
    return ( 

        <div className="EventCard p-5 items-center cursor-pointer mb-2 w-1/2 flex flex-col">
                <p className='font-bold text-xl curvyline'>{event.name}</p>
                <p className='self-start text-[18px]'> {new Date(event.date).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })}</p>

            <p className='self-start mt-1.5'>{new Date(event.StartTime).toLocaleString('en-US', {
         hour: 'numeric',
         minute: 'numeric',
         hour12: true,
    })} - {new Date(event.endTime).toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    })}</p>

        <p className='text-[20px] font-medium self-start mt-3.5'>{event.Venue}, {event.City}</p>

        <p className='self-start text-[20px] font-medium mt-2.5'>{event.description}</p>

        </div>

     );
}

export default EventCard;