import React from "react";
import "./section.css";
function BrowseSection() {
  return (
    <div className="min-h-screen flex justify-center p-2 items-center BrowseSection">
      <div className=" gradientText flex-1 flex flex-col items-center">
        <h1 className="gradientText text-left text-sm font-bold mb-7">
          Browse Events
        </h1>
        <p className="text-xl font-medium">
          Explore tech fests, workshops, and hackathons
        </p>
        <p className="text-xl font-medium mt-4 ">
          Find events from top colleges across India
        </p>
        <p className="text-xl font-medium mt-4">
          Filter by category, date, or location
        </p>
      </div>

      <div className="flex flex-1 justify-center">
        <img src="/media/images/browseImg.png" className="w-2/3" alt="#" />
      </div>
    </div>
  );
}

export default BrowseSection;
