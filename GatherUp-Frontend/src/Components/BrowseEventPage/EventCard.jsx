import React from 'react';
import "./eventCard.css"
function EventCard({event}) {
    return ( 

        <div className="EventCard p-5 items-center cursor-pointer mb-2 w-1/2 flex flex-col">
                <p className='font-bold text-xl'>{event.name}</p>
                <p className='self-start'>{new Date(event.date.toLocaleString)}</p>
        </div>

     );
}

export default EventCard;