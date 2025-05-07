import React from "react";
import "./section.css";
function Section2() {
  return (
    <>
      <div className="flex sm:flex-row flex-col justify-evenly min-h-screen items-center">
        <div className="w-1/2 flex justify-center">
          <img
            src="/media/images/features.png"
            alt=""
            className="sm:w-3/4 transform scale-160 sm:scale-100 mt-20"
          />
        </div>
        <div className="text-left text-black font-bold w-1/2   flex sm:justify-center ">
          <ul className="leading-loose text-xl sm:mt-0 text-center mt-10 sm:text-center list-inside gradientText">
            <li >
              All college events, one app — hackathons, workshops, and more
            </li>
            <li className="mt-4">Find, join, and track events made for student innovators.</li>
            <li className="mt-4">Your campus tech scene, now in your pocket.</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Section2;
