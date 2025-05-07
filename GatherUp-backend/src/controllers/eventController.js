import Event from "../Models/event.js";

const browseEvents = async(req, res)=>{
    console.log("GET /browseEvents hit");
  let allEvents = await Event.find({}).sort({ date: 1 });;
  res.json(allEvents);
}

const submitEvents = async(req, res)=>{
    try{
        const {name, Venue, City, description, StartTime, endTime, date} = req.body;

        const newEvent = new Event({
          name,
          Venue,
          City,
          description,
          StartTime,
          endTime,
          date
        });

        await newEvent.save();
        res.status(201).json({
          message: 'Event created successfully',
          event: newEvent
        });
    }catch(e){
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
}

const searchEvents = async (req, res) => {
  const searchTerm = req.query.q; // Get the query parameter from the URL

  if (!searchTerm) {
    return res.status(400).json({ message: "Query parameter is required" });
  }

  try {
    // Perform case-insensitive search using $regex
    const reqex = { $regex: searchTerm, $options: "i" }
    const events = await Event.find({
      $or:[
        {
          name: reqex
        }, 
        {
          Venue: reqex
        },
        {
          City: reqex
        },
        {
          description: reqex
        }
      ]
    }).sort({ date: 1 }) ;

    res.status(200).json(events); // Send the filtered events back to the frontend
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
}

export {browseEvents, submitEvents, searchEvents}