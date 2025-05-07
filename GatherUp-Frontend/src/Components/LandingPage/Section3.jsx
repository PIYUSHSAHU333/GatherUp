import React from "react";
import "./section.css";
import FaqCard from "./Faqcard.jsx";
function Section3() {
  return (
    <div className="section3  flex flex-col min-h-screen justify-center items-center">
      <h1 className="text-[#6b21a8]  mt-10">FAQ's</h1>
      <div className=" grid gap-x-28 gap-y-16 mb-5 sm:grid-cols-3 mt-16 text-2xl">
        <FaqCard
          ques={" Who can submit an event?"}
          ans={"Anyone! Students, organizers, or college clubs."}
        />
        <FaqCard
          ques={"Is there any cost to use this platform?"}
          ans={"No, it's completely free. "}
        />
        <FaqCard
          ques={" How do you verify submitted events?"}
          ans={"Each submission is reviewed manually."}
        />
        <FaqCard
          ques={" Can I filter events by college or category?"}
          ans={"Yes, you can search and filter events based on category."}
        />
        <FaqCard
          ques={"How long does approval take?"}
          ans={"It takes 1-2 business days"}
        />
        <FaqCard
          ques={"Can I update/delete events?"}
          ans={"Yes, contact support for updates or deletions."}
        />
      </div>
    </div>
  );
}

export default Section3;
