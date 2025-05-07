import React, { useEffect, useState } from "react";
import "./section.css";
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";
import HamBurger from "./HamBurger.jsx";
import BrowseEvent from "./BrowseEvent.jsx";
import Section2 from "./Section2.jsx";
import Section3 from "./Section3.jsx";
import BrowseSection from "./brosweSection.jsx";
import AboutSection from "./AboutSection.jsx";
import SubmitSection from "./SubmitSection.jsx";

 function Section () {
const navigate = useNavigate()
async function submitevent(e){
  e.preventDefault()
    const token = localStorage.getItem("token");
    console.log(token)
    if(!token){
      
      navigate("/user");
      

    }
    
    try{
      const response = await axios.get("http://localhost:8080/verify-token", {
        headers:{
          Authorization: `Bearer ${token}`
        }
      });

      navigate("/submitevent")
    }catch(e){
    
      navigate("/user")
      console.log("error from be", e)
    }
    
  }
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState();

  function handleLogout(){
    localStorage.removeItem("token");
    setIsLoggedIn(false)
  }
  useEffect(()=>{
    const token = localStorage.getItem("token");
    if(token){
      setIsLoggedIn(true);
    }
  })
  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState); 
  };
  return (
    <div className="section min-h-screen  flex flex-col  !w-full ">
      <div className="navbar relative sm:top-0 left-0 p-12 flex justify-between items-center w-screen text-[#dd7109] ">
        <div className="logo text-center sm:text-left flex flex-col items-center sm:mt-0 mt-[40px] sm:items-start">
          <img src="/media/images/meeting.png" alt="" className="w-16 h-16 " />
          <h1 className="mt-7 font-extrabold left-0 sm:text-left">GATHER UP</h1>
          <p className="text-2xl md:text-left mt-0.5 gradientText font-semibold ">
            All latest about new events, hackathons, <br />
            workshops and much more <br /> for all coding enthusiasts out there
          </p>
        </div>
        <button className="sm:hidden absolute right-3 top-3 !text-[4px]">
          <HamBurger isOpen={isOpen} onToggle={toggleMenu} />
        </button>
        <div className={`navItems mr-4  gap-12 items-center hidden sm:flex `}>
          <Link to="/browseEvents" className="mr-1">
            <BrowseEvent />
          </Link>
          <a
          onClick={submitevent}
            href=""
            className="!text-xl !underline !underline-offset-8 !text-black"
          >
            Submit event
          </a>
        </div>
        {/* Mobile layout of buttons */}

        {isOpen && (
          <div className={`mobile-layout sm:hidden absolute top-14 right-2`}>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg w-44 py-2 px-4 mt-2.5 flex flex-col ">
             <Link to={"/browseEvents"} className="py-2  text-sm !text-black font-semibold hover:underline">
             
                Browse Events
              
             </Link>
              
              <div className="border-t border-white/30 my-1" />
              <Link
                
                onClick={submitevent}
                className="py-2 text-sm !text-black font-semibold hover:underline"
              >
                Submit Event
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className="auth  relative sm:left-9 bottom-0  sm:mt-56 sm:justify-start justify-center  flex gap-0.5">
        {isLoggedIn ? <button className="logOutBtn  !px-12 " onClick={handleLogout} >Logout</button> : 
        <>
        <Link to={"/user"}>
        <button className="loginBtn !px-12 text-white !bg-[#2c3edc] mr-0.5">Login</button>
        </Link>
        <Link to={"/user"}>
        <button className="signupBtn  text-white !px-12 ">Signup</button>
        </Link>
        
        </>
        }
        
      </div>
      
      <AboutSection /> <hr className="w-9/10 mx-auto" />
      <Section2 /> <hr className="w-9/10 mx-auto" />
      <BrowseSection /> <hr className="w-9/10 mx-auto"/>
      <SubmitSection /> <hr className="w-9/10 mx-auto" />
      <Section3 /> 
    </div>
  );
}

export default Section;
