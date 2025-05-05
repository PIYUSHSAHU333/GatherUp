import React, { useState } from "react";
import "./section.css";
import { Link } from "react-router-dom";
import HamBurger from "./HamBurger.jsx";
import BrowseEvent from "./BrowseEvent.jsx";
import Section2 from "./Section2.jsx";
import Section3 from "./Section3.jsx";
import DropDown from "./Dropdown.jsx";
import BrowseSection from "./brosweSection.jsx";
import AboutSection from "./AboutSection.jsx";
import SubmitSection from "./SubmitSection.jsx";

function Section() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState); // Toggle the state when the hamburger is clicked
  };
  return (
    <div className="section flex flex-col  !w-full ">
      <div className="navbar relative top-0 left-0 p-12 flex justify-between items-center w-screen text-[#dd7109] ">
        <div className="logo text-center sm:text-left flex flex-col items-center sm:items-start">
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
          <Link to="/browse" className="mr-1">
            <BrowseEvent />
          </Link>
          <a
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
              <a
                href="#"
                className="py-2  text-sm !text-black font-semibold hover:underline"
              >
                Browse Events
              </a>
              <div className="border-t border-white/30 my-1" />
              <a
                href="#"
                className="py-2 text-sm !text-black font-semibold hover:underline"
              >
                Submit Event
              </a>
            </div>
          </div>
        )}
      </div>
      <div className="auth m-0 relative left-9 bottom-0 mt-56  flex gap-0.5">
        <button className="loginBtn !px-12 !bg-[#2c3edc] mr-0.5">Login</button>
        <button className="signupBtn !px-12 ">Signup</button>
      </div>

      <AboutSection />
      <Section2 />
      <BrowseSection />
      <SubmitSection />
      <Section3 />
    </div>
  );
}

export default Section;
