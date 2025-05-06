import express from "express";
import mongoose from "mongoose";
import Event from "./Models/event.js";
import dotenv from "dotenv";
import cors from "cors";
import user from "./Models/users.js";
import jwt from "jsonwebtoken"
dotenv.config();
// import cors from "cors";
const app = express();
app.use(cors({origin: "http://localhost:5173", credentials: true}));
app.use(express.json());

const main = async () => {
  await mongoose.connect(process.env.MongoDb_Url);
  console.log("mongoose connected");
};
main();

app.get("/browseEvents", async (req, res) => {
  console.log("GET /browseEvents hit");
  let allEvents = await Event.find({});
  res.json(allEvents);
});
app.get("/verify-token", (req, res)=>{
  console.log("incoming header",req.headers);
  const token = req.headers['authorization'] && req.headers['authorization'].split(" ")[1];

  if (!token) {
    console.log("No token");
    return res.status(403).json({ message: 'No token provided' });
    
}

jwt.verify(token, process.env.JWT_SECRETKEY, (err, decoded) => {
  if (err) {
      console.log("Invalid token")
      return res.status(403).json({ message: 'Invalid token' });
  }
  console.log("Successful validation")
  res.status(200).json({ message: 'Token is valid' });  // Token is valid
});
});

app.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
  
    // Check if user already exists
    const userExists = await user.findOne({ email });
    if (userExists) return res.status(400).json({ message: 'User already exists' });
    
    const userExistsByUsername = await user.findOne({ username });
    if (userExistsByUsername) {
      return res.status(400).json({ message: 'Username already taken' });
    }
    // Create a new user
    const newUser = new user({ username, email, password });
    await newUser.save();
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRETKEY, { expiresIn: '7d' });
    
    try {
      res.status(201).json({ message: 'User registered successfully', token });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  });

app.post("/login", async (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;

  const newUser = await user.findOne({ username });
  console.log(newUser,"newUser")
  if (!newUser) return res.status(400).json({ message: "Invalid credentials" });

  const isMatch = await newUser.matchPassword(password);
  if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

  const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRETKEY, { expiresIn: '7d' });
  res.json({ token });
  // console.log(token);
});

app.listen("8080", (req, res) => {
  console.log("server listening on port 8080");
});
