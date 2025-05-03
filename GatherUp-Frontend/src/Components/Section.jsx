import React from "react";
import "./section.css";
import { Link } from "react-router-dom";
import BrowseEvent from "./BrowseEvent.jsx";
function Section({ url }) {
  return (
    <div className="section flex flex-col">
      <img src={url} alt="#" />
      <div className="navbar absolute top-0 left-0 p-12 flex justify-between items-center w-screen ">
        <div className="logo">
          <img src="/media/images/meeting.png" alt="" className="w-16 h-16" />
          <h1 className="mt-7 font-extrabold left-0 text-left">GATHER UP</h1>
          <p className="text-2xl text-left mt-0.5 ">
            All latest about new events, hackathons, <br />
            workshops and much more <br /> for all coding enthusiasts out there
          </p>
        </div>
        <div className="navItems mr-4  flex gap-12 items-center ">
          <a href="" className="mr-1"><BrowseEvent/> </a>
          <a href="" className="!text-xl !underline !underline-offset-8 !text-white">Submit event</a>
          
        </div>
      </div>
      <div className="auth m-0 absolute left-9 bottom-14  flex gap-0.5">
        <button className="loginBtn !px-12 !bg-[#2c3edc] mr-0.5">Login</button>
        <button className="signupBtn !px-12 ">Signup</button>
      </div>
    </div>
  );
}

export default Section;
