import express from "express";
import {createProfile,loginProfile} from "./dbcontrollers.mjs";


const routers = express.Router();

routers.route("/signup").post(createProfile);
routers.route("/login").post(loginProfile);
// routers.route("/profile").post(findprofile);

export default routers;