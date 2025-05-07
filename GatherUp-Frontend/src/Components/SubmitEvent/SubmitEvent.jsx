import React from "react";
import Form from "./form";
import "./submitevent.css";
import { Link } from "react-router-dom";
function SubmitEvent() {
  return (
    <div className="min-h-screen submitevent">
      <Link to={"/"}>
        <h1 className="mt-7 font-extrabold cursor-pointer ml-9 left-0 text-[#dd7109] sm:text-left">
          GATHER UP
        </h1>
      </Link>
      <Form />
    </div>
  );
}

export default SubmitEvent;
