import { User } from "./mongoschema.mjs";
import bcrypt from "bcrypt";

const createProfile= async(req,res)=>{
    const data={
      firstName:req.body.firstname,
      lastName:req.body.lastname,
      email:req.body.email,
      password:bcrypt.hash(req.body.password,5),
      mobileNumber:req.body.mobno,
      gender:req.body.gender,
    }
    const userdata =await User.create(data);
    console.log(userdata);
};
//   const loginProfile=();

  export{createProfile};