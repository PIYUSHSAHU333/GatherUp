import React, {useEffect, useState} from 'react';
import "./brosweEvent.css"
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar.jsx';
import axios from 'axios';
import EventCard from './EventCard.jsx';
function BrowseEventPage() {
    
   const [result, setResult] = useState([]);
   const onEmptySearch = async () => {
    try {
      const response = await axios.get("http://localhost:8080/events/browseEvent");
      setResult(response.data); // Update state with all events
    } catch (e) {
      console.log(e);
    }
  };

        useEffect(()=>{
            const fetchresult = async()=>{
                try{
                    const response =  await axios.get("http://localhost:8080/events/browseEvent");
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
            <Link to={"/"}>
            <h1 className="mt-7 font-extrabold cursor-pointer ml-9 left-0 text-[#dd7109] sm:text-left">GATHER UP</h1>
            </Link>
            
            <div className="div flex sm:justify-start justify-center  mt-12 sm:ml-7">
            <SearchBar onResults={setResult} onEmptySearch={onEmptySearch}/> 
            </div>
               <div className='content mt-9 sm:ml-20 mx-auto items-center sm:items-start flex flex-col  justify-center'>
               {result.length === 0 ? (
    // <p className="text-7xl font-bold noMatch text-[#dd7109] ">Oops! No match</p>
    <img src="/media/images/noResultImg.png" className='w-1/4' alt="" />
  ) : (
    result.map((event) => (
      <EventCard key={event._id} event={event} />
    ))
  )}
               </div>
        </div>
     );
}

export default BrowseEventPage;