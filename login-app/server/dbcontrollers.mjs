import { User } from "./mongoschema.mjs";
import bcrypt from "bcrypt";

const createProfile= async(req,res)=>{
  const email=req.body.email;
  const user=await User.findOne({email});
  if(!user)
  {
    const data={
      firstName:req.body.firstname,
      lastName:req.body.lastname,
      email:req.body.email,
      password:await bcrypt.hash(req.body.password,5),
      mobileNumber:req.body.mobno,
      gender:req.body.gender,
    }
    const userdata =await User.create(data);
    console.log(userdata);
    res.json("Profile created sucessfully,please Login");
  }
  else{
    res.json("User already exist please login");

  }

};

  export{createProfile};