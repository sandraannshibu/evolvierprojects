import { User } from "./mongoschema.mjs";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createProfile = async (req, res) => {
  const email = req.body.email;
  const user = await User.findOne({ email });
  if (!user) {
    const data = {
      firstName: req.body.firstname,
      lastName: req.body.lastname,
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, 5),
      mobileNumber: req.body.mobno,
      gender: req.body.gender,
    };
    const userdata = await User.create(data);
    console.log(userdata);
    res.json("Profile created sucessfully,please Login");
  } else {
    res.json("User already exist please login");
  }
};
const loginProfile = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const user = await User.findOne({ email });
  if (user) {
    const matchpassword = await bcrypt.compare(password, user.password);
    if (matchpassword) {
      const token = jwt.sign({ userId: user._id }, process.env.secret_key, {
        expiresIn: "1h",
      });
      res.json({ message: "Login successful", token });
    } else {
      res.json({ message: "Incorrect Email or password" });
    }
  } else {
    res.json({ message: "User not found,please SignUp" });
  }
};
const getProfile = async (req, res) => {
  const token = req.body.token;
  try {
    const decodedToken = jwt.verify(token, process.env.secret_key); // Replace with your actual secret key
    const userId = decodedToken.userId;
    const user = await User.findById(userId);
    console.log(user);
    res.json(user);
  } catch (error) {
    console.error("Invalid token:", error.message);
  }
};
const editProfile = async (req, res) => {
  try {
    const token = req.body.token;
    let userId;
    if (token) {
      try {
        const decodedToken = jwt.verify(token, process.env.secret_key); // Replace with your actual secret key
        userId = decodedToken.userId;
      } catch (error) {
        console.error("Invalid token:", error.message);
      }
    }
    console.log(req.body.data.firstname);
    const userData = {
      firstName: req.body.data.firstname,
      lastName: req.body.data.lastname,
      email: req.body.data.email,
      password: await bcrypt.hash(req.body.data.password, 5),
      mobileNumber: req.body.data.mobno,
      gender: req.body.data.gender,
    };
    console.log(userData);
    const result = await User.updateOne({ _id: userId }, userData);
    console.log(result);
    if (result) {
      res.json("Profile Sucessfully Updated");
      console.log("request sent ");
    }
  } catch (error) {
    console.error("Error in updating profile");
    res.json("error in updating profile");
  }
};
export { createProfile, loginProfile, getProfile, editProfile };
