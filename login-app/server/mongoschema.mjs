import mongoose from "mongoose";

const LoginSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const login = new mongoose.model("loggedusers", LoginSchema);

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: true,
    unique:true,
  },
  gender: {
    type: String,
    // enum: ['Male', 'Female', 'Other'],
    required: true,
  },
});

const User = new mongoose.model("users", userSchema);

export{ User, login };
