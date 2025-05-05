import express from "express";
import mongoose from "mongoose";
import Event from "./Models/event.js";
import dotenv from "dotenv";
import cors from "cors"
dotenv.config();
// import cors from "cors";
const app = express();
app.use(cors())
const main = async ()=>{
    await mongoose.connect(process.env.MongoDb_Url);
    console.log("mongoose connected")
}
main()

app.get("/browseEvents", async(req, res)=>{
    console.log("GET /browseEvents hit");
    let allEvents = await Event.find({});
    console.log(allEvents)
    res.json(allEvents)
})


app.listen("8080", (req, res)=>{
    console.log("server listening on port 8080");
})