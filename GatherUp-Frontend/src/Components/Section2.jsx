import React from "react";
import "./section.css";
function Section2({ url }) {
  return (
    <>
      <div className="flex justify-evenly min-h-screen items-center">
        <div className="w-1/2 flex justify-center">
          <img
            src="/media/images/features.png"
            alt=""
            className="w-3/4 mt-20"
          />
        </div>
        <div className="text-left text-black font-bold w-1/2   flex justify-center ">
          <ul className="leading-loose text-xl text-center list-inside gradientText">
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
