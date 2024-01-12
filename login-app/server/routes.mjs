import express from "express";
import {createProfile} from "./dbcontrollers.mjs";


const routers = express.Router();

// routers.route("/login").post();
routers.route("/signup").post(createProfile);
// routers.route("/login").post(loginProfile)

export default routers;