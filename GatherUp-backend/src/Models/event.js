import mongoose from "mongoose";
const schema = mongoose.Schema

const eventSchema = new schema({
    name:{
        type: String,
        require: true
    },
    date:{
        type: Date,
        require: true
    },
    Venue: {
        type: String,
        require: true
    },
    City: {
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    StartTime: {
        type: Date,
        require: true
    },
    endTime:{
        type: Date,
        require: true
    }
});

const Event = mongoose.model("Event", eventSchema);
export default Event;