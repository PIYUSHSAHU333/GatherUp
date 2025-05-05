import dotenv from "dotenv";
dotenv.config();
import{ data} from "./data.js";
import Event from "../Models/event.js"
import mongoose from "mongoose";
const main = async ()=>{
    try{
        await mongoose.connect(process.env.MongoDb_Url);
        console.log("mongoose connected")
        await initDb()
    }catch(e){
        console.log("Db error:", e)
    }
    }
   
main()
async function initDb(){
   try{
    await Event.insertMany(data);
    console.log("Data initialised")
   }catch(e){
    console.log("error in initialisng data:", e)
   } 
}
