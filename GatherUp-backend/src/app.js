import express from "express";
import mongoose from "mongoose";
import Event from "./Models/event.js";
import dotenv from "dotenv";
import cors from "cors";
import user from "./Models/users.js";
import jwt from "jsonwebtoken"
import userRoute from "./routes/userRoutes.js"
import eventRoutes from "./routes/eventRoutes.js"
dotenv.config();
// import cors from "cors";
const app = express();
app.use(cors({origin: "http://localhost:5173", credentials: true}));
app.use(express.json());
app.use("/user", userRoute);
app.use("/events", eventRoutes);
const main = async () => {
  await mongoose.connect(process.env.MongoDb_Url);
  console.log("mongoose connected");
};
main();

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

app.listen("8080", (req, res) => {
  console.log("server listening on port 8080");
});
