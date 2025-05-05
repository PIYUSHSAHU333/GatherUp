import React from "react";

function AboutSection() {
  return (
    <div className="min-h-screen flex justify-center p-2 items-center AboutSection">
      <div className=" gradientText flex-1 flex flex-col mx-auto items-center">
        <h1 className="gradientText text-left text-sm font-bold mb-7">
          About GatherUp
        </h1>
        <p className="text-xl font-medium flex text-center justify-center">
          This platform is built to simplify the way students discover and share
          college events. From tech fests and workshops to hackathons and
          seminars, we bring them all into one place — searchable, filterable,
          and easy to access. Whether you're looking to attend or promote an
          event, our goal is to help students stay informed and involved across
          campuses in India.
        </p>
      </div>

      <div className="flex flex-1 justify-center">
        <img src="/media/images/AboutImg.png" className="w-2/3" alt="#" />
      </div>
    </div>
  );
}

export default AboutSection;
