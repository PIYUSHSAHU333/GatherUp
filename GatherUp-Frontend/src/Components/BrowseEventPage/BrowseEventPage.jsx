import React, {useEffect, useState} from 'react';
import "./brosweEvent.css"
import SearchBar from './SearchBar.jsx';
import axios from 'axios';
import EventCard from './EventCard.jsx';
function BrowseEventPage() {
   const [result, setResult] = useState([]);

        useEffect(()=>{
            const fetchresult = async()=>{
                try{
                    const response =  await axios.get("http://localhost:8080/browseEvents");
                    console.log(response.data)
                    setResult(response.data)
                   }catch(e){
                       console.log(e);
                   }
            }
            
            fetchresult()
             
        }, [])

    return ( 

        
        <div className="BrowseEvent  min-h-screen">
            <h1 className="mt-7 font-extrabold cursor-pointer ml-9 left-0 text-[#dd7109] sm:text-left">GATHER UP</h1>
            <div className="div flex  mt-12 ml-7">
            <SearchBar onResults={setResult}/> 
            </div>
               <div className='content mt-9 ml-20 flex flex-col justify-center'>
                {result.map((event)=>{
                   return <EventCard key={event._id} event={event}/>
                })}
               </div>
        </div>
     );
}

export default BrowseEventPage;