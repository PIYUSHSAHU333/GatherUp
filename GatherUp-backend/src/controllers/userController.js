import user from "../Models/users.js";
import jwt from "jsonwebtoken"

const signup = async (req, res) => {
  const { username, email, password } = req.body;

  const userExists = await user.findOne({ email });
  if (userExists)
    return res.status(400).json({ message: "User already exists" });

  const userExistsByUsername = await user.findOne({ username });
  if (userExistsByUsername) {
    return res.status(400).json({ message: "Username already taken" });
  }

  const newUser = new user({ username, email, password });
  await newUser.save();
  const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRETKEY, {
    expiresIn: "7d",
  });

  try {
    res.status(201).json({ message: "User registered successfully", token });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

const login = async (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;

  const newUser = await user.findOne({ username });
  console.log(newUser, "newUser");
  if (!newUser) return res.status(400).json({ message: "Invalid credentials" });

  const isMatch = await newUser.matchPassword(password);
  if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

  const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRETKEY, {
    expiresIn: "7d",
  });
  res.json({ token });
  // console.log(token);
};

export { login, signup };
