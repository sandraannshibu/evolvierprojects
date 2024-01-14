import express from "express";
import {createProfile,loginProfile,getProfile,editProfile} from "./dbcontrollers.mjs";


const routers = express.Router();

routers.route("/signup").post(createProfile);
routers.route("/login").post(loginProfile);
routers.route("/profile").post(getProfile);
routers.route("/editprofile").post(editProfile);


export default routers;