import React from "react";

function SubmitSection() {
  return (
    <div className="min-h-screen  sm:flex-row flex-col flex justify-center  items-center SubmitSection">
      <div className="sm:flex-1 flex !justify-center  ">
        <img src="/media/images/Submit.png" className="sm:w-2/3 transform scale-110 h-105 sm:h-120" alt="#" />
      </div>
      <div className=" gradientText flex-1 flex  flex-col items-center">
        <h1 className="gradientText  text-sm font-bold mb-7">
          Submit Events
        </h1>
        <p className="text-xl text-center font-medium">
          Share your college's tech or cultural event
        </p>
        <p className="text-xl font-medium mt-4 ">
          Get visibility from students across India
        </p>
        <p className="text-xl font-medium mt-4">
          Quick review, then we list it live
        </p>
      </div>
    </div>
  );
}

export default SubmitSection;
