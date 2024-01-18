import express from "express";
import {createProfile,loginProfile,getProfile,editProfile,googleLogin,facebookLogin} from "./dbcontrollers.mjs";


const routers = express.Router();

routers.route("/signup").post(createProfile);
routers.route("/login").post(loginProfile);
routers.route("/profile").post(getProfile);
routers.route("/editprofile").post(editProfile);
routers.route("/google-login").post(googleLogin);
routers.route("/facebook-login").post(facebookLogin);


export default routers;