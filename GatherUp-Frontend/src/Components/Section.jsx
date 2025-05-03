import React from "react";
import "./section.css";
import { Link } from "react-router-dom";
import LoginBtn from "./LoginBtn.jsx";
import SignUpBtn from "./SignUpBTn.jsx";
function Section({ url }) {
  return (
    <div className="section flex flex-col">
      <img src={url} alt="#" />
      <div className="navbar absolute top-0 left-0 p-12  ">
        <div className="logo">
          <img src="/media/images/meeting.png" alt="" className="w-16 h-16" />
          <h1 className="mt-7 font-extrabold left-0 text-left">GATHER UP</h1>
          <p className="text-2xl text-left mt-0.5 ">
            All latest about new events, hackathons, <br />
            workshops and much more <br /> for all coding enthusiasts out there
          </p>
        </div>
        <div className="navItems"></div>
      </div>
      <div className="auth m-0 absolute left-9 bottom-14  flex gap-0.5">
                
      </div>
    </div>
  );
}

export default Section;
