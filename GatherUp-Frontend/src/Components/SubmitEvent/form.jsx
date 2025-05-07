import React, { useState } from "react";
import "./form.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Form() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [venue, setVenue] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !date ||
      !startTime ||
      !endTime ||
      !description ||
      !name ||
      !venue ||
      !city
    ) {
      alert("Please fill in all fields.");
      return;
    }

    const startDateTime = new Date(
      `${date}T${startTime}:00`
    ).toISOString();
    const endDateTime = new Date(
      `${date}T${endTime}:00`
    ).toISOString();
    const dateISO = new Date(`${date}T00:00:00`).toISOString();

    try {
      const response = await axios.post(
        "http://localhost:8080/events/submitEvent",
        {
          StartTime: startDateTime,
          endTime: endDateTime,
          date: dateISO,
          Venue: venue,
          City: city,
          name: name,
          description: description,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log("Event created:", response.data);
      alert("event submitted", response.data);
      navigate("/");
    } catch (err) {
      console.error("Error creating event:", err);
    }
  };
  return (
    <>
      <div class="form-container">
        <div class="form" onSubmit={handleSubmit}>
          <span class="heading">Fill out the details</span>
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            required
            class="input"
          />
          <input
            placeholder="Venue"
            value={venue}
            onChange={(e) => {
              setVenue(e.target.value);
            }}
            type="text"
            required
            class="input"
          />
          <input
            placeholder="City"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
            type="text"
            required
            class="input"
          />
          <input
            placeholder="date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
            type="date"
            required
            class="input"
          />
          Start Time
          <input
            placeholder="start time"
            id="mail"
            value={startTime}
            onChange={(e) => {
              setStartTime(e.target.value);
            }}
            required
            type="time"
            class="input"
          />
          End Time
          <input
            placeholder="end time"
            type="time"
            value={endTime}
            onChange={(e) => {
              setEndTime(e.target.value);
            }}
            required
            class="input"
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            rows="10"
            cols="30"
            required
            id="message"
            name="message"
            class="textarea"
          ></textarea>
          <div
            class="button-container flex justify-center text-xl text-[#001925] font-bold"
            onClick={handleSubmit}
            type="submit"
          >
            Submit
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
